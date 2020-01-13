import React, { useState, useEffect } from 'react';
import Character from './components/Character/Character';
import axios     from "axios";
import './App.css';

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    //!! q: why put character state here? ^

    // (not a fan of "pages" -> prefer infinite scrolling)


    /*
    *  total characters
    *  current page (times new content has been loaded)
    *  characters rendered thus far
    */
    const [charactersHandler, setCharactersHandler] = useState({
        total: 5,
        rendered: 0,
        pageSize: 5
    });

    /*
    *  array of character elements being rendered
    */
    const [characterElements, setCharacterElements] = useState([]);


    /*
    *  Get total character count from swapi
    */
    useEffect(() =>
    {
        axios.get("https://swapi.co/api/people/")
           .then((res) =>
           {
               //  Add total character count to handler
               setCharactersHandler({
                   total: res.data.count,
                   rendered: charactersHandler.rendered,
                   pageSize: charactersHandler.pageSize,
               });
           })
           .catch((err) =>
           {
              console.log("Failed to get total character count from swapi:", err);
           });

        //  Add starting characters to page
        //  (does not need to know total count on load)
        addCharacters(charactersHandler.pageSize);
    }, []);

    /*
    *  Adds elements to $characterElements using current "render" count
    */
    function addCharacters(count)
    {
        //  start - ammount of currently rendered characters
        //  end   - ammount of characters to add
        const start = charactersHandler.rendered + 1;
        const end   = start + count;

        //  Copy characterElements to make it editable
        const newCharacterElements = [...characterElements];

        //  Loop start - end values
        for (let i = start; i < end; i++)
        {
            //  Add new character to new array
            newCharacterElements.push(<Character key={i} id={i} />);
        }

        //  Update character elements with updated array
        setCharacterElements(newCharacterElements);
    }


    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <div className="characters container">
                {characterElements}
            </div>
        </div>
    );
}

export default App;
