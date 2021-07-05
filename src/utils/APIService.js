import { useState, useEffect } from "react"

const APIService = ({ apiRoute, method }) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://jolly-austin-1d1ebc.netlify.app/server/${apiRoute}/index.get.json`,
      {
        method: method,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data)
        setResponse(data)
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }, [])

  return {
    response,
    isLoading,
  }
}

export default APIService
