import {useState,useEffect} from 'react'

const useFetch=(url)=>{
 const [data, setdata] = useState([])
 const [loading, setloading] = useState(false)
 const [error, seterror] = useState(null);

 useEffect(()=>{
    const fetchData =async()=>{
        setloading(true)
        try {
            const res = await fetch(url);
            if(!res.ok){
             seterror("failed to fetch Data");
                 alert("failed to fetch Data");
            }
            const result = await res.json();
            setdata(result.data);
            // console.log(result.data);
            setloading(false);
        } catch (error) {
            seterror(error);
            setloading(false);
        }
    };
    fetchData();
 },[url]);
 
 return{data,error,loading};
}
export default useFetch