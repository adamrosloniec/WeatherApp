import { IDaily } from "../types"

export interface IDailyForecast {
  daily: IDaily
  index: number
  day?: string
}

const DailyForecast = ({ daily, index, day = "today" }: IDailyForecast) => {
  const maxTemperature = daily.temperature_2m_max[index]
  const minTemperature = daily.temperature_2m_min[index]
  const rain = daily.rain_sum[index]

  // Function to render emoji icon based on temperature
  const renderTemperatureIcon = (temperature: number) => {
    if (temperature <= 0) {
      return "❄️" // Snowflake emoji for cold temperatures
    } else if (temperature > 0 && temperature < 10) {
      return "🌡️" // Thermometer emoji for cold temperatures
    } else if (temperature >= 10 && temperature < 20) {
      return "🌦️" // Cloud with rain emoji for cool temperatures
    } else if (temperature >= 20 && temperature < 25) {
      return "⛅" // Sun behind cloud emoji for mild temperatures
    } else if (temperature >= 25 && temperature < 28) {
      return "🌞" // Sun with small cloud emoji for warm temperatures
    } else if (temperature >= 28 && temperature < 30) {
      return "🔥" // Fire emoji for hot temperatures
    } else if (temperature >= 30 && temperature < 32) {
      return "🏖️" // Beach with umbrella emoji for very hot temperatures
    } else if (temperature >= 32 && temperature < 35) {
      return "🌴" // Palm tree emoji for extremely hot temperatures
    } else if (temperature >= 35 && temperature < 40) {
      return "🏜️" // Desert emoji for scorching temperatures
    } else if (temperature >= 40) {
      return "🔆" // Brightness emoji for extreme heat
    } else {
      return "" // Default empty string if temperature doesn't match conditions
    }
  }

  // Function to render emoji icon based on rainfall
  const renderRainIcon = (rain: number) => {
    if (rain > 0) {
      return "🌧️" // Cloud with rain emoji for rainy weather
    } else {
      return "" // Default empty string if no rain
    }
  }

  // Function to generate dynamic weather message
  const renderWeatherMessage = (temperature: number, rain: number) => {
    if (temperature >= 30) {
      return `Wow! It's scorching hot outside!`
    }

    if (temperature >= 28) {
      return `It's a hot day today! Stay cool!`
    }

    if (temperature >= 25) {
      return `It's a sunny day! Enjoy the sunshine!`
    }

    if (temperature >= 20 && temperature <= 24) {
      const temperatureMessages: Record<number, string> = {
        20: `Mild and pleasant weather today!`,
        21: `A perfect day to go outside!`,
        22: `Beautiful weather ahead!`,
        23: `Just right! Enjoy the day!`,
        24: `Lovely weather to be outdoors!`,
      }

      return temperatureMessages[temperature] || `Nice weather forecast!`
    }

    if (rain > 0) {
      return `Expect some sun and rain today! 🌦️`
    }

    if (rain === 0 && temperature < 25) {
      return `No rain today, just pure sunshine! ☀️`
    }

    return `Weather forecast:`
  }

  return (
    <div className="p-4 md:p-16 text-center">
      <div className="text-4xl md:text-7xl mb-4">
        {renderTemperatureIcon(maxTemperature)}
      </div>
      <div className="text-base md:text-lg font-semibold mb-2">
        {renderWeatherMessage(maxTemperature, rain)}
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <div className="mb-2">
            <strong>Date:</strong>{" "}
            {new Date(daily.time[index]).toLocaleDateString()}
          </div>
          <div className="mb-2">
            <strong>Max Temperature:</strong> {maxTemperature} °C
          </div>
          <div className="mb-2">
            <strong>Min Temperature:</strong> {minTemperature} °C
          </div>
          <div>
            <strong>Rainfall:</strong> {rain} mm {renderRainIcon(rain)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyForecast
