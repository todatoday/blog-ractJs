import React, { Component } from 'react';
import '../css/home.css';
import ProfilList from './ProfilList';
import SidebarPost from './SidebarPost';
 



class Home extends Component {
    render(){

        return(
            <div className="home-page">
    
               <div>

                    < ProfilList />
               </div>
               <div>

                    <SidebarPost/>
               </div>

                    
                
              
                

                 
              
            </div>
        )
    }
}

export default Home;