export const params = {
  latitude: 52.2298,
  longitude: 21.0118,
  current: ["temperature_2m", "rain"],
  daily: ["temperature_2m_max", "temperature_2m_min", "rain_sum"],
  forecast_days: 3,
}

export const url = `https://api.open-meteo.com/v1/forecast`
