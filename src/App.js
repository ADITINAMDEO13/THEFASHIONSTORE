// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Room from "./pages/Room";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
// import Home from "./pages/Home";
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';



function App() {
    return ( < >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        /> <
        Route exact path = "/rooms/"
        component = { Room }
        /> <
        Route exact path = "/rooms/:slug"
        component = { SingleRoom }
        />
        Route component = { Error }
        /> < /
        Switch >




        {
            /* <
                    Home / >
                    <
                    Room / >
                    <
                    SingleRoom / >
                    <
                    Error / > */
        } <
        />
    );
}

export default App;