import './App.css';
import { Route, Switch} from "react-router-dom";
import Flight from './pages/Flight';
import Hotel from './pages/Hotel';
import SearchPlane from './pages/SearchPlane';
import Orders from './pages/Orders';
import Price from './pages/Price';
import Error from './pages/Error';


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component ={Flight}></Route>
      <Route exact path="/Hotel/" component ={Hotel}></Route>
      <Route exact path="/SearchPlane/" component ={SearchPlane}></Route>
      <Route exact path="/Orders/" component ={Orders}></Route>
      <Route exact path="/Price/" component ={Price}></Route>
      <Route component ={Error}></Route>
    </Switch>
    </>
  );
}

export default App;
