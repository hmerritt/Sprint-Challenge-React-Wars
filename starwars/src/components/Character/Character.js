import React, { useState, useEffect } from "react";


export default function Character({ character })
{

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
