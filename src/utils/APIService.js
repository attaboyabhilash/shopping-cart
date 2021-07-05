import { useState, useEffect } from "react"

const APIService = ({ apiRoute, method }) => {
  const [response, setResponse] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://jsonkeeper.com/b/${apiRoute}`, {
      method: method,
      mode: "cors",
    })
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
