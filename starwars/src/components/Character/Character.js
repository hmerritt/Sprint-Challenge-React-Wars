import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';


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


    //  Styles
    const Card = styled.div`
      color: #f4f4f4;
      padding: 60px;
      margin: 20px 0;
      text-align: left;
      background-color: rgba(0,0,0, 0.8);
    `;

    const CardTitle = styled.h1`
      font-family: 'Montserrat', sans-serif;
      font-size: 1.8em;
      margin: 0;
      margin-bottom: 10px;
    `;

    const CardItem = styled.div`
      display: flex;
      font-size: 1.2em;
      margin: 8px 0;
    `;
    const CardItemTitle = styled.p`
      width: 110px;
      font-weight: bold;
      margin: 0;
    `;
    const CardItemContent = styled.p`
      margin: 0;
    `;


    return (
        <>
            <Card id={id}>
                <CardTitle name=""> {character.name} </CardTitle>
                <div className="character-details">
                    {
                        //  loop character attributes
                        //  Render each attribute
                        Object.keys(character).map((item) => {
                            //  Skip name (already been rendered)
                            if (item !== "name")
                            {
                                return (
                                    <CardItem>
                                        <CardItemTitle>{item}: </CardItemTitle>
                                        <CardItemContent>{character[item]}</CardItemContent>
                                    </CardItem>
                                )
                            }
                        })
                    }
                </div>
            </Card>
        </>
    );
}
