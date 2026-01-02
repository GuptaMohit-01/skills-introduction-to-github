// OAuth Authentication Demo

// Check for stored session on page load
document.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem('oauthUser');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            showProfile(user);
        } catch (error) {
            console.error('Failed to parse stored user data:', error);
            localStorage.removeItem('oauthUser');
        }
    }
    
    // Check if we're returning from OAuth callback
    handleOAuthCallback();
});

// Demo login (no actual OAuth)
function loginDemo() {
    const demoUser = {
        name: 'Demo User',
        email: 'demo@example.com',
        provider: 'Demo',
        avatar: '👤'
    };
    
    localStorage.setItem('oauthUser', JSON.stringify(demoUser));
    showProfile(demoUser);
}

// GitHub OAuth login
function loginWithGitHub() {
    // In a real implementation, you would:
    // 1. Redirect to GitHub's authorization URL
    // 2. Include your client_id, redirect_uri, and scope
    // 3. Handle the callback with authorization code
    
    alert('GitHub OAuth Flow:\n\n' +
          '1. Redirect to: https://github.com/login/oauth/authorize\n' +
          '2. User authorizes your app\n' +
          '3. GitHub redirects back with authorization code\n' +
          '4. Exchange code for access token\n' +
          '5. Use token to access GitHub API\n\n' +
          'For this demo, we\'ll simulate a successful login.');
    
    // Simulate OAuth response
    setTimeout(() => {
        const githubUser = {
            name: 'GitHub User',
            email: 'user@github.com',
            provider: 'GitHub',
            avatar: '🐙'
        };
        localStorage.setItem('oauthUser', JSON.stringify(githubUser));
        showProfile(githubUser);
    }, 1000);
}

// Google OAuth login
function loginWithGoogle() {
    // In a real implementation, you would:
    // 1. Use Google's OAuth 2.0 library or redirect to Google's auth endpoint
    // 2. Include your client_id, redirect_uri, and scope
    // 3. Handle the callback with authorization code
    // 4. Exchange code for access token and ID token
    
    alert('Google OAuth Flow:\n\n' +
          '1. Initialize Google OAuth library\n' +
          '2. Request authorization with scopes\n' +
          '3. User signs in with Google\n' +
          '4. Receive ID token and access token\n' +
          '5. Verify ID token and extract user info\n\n' +
          'For this demo, we\'ll simulate a successful login.');
    
    // Simulate OAuth response
    setTimeout(() => {
        const googleUser = {
            name: 'Google User',
            email: 'user@gmail.com',
            provider: 'Google',
            avatar: '🔑'
        };
        localStorage.setItem('oauthUser', JSON.stringify(googleUser));
        showProfile(googleUser);
    }, 1000);
}

// Handle OAuth callback
function handleOAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    
    if (code) {
        // In a real implementation, you would:
        // 1. Verify the state parameter matches
        // 2. Exchange the authorization code for an access token
        // 3. Use the access token to get user information
        console.log('Authorization code received:', code);
        console.log('State:', state);
        
        // Clear the URL parameters
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Show user profile
function showProfile(user) {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('profileSection').classList.remove('hidden');
    
    document.getElementById('userAvatar').textContent = user.avatar;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('authProvider').textContent = user.provider;
}

// Logout
function logout() {
    localStorage.removeItem('oauthUser');
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('profileSection').classList.add('hidden');
}

// Example: How to implement real OAuth 2.0 Authorization Code Flow
/*
function realOAuthFlow() {
    // Step 1: Redirect to authorization endpoint
    const clientId = 'YOUR_CLIENT_ID';
    const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
    const scope = encodeURIComponent('user:email');
    const state = generateRandomState(); // CSRF protection
    
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    
    // Save state to verify later
    sessionStorage.setItem('oauth_state', state);
    
    // Redirect user
    window.location.href = authUrl;
}

// Step 2: Handle callback (on redirect URI page)
async function handleCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    
    // Verify state
    const savedState = sessionStorage.getItem('oauth_state');
    if (state !== savedState) {
        throw new Error('State mismatch - possible CSRF attack');
    }
    
    // Step 3: Exchange code for token (server-side)
    const response = await fetch('/api/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
    });
    
    const { access_token } = await response.json();
    
    // Step 4: Use token to get user data
    const userResponse = await fetch('https://api.github.com/user', {
        headers: { 'Authorization': `Bearer ${access_token}` }
    });
    
    const userData = await userResponse.json();
    return userData;
}
*/
