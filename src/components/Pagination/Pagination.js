import Pagination from '@mui/material/Pagination';
// import { ThemeProvider } from 'styled-components';
// import { createMuiTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme=createTheme({
  palette:{
    type:"dark",
  },
});

const PaginationList =({setPage,numberOfPage})=> {
  const handlePageChange=(page)=>{
    setPage(page);
    window.scroll(0,0);
  }

  
return <div style={{
  width:"100%",
  display:"flex",
  justifyContent:"center",
  marginTop:"10px"
  }}>
   <ThemeProvider theme={darkTheme}>
      <Pagination
      // color="primary"
      variant="outlined"
      count={numberOfPage}
      onChange={(e)=>{handlePageChange(e.target.textContent)}}
      hideNextButton
      hidePrevButton
      />
   </ThemeProvider>
    
</div>

}

export default PaginationList