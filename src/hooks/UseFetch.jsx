import { useEffect, useState } from "react";

function useFetch(url,method = 'GET') {
    let [data,setData] = useState(null);
    let [postData,setPostData] = useState('');
    let [ loading, setLoading ] = useState(false);
    let [ error, setError ] = useState(null);

    useEffect(() => {
      let abortController = new AbortController();
      let signal = abortController.signal;
      let option = {
        signal,
        method
      };
        setLoading(true);
        let fetchData = ()=>{
          fetch(url , option)
        .then(res => {
          if(!res.ok) {
            throw Error('something went wrong');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch(e => {
          setError(e.message);
        })
        }
        if(method  === 'POST' && postData){
          option = {
            ...option,
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify(postData)
          }
          fetchData();
        }
        
        if(method === 'GET'){
          fetchData();
        }
        //cleanup function
        return () => {
          abortController.abort();
        }
      },[url,postData]);
    return { setPostData, data , loading , error };
}

export default useFetch;