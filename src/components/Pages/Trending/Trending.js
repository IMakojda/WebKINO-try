import axios from 'axios';
import { useEffect, useState } from 'react';

// axios.<method> will now provide autocomplete and parameter typings

const Trending = ()=>{
  const [page, setPage] = useState(1);
  const [content, setContent]=useState([]);

  const fetchTrending = async ()=> {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`) 
    console.log(data);
    setContent(data.results);

  }
  

  

  useEffect(()=>{
    window.scroll(0, 0);
    fetchTrending()

  },[page])

  return(
    <div>
      <span className="pageTitle">Treding</span>
        <div className='trending'>
          {
            content && content.map((c)=>console.log(c))
          }
        </div>
    </div>
  )
}

export default Trending;

const Api_Key="3284913a940180ec63ebc0044db949d5"
// https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>>