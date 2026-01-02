# Web Development Projects

This repository contains three practical web development projects demonstrating essential coding concepts and modern web technologies.

## 📁 Projects

### 1. To-Do List Application (`todo-app/`)
A fully functional task management application with the following features:
- Add new tasks
- Mark tasks as complete/incomplete
- Delete individual tasks
- Clear all completed tasks
- Task counter showing remaining tasks
- Persistent storage using localStorage
- Responsive design

**Technologies:** HTML, CSS, JavaScript, LocalStorage

### 2. OAuth Authentication (`oauth-auth/`)
An educational demonstration of OAuth 2.0 authentication flow:
- Simulated GitHub OAuth integration
- Simulated Google OAuth integration
- Demo login functionality
- User profile display
- Session management
- Comprehensive setup documentation

**Technologies:** HTML, CSS, JavaScript, OAuth 2.0

**Note:** This is a demonstration. In production, OAuth flows should be implemented server-side for security.

### 3. Weather Forecast API Integration (`weather-app/`)
A real-time weather information application featuring:
- City search functionality
- Current temperature and conditions
- "Feels like" temperature
- Wind speed and humidity
- Atmospheric pressure
- Weather icons
- Geocoding integration
- Error handling

**Technologies:** HTML, CSS, JavaScript, REST APIs, Async/Await, Fetch API

**API:** Uses Open-Meteo API (no API key required) and OpenStreetMap Nominatim for geocoding.

## 🚀 Getting Started

### Running the Projects

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd skills-introduction-to-github
   ```

2. **Open in browser:**
   - Open `index.html` in your web browser to see all projects
   - Or navigate to individual project folders and open their `index.html` files

3. **No build process required!**
   - All projects are vanilla HTML/CSS/JavaScript
   - No dependencies or npm packages to install
   - Just open the HTML files directly in a browser

### Project Structure

```
.
├── index.html                 # Main landing page
├── todo-app/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── oauth-auth/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── weather-app/
    ├── index.html
    ├── styles.css
    └── script.js
```

## 🎓 Learning Objectives

These projects demonstrate:

### Frontend Development
- DOM manipulation
- Event handling
- Form validation
- Responsive design
- CSS animations and transitions

### JavaScript Concepts
- ES6+ syntax
- Async/await
- Promises
- Array methods (map, filter, find)
- LocalStorage API
- Fetch API

### API Integration
- RESTful API consumption
- Error handling
- Loading states
- Data parsing and display

### Best Practices
- Code organization
- Security considerations (XSS prevention)
- User experience (loading indicators, error messages)
- Responsive design principles

## 🛠️ Customization

### To-Do List
- Modify styles in `styles.css` to change colors and layout
- Add categories or tags to tasks
- Implement filtering (all, active, completed)
- Add due dates

### OAuth Authentication
- Replace simulated flows with real OAuth implementations
- Add more providers (Facebook, Twitter, etc.)
- Implement server-side token exchange
- Add user profile editing

### Weather Forecast
- Switch to OpenWeatherMap API for more features
- Add 5-day forecast
- Implement location detection (geolocation API)
- Add weather alerts
- Include more weather metrics

## 📝 API Keys and Configuration

### Weather App
The weather app uses free APIs that don't require keys:
- **Open-Meteo API:** Weather data
- **OpenStreetMap Nominatim:** Geocoding

For production or more features, consider:
- **OpenWeatherMap:** Sign up at https://openweathermap.org/api
- Replace the API calls in `weather-app/script.js` with OpenWeatherMap endpoints
- Free tier: 60 calls/minute, 1M calls/month

### OAuth App
To implement real OAuth:
1. Register your app with OAuth providers:
   - **GitHub:** https://github.com/settings/developers
   - **Google:** https://console.cloud.google.com/
2. Configure redirect URIs
3. Obtain Client ID and Client Secret
4. Implement server-side token exchange
5. Never expose secrets in client-side code

## 🔒 Security Considerations

1. **XSS Prevention:** All user inputs are sanitized using proper escaping
2. **OAuth Security:** Demo only - implement OAuth server-side in production
3. **API Keys:** Never commit API keys to version control
4. **HTTPS:** Use HTTPS in production for secure data transmission
5. **CORS:** Be aware of CORS policies when integrating APIs

## 🌐 Browser Support

These projects work in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📄 License

See the main repository LICENSE file for details.

## 🤝 Contributing

Feel free to fork these projects and customize them for your needs!

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [OAuth 2.0 Simplified](https://www.oauth.com/)
- [REST API Tutorial](https://restfulapi.net/)

---

Built as practical examples for web development education.
