import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Footer/>
            <GlobalStyles />
        </div>
    );
}

export default App;
