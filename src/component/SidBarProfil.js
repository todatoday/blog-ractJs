import React from 'react';
import '../css/sidbarprofil.css';
 

function SidBarProfil(props) {


    return (
        <div className="jok">
           



            <div className="sidBar-profil">

                <div className="sidbar-img-profil">

                    <img src={props.sidmage} alt="profil image" />
                </div>

                <h5 className="sidebar-profil-title">{props.sidtitle}</h5>
                <span>{props.sidcreatedat}</span>

            <p>{props.p}</p>
            </div>
            {props.children}
            {/* <div className="sid-bar-title"><a href="#"  >Ajouter un profil</a></div> */}





        </div>
    );

}

export default SidBarProfil;