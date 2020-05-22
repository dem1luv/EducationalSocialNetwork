import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import AsideMessages from "./components/AsideMessages/AsideMessages";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                    <Route path="/messages" render={() => <Messages store={props.store}/>}/>
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/messages" component={Messages}/>*/}
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <AsideMessages/>
            </div>
        </BrowserRouter>
    );
}

export default App;