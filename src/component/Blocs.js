import React, { Component } from "react";
import BlogBloc from './BlogBloc';

class Blocs extends Component {
    state = { 
        blocs: [
            {
                id: 1,
                sidbarimage: "/../image/girl-2768345_1280.jpg",

                sidbartitle: "Out door beautiful girl with a yellow hoodie",
                sidbarcreatedat: "april 09, 2020",
                p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker"
            },
            {
                id: 2,
                sidbarimage: " /../image/woman-3353711_1280.jpg",
                sidbartitle: "Big hat and big yellow earings",
                sidbarcreatedat: "may 09, 2020",
                p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
            },
            {
                id: 3,
                sidbarimage: "/../image/fashion-4642701_1280.jpg",
                sidbartitle: "In winter with a beatiful hat and scarf",
                sidbarcreatedat: "january 29, 2020",
                p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
            },
            {
                id: 4,
                sidbarimage: "/../image/girl-2768345_1280.jpg",

                sidbartitle: "Out door beautiful girl with a yellow hoodie",
                sidbarcreatedat: "april 09, 2020",
                p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
            },
            {
                id: 5,
                sidbarimage: " /../image/woman-3353711_1280.jpg",
                sidbartitle: "Big hat and big yellow earings",
                sidbarcreatedat: "may 09, 2020",
                p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
            },
            {
                id: 6,
                sidbarimage: "/../image/fashion-4642701_1280.jpg",
                sidbartitle: "In winter with a beatiful hat and scarf",
                sidbarcreatedat: "january 29, 2020",
                p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
            },
       
        ]
     }
    render() { 
        return ( 
            <div>
                {this.state.blocs.map(bloc => (

                   < BlogBloc 
                   imagebloc = {bloc.sidbarimage}
                   titlebloc = {bloc.sidbartitle}
                   datebloc = {bloc. sidbarcreatedat}
                   textbloc = {bloc.p}
                   key = {bloc.id}
                   
                   />

                ))}

            </div>
         );
    }
}
 
export default Blocs;