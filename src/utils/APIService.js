import { useState, useEffect } from "react"
import axios from "axios"

const APIService = ({ apiRoute, method }) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://jsonkeeper.com/b/${apiRoute}`)
      .then((response) => {
        console.log("RESPONSE", response)
        response.json()
      })
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
