import { useState, useEffect } from "react"

import axios from 'axios';

const useAxios = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] =useState([])
    const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data)
        setIsLoading(false)
        setError(false)
      })
      .catch(err => {
        if (err.message === 'AboutError') {
                console.log('fetch aborted');
            } else {
                setIsLoading(false)
            setError(err.message)
            }
      })
  }, [url]);

  return {data, isLoading, error}
}

export default useAxios