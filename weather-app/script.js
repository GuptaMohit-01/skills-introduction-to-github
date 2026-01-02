// Weather Forecast Application

// Weather icon mapping
const weatherIcons = {
    'clear': '☀️',
    'clouds': '☁️',
    'rain': '🌧️',
    'drizzle': '🌦️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️',
    'fog': '🌫️',
    'haze': '🌫️'
};

// Load weather on page load
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchWeather();
        }
    });
    
    // Load default city weather
    searchWeather();
});

// Search weather for a city
async function searchWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    showLoading();
    
    try {
        // First, get coordinates for the city using geocoding
        const geoData = await geocodeCity(city);
        
        if (!geoData) {
            showError('City not found. Please try another city.');
            return;
        }
        
        // Get weather data using coordinates
        const weatherData = await getWeatherData(geoData.lat, geoData.lon);
        
        displayWeather(weatherData, geoData);
    } catch (error) {
        console.error('Error fetching weather:', error);
        showError('Failed to fetch weather data. Please try again.');
    }
}

// Geocode city name to coordinates
async function geocodeCity(city) {
    try {
        // Using OpenStreetMap Nominatim API for geocoding (free, no API key needed)
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`
        );
        
        if (!response.ok) {
            throw new Error('Geocoding request failed');
        }
        
        const data = await response.json();
        
        if (data.length === 0) {
            return null;
        }
        
        return {
            lat: parseFloat(data[0].lat),
            lon: parseFloat(data[0].lon),
            name: data[0].display_name.split(',')[0],
            country: data[0].display_name.split(',').slice(-1)[0].trim()
        };
    } catch (error) {
        console.error('Geocoding error:', error);
        throw error;
    }
}

// Get weather data from Open-Meteo API (free, no API key needed)
async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure&timezone=auto`
        );
        
        if (!response.ok) {
            throw new Error('Weather request failed');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Weather API error:', error);
        throw error;
    }
}

// Display weather data
function displayWeather(weatherData, geoData) {
    hideLoading();
    hideError();
    
    const weatherSection = document.getElementById('weatherSection');
    weatherSection.classList.remove('hidden');
    
    // Extract current weather data
    const current = weatherData.current;
    const temp = Math.round(current.temperature_2m);
    const feelsLike = Math.round(current.apparent_temperature);
    const humidity = current.relative_humidity_2m;
    const windSpeed = current.wind_speed_10m;
    const pressure = current.surface_pressure;
    const weatherCode = current.weather_code;
    
    // Update location
    document.getElementById('cityName').textContent = geoData.name;
    document.getElementById('country').textContent = geoData.country;
    
    // Update temperature
    document.getElementById('temp').textContent = temp;
    
    // Update weather icon and description
    const weatherInfo = getWeatherInfo(weatherCode);
    document.getElementById('weatherIcon').textContent = weatherInfo.icon;
    document.getElementById('weatherDesc').textContent = weatherInfo.description;
    
    // Update details
    document.getElementById('windSpeed').textContent = `${windSpeed} m/s`;
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('feelsLike').textContent = `${feelsLike}°C`;
    document.getElementById('pressure').textContent = `${pressure} hPa`;
}

// Get weather info from WMO code
function getWeatherInfo(code) {
    const weatherCodes = {
        0: { description: 'Clear sky', icon: '☀️' },
        1: { description: 'Mainly clear', icon: '🌤️' },
        2: { description: 'Partly cloudy', icon: '⛅' },
        3: { description: 'Overcast', icon: '☁️' },
        45: { description: 'Foggy', icon: '🌫️' },
        48: { description: 'Foggy', icon: '🌫️' },
        51: { description: 'Light drizzle', icon: '🌦️' },
        53: { description: 'Moderate drizzle', icon: '🌦️' },
        55: { description: 'Dense drizzle', icon: '🌧️' },
        61: { description: 'Slight rain', icon: '🌧️' },
        63: { description: 'Moderate rain', icon: '🌧️' },
        65: { description: 'Heavy rain', icon: '🌧️' },
        71: { description: 'Slight snow', icon: '❄️' },
        73: { description: 'Moderate snow', icon: '❄️' },
        75: { description: 'Heavy snow', icon: '❄️' },
        95: { description: 'Thunderstorm', icon: '⛈️' },
        96: { description: 'Thunderstorm with hail', icon: '⛈️' },
        99: { description: 'Thunderstorm with heavy hail', icon: '⛈️' }
    };
    
    return weatherCodes[code] || { description: 'Unknown', icon: '🌡️' };
}

// Show loading state
function showLoading() {
    document.getElementById('loadingSection').classList.remove('hidden');
    document.getElementById('weatherSection').classList.add('hidden');
    document.getElementById('errorSection').classList.add('hidden');
}

// Hide loading state
function hideLoading() {
    document.getElementById('loadingSection').classList.add('hidden');
}

// Show error message
function showError(message) {
    hideLoading();
    document.getElementById('weatherSection').classList.add('hidden');
    document.getElementById('errorSection').classList.remove('hidden');
    document.getElementById('errorMessage').textContent = message;
}

// Hide error message
function hideError() {
    document.getElementById('errorSection').classList.add('hidden');
}

/*
 * Alternative implementation using OpenWeatherMap API (requires API key)
 * 
 * 1. Sign up at: https://openweathermap.org/api
 * 2. Get your API key
 * 3. Use the following code:
 */

/*
const API_KEY = 'YOUR_API_KEY_HERE';

async function getWeatherDataOpenWeatherMap(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather request failed');
        }
        
        const data = await response.json();
        
        return {
            city: data.name,
            country: data.sys.country,
            temp: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].main.toLowerCase()
        };
    } catch (error) {
        console.error('OpenWeatherMap API error:', error);
        throw error;
    }
}
*/
