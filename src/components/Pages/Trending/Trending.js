import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleCardContent from 'components/SingleCardContent/SingleCardContent';
import "./Trending.css"
import PaginationList from 'components/Pagination/Pagination';


const Trending = ()=>{
  
  const [page, setPage] = useState(1);
  const [content, setContent]=useState([]);
  const [totalPages,setTotalPages]=useState()

  const fetchTrending = async ()=> {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`) 
    setContent(data.results);
    setTotalPages(data.total_pages)
  }

  useEffect(()=>{
    window.scroll(0, 0);
    fetchTrending()
  // eslint-disable-next-line
  },[page])

  return(
    <div>
      <span className="pageTitle">Treding</span>
        <ul className='trending'>
          {
            content && content.map((c)=>(
            <SingleCardContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title|| c.name}
            date={c.first_air_date|| c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
            />))
          }
        </ul>
       <PaginationList setPage={setPage} numberOfPage={totalPages}/> 
    </div>
  )
}

export default Trending;
