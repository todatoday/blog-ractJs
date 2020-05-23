import React  from 'react';


function BlogBloc(props) {
   
  
        return ( 
            <div className="blocProfil">
                
                <div className="image-bloc">
                    <img src={props.imagebloc} alt="profil image" />
                    </div>

                    
                <div className="bloc-row">
                     <h2>{props.titlebloc}</h2>
                     <span>{props.datebloc}</span>
                      <p>{props.textbloc}</p>
                </div>

            </div>
         );
    
}
 
export default BlogBloc;