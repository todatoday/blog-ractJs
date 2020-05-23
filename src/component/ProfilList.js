import React, { Component } from 'react';
import Profils from './Profils';
import SidBarProfil from './SidBarProfil';
import '../css/profilelist.css';
import RecentPost from './RecentPost';
 



class ProdilList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profils: [
                {
                    id: 1,
                    imageProfil: "/../image/glamour-678834_1280.jpg ",
                    titleProfil: "Beautifil woman with beautiful hair",
                    postedOn: "january 15, 2020",
                    descriptionProfil: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    id: 2,
                    imageProfil: "/../image/portrait-4563909_1280.jpg",
                    titleProfil: "Old fashion is always present in our daily life",
                    postedOn: "february 20, 2020",
                    descriptionProfil: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with  of Lorem Ipsum."
                },
                {
                    id: 3,

                    imageProfil: "/../image/beauty-2537562_1280.jpg",
                    titleProfil: " Blond woman in a big house with a beautiful hat",
                    postedOn: "may 28, 2020",
                    descriptionProfil: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                },
                {
                    id: 4,
                    imageProfil: "/../image/three-3075752_1280.jpg ",
                    titleProfil: " Blond woman in a big house with a beautiful hat",
                    postedOn: "april 20, 2020",
                    descriptionProfil: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                },
                {
                    id: 5,
                    imageProfil: "/../image/woman-3083401_1920.jpg",
                    titleProfil: " Blond woman in a big house with a beautiful hat",
                    postedOn: "march 02, 2020",
                    descriptionProfil: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                },
                {
                    id: 6,
                    imageProfil: "/../image/pin-up-girl-2171312_1280.jpg ",
                    titleProfil: " Blond woman on a sofa relaxing",
                    postedOn: "april 09, 2020",
                    descriptionProfil: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                },
            ],

        //     sidbarProfils: [
        //         {
        //             id: 1,
        //             sidbarimage: "/../image/girl-2768345_1280.jpg",
                   
        //             sidbartitle: "Out door beautiful girl with a yellow hoodie",
        //             sidbarcreatedat: "april 09, 2020",
        //         },
        //         {
        //             id: 2,
        //             sidbarimage: " /../image/woman-3353711_1280.jpg",
        //             sidbartitle: "Big hat and big yellow earings",
        //             sidbarcreatedat: "may 09, 2020",
        //         },
        //         {
        //             id: 3,
        //             sidbarimage: "/../image/fashion-4642701_1280.jpg",
        //             sidbartitle: "In winter with a beatiful hat and scarf",
        //             sidbarcreatedat: "january 29, 2020",
        //         },
        //         {
        //             id: 4,
        //             sidbarimage: "/../image/girl-2768345_1280.jpg",
                   
        //             sidbartitle: "Out door beautiful girl with a yellow hoodie",
        //             sidbarcreatedat: "april 09, 2020",
        //         },
        //         {
        //             id: 5,
        //             sidbarimage: " /../image/woman-3353711_1280.jpg",
        //             sidbartitle: "Big hat and big yellow earings",
        //             sidbarcreatedat: "may 09, 2020",
        //         },
        //         {
        //             id: 6,
        //             sidbarimage: "/../image/fashion-4642701_1280.jpg",
        //             sidbartitle: "In winter with a beatiful hat and scarf",
        //             sidbarcreatedat: "january 29, 2020",
        //         },
        //     ],

        //     rescentPosts: [
        //         {
        //             id: 1,
        //             recentTitle: "Blond beautiful woman with white tank top",
        //             recentImag: "/../image/three-3075751_640.jpg",
        //             recentTitle: "Blond beautiful woman with white tank top",
        //             recentDateUn: "january 09, 2020",
        //             recentsubtitle: "Blond beautiful woman with white tank top",
        //             recentDateDeux: "may 09, 2020"
        //         },
        //         {
        //             id: 2,
        //             recentTitle: "Blond beautiful woman sitting with high heels",
        //             recentImag: "/../image/fashion-2762865_640.jpg",
        //             recentTitle: "Blond beautiful woman sitting with high heels",
        //             recentDateUn: "february 09, 2020",
        //             recentsubtitle: "Blond beautiful woman sitting with high heels",
        //             recentDateDeux: "may 09, 2020"
        //         },
        //         {

        //             id: 3,
        //             recentTitle: "Three beautiful women drinking wine and enjoying their moments",
        //             recentImag: "/../image/three-3075751_640.jpg",
        //             recentTitle: "Three beautiful women drinking wine and enjoying their moments",
        //             recentDateUn: "january 09, 2020",
        //             recentsubtitle: "Three beautiful women drinking wine and enjoying their moments",
        //             recentDateDeux: "may 09, 2020"
        //         }


        //     ]
        //
     }
    }

    handleDelete = (id) =>{
        const profils = this.state.profils.slice();
        const index = profils.findIndex(profil => {profil.id === id});
        profils.splice(index, 1);
        this.setState({
            profils:  profils
        })
    }



    render() {
        return (
            <div className="profilList-container">
                <div>


                    {this.state.profils.map((profil, index) => (

                        <Profils
                            image={profil.imageProfil}
                            title={profil.titleProfil}
                            description={profil.descriptionProfil}
                            postedOn={profil.postedOn}
                            key={profil.id}
                            

                    >
                        <button onClick={() => this.handleDelete(profil.id)}>delete</button>

                    </Profils>

                    )

                    )},
                  </div>


                    {/*
              <div className="profil-list-col">
                     <div>

                    {this.state.rescentPosts.map((rescentPost, index) => (
                        <RecentPost
                            recentTitl={rescentPost.recentTitle}
                            recentImage={rescentPost.recentImag}
                            recentTitle={rescentPost.recentTitle}
                            recentDateon={rescentPost.recentDateUn}
                            recentsubtitle={rescentPost.recentsubtitle}
                            recentDatTwo={rescentPost.recentDateDeux}
                            key={rescentPost.id}


                        />
                    ))}
                    </div>  */}
                    

               
                  
                {/* <div className="sidbar-lists">

                    {this.state.sidbarProfils.map((sidbarProfil, index) => (
                        < SidBarProfil
                            sidmage={sidbarProfil.sidbarimage}
                            sidtitle={sidbarProfil.sidbartitle}
                            sidcreatedat={sidbarProfil.sidbarcreatedat}
                            key={sidbarProfil.id}


                        >
                          
                        </SidBarProfil>


                    ))}
                      
               </div>  
                      </div>  */}


            </div>
        );
    }
}

export default ProdilList;