import axios from "axios";
import { useState ,useEffect} from "react";
import SingleCardContent from "components/SingleCardContent/SingleCardContent";
import PaginationList from "components/Pagination/Pagination";



const Movies = ()=>{
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPage, setNumberOfPage]=useState();
 
  
  
  const fetchMovies = async ()=> {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`) 
    setContent(data.results);
    setNumberOfPage(data.total_pages)
    }

    useEffect(()=>{
      fetchMovies()
// eslint-disable-next-line
    },[page])


  return(
    <div>
      <span className="pageTitle">Movies</span>
      <ul className='trending'>
          {
            content && content.map((c)=>(
            <SingleCardContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title|| c.name}
            date={c.first_air_date|| c.release_date}
            media_type="movie"
            vote_average={c.vote_average}
            />))
          }
        </ul>
        {numberOfPage>1 && (<PaginationList setPage={setPage} numberOfPage={numberOfPage}/>)}
       
    </div>
  )
}

export default Movies;