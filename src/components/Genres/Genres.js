import axios from "axios";
import { useEffect } from "react";
import Chip from '@mui/material/Chip';
import "./Genres.css"

const Genres = ({
  type,
  chooseGenres,
  setChooseGenres,
  genres,
  setGenres,
  setPage,
})=>{

  const handleRemove = (genre) => {
    setChooseGenres(chooseGenres.filter((choose) => choose.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const handleAdd=(genre)=>{
    setChooseGenres([...chooseGenres,genre]);
    setGenres(genres.filter((g)=> g.id !== genre.id));
    setPage(1);
  }

  const fetchGenre= async () =>{
    const {data}= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setGenres(data.genres)
  }


  useEffect(()=>{
    fetchGenre();
    
    return ()=>{
      setGenres({})
    }
    // eslint-disable-next-line
  },[])

  return <div className="genres">
    {chooseGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
    {genres && genres.map((genre)=>(

      <Chip 
      label={genre.name}
      style={{margin:3}}
      key={genre.id}
      size="small"
      clickable
      onClick={() => handleAdd(genre)}
      />
    ))}

  </div>
}

export default Genres;