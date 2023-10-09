import './App.css';
import * as React from "react";
import Research from "./components/Research/Research";
import JustNameNavBar from "./components/nav/Navigation";
import About from "./components/About/About";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <JustNameNavBar/>
            <About/>
            {/*<News/>*/}
            <Research/>
            <Footer/>
        </div>
    );
}

export default App;
