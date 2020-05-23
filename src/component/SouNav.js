import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/souNavbar.css';





class SouNav extends Component{

    state = {
        search: false,
        backgroundColor: "",
        color: "",
    }

 
     

    colorOne = ()=>{
        this.setState({
            backgroundColor: '#F2B999',
            color: 'white'
        })

    }

    colorTwo = ()=>{
        this.setState({
            backgroundColor: '#59261B',
            color: 'white'
        })

    }

    colorThree = ()=>{
        this.setState({
            backgroundColor: '#F22987',
            color: 'white'
        })

    }

    colorFour = ()=>{
        this.setState({
            backgroundColor: '#F28705',
            color: 'white'
        })

    }

    colorFive = ()=>{
        this.setState({
            backgroundColor: '#D96C94',
            color: 'white'
        })

    }

    colorSix = ()=>{
        this.setState({
            backgroundColor: '#F28888',
            color: 'white'
        })

    }

    colorSeven = ()=>{
        this.setState({
            backgroundColor: '#BFA8AD',
            color: 'white'
        })

    }

    colorEight = ()=>{
        this.setState({
            backgroundColor: '#F28D77',
            color: 'white'
        })

    }
  
    
    


    // showSearch = () => {
    //     this.setState({
    //         search: !this.state.search
    //     });
    // }



    // searchSubmit = (event) => {
    //     event.preventDefault();
    //     alert("search");
    // }

  render(){
    //   const styleDecoratio = {
    //       textDecoration: 'none',
    //       color: 'whitesmoke'
    //   }

  




        return (
            <div className=" sousNavebar" style={{background: this.state.backgroundColor, color: this.state.color}} >

                <div className="sou-nav-title">

                    <h4 >This is <i className="fab fa-angrycreative"> </i>my blog </h4>
                    <h2>SouadBlog</h2>
                    <p></p>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                    <div className="addColor">

                        <div className="color1"><button onClick={this.colorOne}>try this color</button> </div>
                        <div className="color2"><button onClick={this.colorTwo}>try this color</button></div> 
                         <div className="color3"><button onClick={this.colorThree}>try this color</button></div> 
                         <div className="color4"><button onClick={this.colorFour}>try this color</button></div> 
                         <div className="color5"><button onClick={this.colorFive}>try this color</button></div> 
                         <div className="color6"><button onClick={this.colorSix}>try this color</button></div> 
                         <div className="color7"><button onClick={this.colorSeven}>try this color</button></div> 
                         <div className="color8"><button onClick={this.colorEight}>try this color</button></div>
                 </div>
                </div>



                <div className="souNav">
                    {/* <ul className="linkss"  >
                        <Link to="/" style={styleDecoratio}>
                            <li style={styleDecoratio}>Home</li>
                        </Link>
                        <Link to="/post/" style={styleDecoratio}>
                            <li style={styleDecoratio}>Posts</li>
                        </Link>
                         <Link to="/about-us" style={styleDecoratio}>
                            <li style={styleDecoratio}>About-Us</li>
                        </Link>

                    </ul> */}
                </div>

                {/* <div className="search">
                    <form onSubmit={this.searchSubmit}>
                        {this.state.search &&

                            <input type="text" placeholder="search" className="searchInput" id="input" />
                        }
                       

                        <i onClick={this.showSearch} className="serachIcon fas fa-search"  id="serach"></i>


                    </form>

                </div> */}





            </div>
        )
            } 
}

export default SouNav;