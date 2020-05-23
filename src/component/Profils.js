import React, { Component } from 'react';
import "../css/profils.css";
import SidBarProfil from './SidBarProfil';


function Profils(props) {
    // function Profils({ image, title, description, postedOn })

    return (
        <div>
            <div className="profil-container">

            
            <div className="profil-bloc">
                <div className="image-comtainer">

                    <img src={props.image} alt="profil ilage"  />
                </div>
                <h1 className="profil-title">{props.title}</h1>
                <span>Posted on: {props.postedOn}</span>
                <p className="profil-desci">{props.description}</p>
            </div>


            </div>
            {props.children}

        </div>

    )

}

export default Profils;