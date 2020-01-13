import React     from 'react';
import Character from './components/Character/Character';
import axios     from "axios";
import './App.css';

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    //!! q: why put state here? ^

    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <div className="characters">
                {
                    //  loop Characters here
                }
                <Character />
            </div>
        </div>
    );
}

export default App;
