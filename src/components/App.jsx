import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css"
import Header from "./Header/Header"
import SimpleBottomNavigation from "./MainNav/MainNav";
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";




export const App = () => {
  return (
    <BrowserRouter >
     <Header/>
      <div className="app">
      <Container>
        <Switch>
          <Route patch='/' component={Trending} exact/>
          <Route patch='/search' component={Search}/>
          <Route patch='/movies' component={Movies}/>
          <Route patch='/series' component={Series}/>
        </Switch>
      
      </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
};
