#!/usr/bin/env python3
"""
Weather Data Scraper
Fetches weather data from Open-Meteo API (a free, open-source weather API)
and saves it to a CSV file.
"""

import requests
import csv
from datetime import datetime
import sys


def fetch_weather_data(latitude=40.7128, longitude=-74.0060, location_name="New York"):
    """
    Fetch weather data from Open-Meteo API.
    
    Args:
        latitude (float): Latitude of the location
        longitude (float): Longitude of the location
        location_name (str): Name of the location for reference
    
    Returns:
        dict: Weather data or None if request fails
    """
    # Open-Meteo API endpoint (free, no API key required)
    base_url = "https://api.open-meteo.com/v1/forecast"
    
    # Parameters for the API request
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "current_weather": True,
        "hourly": "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation",
        "timezone": "auto",
        "forecast_days": 1
    }
    
    try:
        print(f"Fetching weather data for {location_name}...")
        response = requests.get(base_url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        print("Weather data fetched successfully!")
        return {
            "location": location_name,
            "latitude": latitude,
            "longitude": longitude,
            "data": data
        }
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return None


def save_to_csv(weather_data, filename="weather_data.csv"):
    """
    Save weather data to a CSV file.
    
    Args:
        weather_data (dict): Weather data from API
        filename (str): Output CSV filename
    """
    if not weather_data:
        print("No weather data to save.")
        return
    
    try:
        current = weather_data["data"]["current_weather"]
        hourly = weather_data["data"]["hourly"]
        
        # Prepare CSV data
        csv_data = []
        
        # Add current weather as first row
        csv_data.append({
            "timestamp": current["time"],
            "location": weather_data["location"],
            "latitude": weather_data["latitude"],
            "longitude": weather_data["longitude"],
            "temperature_celsius": current["temperature"],
            "wind_speed_kmh": current["windspeed"],
            "wind_direction_degrees": current["winddirection"],
            "weather_code": current["weathercode"],
            "humidity_percent": "",
            "precipitation_mm": "",
            "data_type": "current"
        })
        
        # Add hourly forecast data
        for i in range(len(hourly["time"])):
            csv_data.append({
                "timestamp": hourly["time"][i],
                "location": weather_data["location"],
                "latitude": weather_data["latitude"],
                "longitude": weather_data["longitude"],
                "temperature_celsius": hourly["temperature_2m"][i],
                "wind_speed_kmh": hourly["wind_speed_10m"][i],
                "wind_direction_degrees": "",
                "weather_code": "",
                "humidity_percent": hourly["relative_humidity_2m"][i],
                "precipitation_mm": hourly["precipitation"][i],
                "data_type": "hourly_forecast"
            })
        
        # Write to CSV
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = [
                "timestamp", "location", "latitude", "longitude",
                "temperature_celsius", "wind_speed_kmh", "wind_direction_degrees",
                "weather_code", "humidity_percent", "precipitation_mm", "data_type"
            ]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
            writer.writeheader()
            writer.writerows(csv_data)
        
        print(f"Weather data saved to {filename}")
        print(f"Total records saved: {len(csv_data)}")
        
    except Exception as e:
        print(f"Error saving to CSV: {e}")


def print_current_weather(weather_data):
    """
    Print current weather information to console.
    
    Args:
        weather_data (dict): Weather data from API
    """
    if not weather_data:
        return
    
    current = weather_data["data"]["current_weather"]
    print("\n" + "="*50)
    print(f"Current Weather for {weather_data['location']}")
    print("="*50)
    print(f"Time: {current['time']}")
    print(f"Temperature: {current['temperature']}°C")
    print(f"Wind Speed: {current['windspeed']} km/h")
    print(f"Wind Direction: {current['winddirection']}°")
    print(f"Weather Code: {current['weathercode']}")
    print("="*50 + "\n")


def main():
    """Main function to run the weather scraper."""
    print("Weather Data Scraper")
    print("=" * 50)
    
    # Default locations to fetch weather for
    locations = [
        {"name": "New York", "lat": 40.7128, "lon": -74.0060},
        {"name": "London", "lat": 51.5074, "lon": -0.1278},
        {"name": "Tokyo", "lat": 35.6762, "lon": 139.6503},
    ]
    
    # Allow custom location via command line arguments
    if len(sys.argv) >= 4:
        locations = [{
            "name": sys.argv[1],
            "lat": float(sys.argv[2]),
            "lon": float(sys.argv[3])
        }]
    
    # Fetch and save weather data for each location
    for location in locations:
        weather_data = fetch_weather_data(
            latitude=location["lat"],
            longitude=location["lon"],
            location_name=location["name"]
        )
        
        if weather_data:
            print_current_weather(weather_data)
            filename = f"weather_data_{location['name'].lower().replace(' ', '_')}.csv"
            save_to_csv(weather_data, filename)
            print()
    
    print("Weather scraping completed!")


if __name__ == "__main__":
    main()
