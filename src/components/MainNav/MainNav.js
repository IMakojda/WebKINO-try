import * as React from 'react';
import { useEffect } from 'react';
// import { makeStyles } from '@mui/material';
// import {withRouter} from 'react-router-dom'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import {useNavigate}  from 'react-router-dom'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigation = useNavigate();
  
  useEffect(() => {
    if (value === 0) {
      navigation("/");
    } else if (value === 1) {
      navigation("/movies");
    } else if (value === 2) {
      navigation("/series");
    } else if (value === 3) {
      navigation("/search");
    }
  }, [value, navigation]);


  // useEffect( () => {
  //   if (value === 0) history.push('/')
  //   else if (value === 1) history.push('/movies');
  //   else if (value === 2) history.push('/series'); 
  //   else if (value === 3) history.push('/search'); 
  // },[value, history]);

  return (
    <Box sx={{ 
      width: "100vw",
      position:'fixed',
      bottom:0,
      backgroundColor: '#2d313a',
      zIndex:100,
      }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          backgroundColor:"transparent"
        }}
      >
        <BottomNavigationAction
        style={{color:"white"}}
        label="Trending"
        icon={<WhatshotIcon />} 
        />

        <BottomNavigationAction
        style={{color:"white"}}
        label="Movie"
        icon={<MovieIcon />} 
        />

        <BottomNavigationAction
        style={{color:"white"}} 
        label="TV Series"
        icon={<TvIcon />}
        />

        <BottomNavigationAction 
        style={{color:"white"}}
        label="Search"
        icon={<SearchIcon />}
        />
        </BottomNavigation>
        
       
    </Box>
  );
}