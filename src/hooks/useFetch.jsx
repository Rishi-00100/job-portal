import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url);
        const resutl = await res.json();
        setData(resutl);
      } catch (error) {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [url])

  return {data, loading, error}
}