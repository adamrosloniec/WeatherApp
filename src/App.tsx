import React from "react"
import { useLocation } from "react-router-dom"
import Background from "./components/Background"
import DailyForecast from "./components/DailyForecast"
import LoadingSpinner from "./components/LoadingSpinner"
import Nav from "./components/Nav"
import { IDaily } from "./types"
import { params, url } from "./utils"

interface AppProps {
  day: string
}

export interface WeatherData {
  current: {
    time: string
    temperature_2m: number
    rain: number
  }
  daily: IDaily
}

const App = ({ day }: AppProps) => {
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    if (!isLoading && !weatherData) {
      fetchWeatherData()
    }
  }, [location, isLoading, weatherData])

  const fetchWeatherData = async () => {
    try {
      setIsLoading(true)
      const queryString = new URLSearchParams(params as any).toString()
      const response = await fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.error("Error fetching weather data:", error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }

  const getBackgroundColor = () => {
    if (!weatherData) return "bg-white"

    const { current } = weatherData
    return current.rain > 0 ? "bg-blue-900 text-white" : "bg-yellow-400"
  }

  const daily = weatherData?.daily
  const index = day === "today" ? 0 : 1

  return (
    <div
      className={`app min-h-screen flex items-center justify-center text-center ${getBackgroundColor()}`}
    >
      <Background />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Nav index={index} />
          {daily ? (
            <DailyForecast index={index} daily={daily} />
          ) : (
            <p className="text-xl">Failed to fetch weather data.</p>
          )}
        </>
      )}
    </div>
  )
}

export default App
