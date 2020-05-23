import React, { Component } from 'react';
import SidBarProfil from './SidBarProfil';
import ProdilList from './ProfilList';
import '../css/aboutus.css';
import Blocs from './Blocs';
import AboutusProfils from './AboutusProfils';

class About extends Component {
    render() {
        return (
            <div className="aboutUs">
             
                < AboutusProfils />
                <Blocs />


                  
                

            </div>
        )
    }
}
export default About;