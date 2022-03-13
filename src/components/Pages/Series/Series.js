import axios from "axios";
import SingleCardContent from "components/SingleCardContent/SingleCardContent";
import Genres from "components/Genres/Genres";
import { useState, useEffect } from "react";
import PaginationList from "components/Pagination/Pagination";
import useGenres from "components/hooks/useGenre";

const Series = ()=>{
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPage, setNumberOfPage]=useState();
  const [chooseGenres,setChooseGenres]=useState([]);
  const [genres, setGenres]=useState([])
  const genreforURL=useGenres(chooseGenres);

  const fetchTv = async ()=> {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genreforURL}`) 
    setContent(data.results);
    setNumberOfPage(data.total_pages)
    }

    useEffect(()=>{
      window.scroll(0, 0);
      fetchTv()
// eslint-disable-next-line
    },[page,genreforURL])


  return(
    <div>
      <span className="pageTitle">TV-Series</span>
      <Genres
        type="tv"
        chooseGenres={chooseGenres}
        setChooseGenres={setChooseGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
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

export default Series;