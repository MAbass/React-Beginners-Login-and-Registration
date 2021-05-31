import React, {Component} from 'react';
import image1 from "../assets/img/portfolio/1.jpg"
import image2 from "../assets/img/portfolio/2.jpg"
import image3 from "../assets/img/portfolio/3.jpg"
import image4 from "../assets/img/portfolio/4.jpg"
import image5 from "../assets/img/portfolio/5.jpg"
import image6 from "../assets/img/portfolio/6.jpg"
import SinglePortfolio from "./single/SinglePortfolio";

class Portofolio extends Component {
    render() {
        const data = [
            {name: "Threads", title: "Illustration", image: image1},
            {name: "Explore", title: "Graphic Design", image: image2},
            {name: "Finish", title: "Identity", image: image3},
            {name: "Lines", title: "Branding", image: image4},
            {name: "Southwest", title: "Website Design", image: image5},
            {name: "Window", title: "Photography", image: image6},
        ]
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {data.map((value, index, array) => {
                                return (
                                    <SinglePortfolio key={index} name={value.name} title={value.title} image={value.image}/>
                                )
                            })}

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portofolio;