import React, {Component} from 'react';
import Header from "../commons/Header";
import image from "../assets/img/header-bg.jpg"
import Footer from "../commons/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header title="Welcome to our studio" subtitle="It's nice to meet you" buttonText="Tell me more"
                        link="/services" showButton="true" image={image}/>

                <Footer/>
            </div>
        );
    }
}

export default Home;