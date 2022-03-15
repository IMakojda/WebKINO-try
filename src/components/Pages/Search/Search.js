import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider} from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import axios from "axios";
import PaginationList from "components/Pagination/Pagination";
import SingleCardContent from "components/SingleCardContent/SingleCardContent";


const Search = ()=>{
  const darkTheme=createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  // eslint-disable-next-line
  const [type,setType]=useState(0);
  const [page, setPage]=useState(1);
  const [searchText,setSearchText]=useState("");
  const [content, setContent]=useState([]);
  const [numOfPage, setNumOfPages]=useState();
  
  const fetchSearch=async()=>{
   try {const {data}=await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=true`)
    setContent(data.results);
    setNumOfPages(data.total_pages)}
    catch(error){console.error(error);}

  }

  useEffect(()=>{
    window.scroll(0,0);
    fetchSearch();
    // eslint-disable-next-line
  },[page, type])
  return(
    <div>
      <span className="pageTitle" style={{marginTop:15}}>Search</span>
        <ThemeProvider theme={darkTheme}>
            <div style={{display:"flex", margin:10}}>
              <TextField
                style={{flex:1}}
                className="searchBox"
                id="outlined-basic"
                label="search"
                variant="filled"
                fullWidth 
                onChange={(e)=>setSearchText(e.target.value)}
              />
              <Button variant="contained" style={{marginLeft:10}} onClick={fetchSearch}><SearchIcon fontSize="large"/></Button>
            </div>
            <Tabs value={type}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            >
              <Tab style={{width:"50%"}} label="Search Movie"/>
              <Tab style={{width:"50%"}} label="Search TV-Series"/>
            </Tabs>
        </ThemeProvider>
        <div className="trending">
        {content &&
          content.map((c) => (
            <SingleCardContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPage>1 && (<PaginationList setPage={setPage} numberOfPage={numOfPage}/>)}
    </div>
  )
}

export default Search;