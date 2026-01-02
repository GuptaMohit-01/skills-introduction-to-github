# Weather Data Scraper

A Python script that fetches weather data from the Open-Meteo API (a free, open-source weather API) and saves it to CSV files.

## Features

- 🌤️ Fetches current weather data
- 📊 Retrieves hourly weather forecasts
- 💾 Saves data to CSV format
- 🌍 Supports multiple locations
- 🔓 No API key required (uses Open-Meteo free API)

## Prerequisites

- Python 3.6 or higher
- pip (Python package manager)

## Installation

1. Navigate to the weather-scraper directory:
   ```bash
   cd weather-scraper
   ```

2. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Basic Usage

Run the script with default locations (New York, London, Tokyo):

```bash
python weather_scraper.py
```

This will create separate CSV files for each location:
- `weather_data_new_york.csv`
- `weather_data_london.csv`
- `weather_data_tokyo.csv`

### Custom Location

Fetch weather data for a specific location by providing the location name, latitude, and longitude:

```bash
python weather_scraper.py "Los Angeles" 34.0522 -118.2437
```

### Example Output

The script will:
1. Display current weather information in the console
2. Save detailed data to a CSV file with the following columns:
   - timestamp
   - location
   - latitude
   - longitude
   - temperature_celsius
   - wind_speed_kmh
   - wind_direction_degrees
   - weather_code
   - humidity_percent
   - precipitation_mm
   - data_type (current or hourly_forecast)

## Weather Data

The script fetches the following weather information:

### Current Weather
- Temperature (°C)
- Wind speed (km/h)
- Wind direction (degrees)
- Weather code

### Hourly Forecast (24 hours)
- Temperature
- Relative humidity
- Wind speed
- Precipitation

## API Information

This script uses the [Open-Meteo API](https://open-meteo.com/), which is:
- Free and open-source
- No API key required
- No rate limiting for non-commercial use
- Provides accurate weather forecasts worldwide

## CSV Output Format

The generated CSV files contain weather data with timestamps, allowing you to:
- Analyze weather patterns
- Create weather visualizations
- Track historical weather data
- Build weather-based applications

## Finding Coordinates

To use custom locations, you need latitude and longitude coordinates. You can find these by:
1. Using Google Maps (right-click on a location → click on coordinates)
2. Using [LatLong.net](https://www.latlong.net/)
3. Using any geocoding service

## Error Handling

The script includes error handling for:
- Network connectivity issues
- Invalid API responses
- File writing errors
- Invalid input parameters

## Example Console Output

```
Weather Data Scraper
==================================================
Fetching weather data for New York...
Weather data fetched successfully!

==================================================
Current Weather for New York
==================================================
Time: 2026-01-02T18:00
Temperature: 5.2°C
Wind Speed: 15.3 km/h
Wind Direction: 230°
Weather Code: 3
==================================================

Weather data saved to weather_data_new_york.csv
Total records saved: 25
```

## License

MIT
