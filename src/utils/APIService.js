import { useState, useEffect } from "react"

const APIService = ({ apiRoute, method }) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`/server/${apiRoute}/index.get.json`, {
      method: method,
    })
      .then((response) => response.json())
      .then((data) => {
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
