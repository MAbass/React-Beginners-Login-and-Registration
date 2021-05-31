import './App.css';
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Team from "./components/pages/Team";
import Services from "./components/pages/Services";
import Portofolio from "./components/pages/Portofolio";
import AdminWrapper from "./components/AdminWrapper";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Profile from "./components/pages/Profile";

function App() {
    return (
        <Router>
                <Route path="/login" exact={true} render={props=>(<AdminWrapper><Login {...props}/></AdminWrapper>)}/>
                <Route path="/register" exact={true} render={props=>(<AdminWrapper><Registration {...props}/></AdminWrapper>)}/>
                <Route path="/profile" exact={true} render={props=>(<AdminWrapper><Profile {...props}/></AdminWrapper>)}/>

                <Route path="/" exact={true} render={props=>(<PageWrapper><Home {...props}/></PageWrapper>)}/>
                <Route path="/about" exact={true} render={props=>(<PageWrapper><About {...props}/></PageWrapper>)}/>
                <Route path="/contact" exact={true} render={props=>(<PageWrapper><Contact {...props}/></PageWrapper>)}/>
                <Route path="/team" exact={true} render={props=>(<PageWrapper><Team {...props}/></PageWrapper>)}/>
                <Route path="/portfolio" exact={true} render={props=>(<PageWrapper><Portofolio {...props}/></PageWrapper>)}/>
                <Route path="/services" exact={true} render={props=>(<PageWrapper><Services {...props}/></PageWrapper>)}/>
        </Router>

    );
}

export default App;
