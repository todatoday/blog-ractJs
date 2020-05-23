import React, { Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            footerinfos: [
                {
                    id: 1,
                    imagefooter: "/../image/girl-2271640_1920.jpg",
                    titlefooter: "Big hat and big yellow earings",
                    discrefooter: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industsum passages, and more recently with desktop publishing software like Aldus"
                },
                {
                    id: 2,
                    imagefooter: "/../image/girl-2271640_1920.jpg",
                    titlefooter: "Big hat and big yellow earings",
                    discrefooter: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industsum passages, and more recently with desktop publishing software like Aldus"
                },
                {
                    id: 3,
                    imagefooter: "/../image/girl-2271640_1920.jpg",
                    titlefooter: "Big hat and big yellow earings",
                    discrefooter: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industsum passages, and more recently with desktop publishing software like Aldus"
                },
                {
                    id: 4,
                    imagefooter: "/../image/girl-2271640_1920.jpg",
                    titlefooter: "Big hat and big yellow earings",
                    discrefooter: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industsum passages, and more recently with desktop publishing software like Aldus"
                },
            ]
        }
    }
    render() {
        return (
            <div className="footerContainer">
                {this.state.footerinfos.map((footerinfo) => (

                    <div className="footer-bloc" key={footerinfo.id}>
                        <div key={footerinfo.id} className="footer-image">
                            <img src={footerinfo.imagefooter} alt="profil image"/>
                        </div>
                        <h3 className="footer-title">{footerinfo.titlefooter}</h3>
                        <p>{footerinfo.discrefooter}</p>


                    </div>
                ))}

            </div>
        );
    }
}

export default Footer;