# Atmos — Global 10-Day Weather

A responsive weather app built with Next.js, React and TypeScript for GitHub + Vercel.

## Features
- Global city search using Open-Meteo Geocoding API
- Browser geolocation
- Current conditions and local time
- 10-day daily forecast and 24-hour hourly outlook
- Temperature, feels-like, humidity, dew point, rain chance and rainfall
- Wind speed, direction and gusts
- Sea-level and surface pressure, cloud cover and visibility
- UV index, sunrise, sunset, daylight and sunshine duration
- Rain, showers, snowfall and evapotranspiration
- Celsius/Fahrenheit and metric/imperial unit switching
- Basic alerts for high UV, high precipitation probability, strong gusts and thunderstorms
- Responsive desktop and mobile layout

## Data provider
Uses [Open-Meteo Forecast API](https://open-meteo.com/en/docs) and [Geocoding API](https://open-meteo.com/en/docs/geocoding-api). No API key is needed for the free non-commercial API. Attribution is included in the app footer. Review Open-Meteo's current terms and pricing before commercial or high-volume use.

## Run locally
Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Extract the ZIP.
2. Push the project files to a new GitHub repository.
3. In Vercel, choose Add New → Project and import the repository.
4. Keep the default Next.js settings and deploy. No environment variables are required.

## Notes
- Forecasts are model-based estimates, not official emergency warnings.
- City search may return multiple matches; choose the correct region/country.
- Geolocation requires browser permission and HTTPS (Vercel provides HTTPS).
- The free API is intended for non-commercial use subject to provider terms. Check current limits and licensing before commercial use.
- "Current" conditions are provider model-derived values and may differ from an official nearby observation station.
