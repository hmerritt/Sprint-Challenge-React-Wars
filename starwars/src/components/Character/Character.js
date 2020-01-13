import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Character.css";


export default function Character({ id })
{

    //  Set individual character attributes
    const [character, setCharacter] = useState({
        name:       "Loading...",
        birth_year: "loading...",
        gender:     "loading...",
        height:     "loading...",
        mass:       "loading..."
    });


    /*
    *  Get individual character data
    */
    useEffect(() =>
    {
        axios.get(`https://swapi.co/api/people/${id}`)
           .then((res) =>
           {
               setCharacter({
                   name:       res.data.name,
                   birth_year: res.data.birth_year,
                   gender:     res.data.gender,
                   height:     res.data.height,
                   mass:       res.data.mass
               });
           })
           .catch((err) =>
           {
              console.log("Failed to individual character data from swapi:", err);
           });
    }, []);


    return (
        <>
            <div className="character">
                <h1 name=""> {character.name} </h1>
                <div className="character-details">
                    {
                        //  loop character attributes
                        //  Render each attribute
                        Object.keys(character).map((item) => {
                            //  Skip name (already been rendered)
                            if (item !== "name")
                            {
                                return (
                                    <p>
                                        {item}: <span> {character[item]} </span>
                                    </p>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    );
}
