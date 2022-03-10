import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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