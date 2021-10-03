import React, { useEffect, useState } from 'react'

  function useFetch<T>(url : string) : { data : T | null, error : boolean, loading : boolean}{
  const [loading, setLoading] = useState< boolean >(true);
  const [error, setError] = useState< boolean >(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {

    fetch(url)
    .then((resp) => resp.json())
    .then((resp : T) => setData(resp)!)
    .catch((error) => console.log(error))
    },[url])
  
    if(error){
        setError(true)
    }else{
    setLoading(false)
    }
     
    return { error , loading , data }
  }

export default useFetch