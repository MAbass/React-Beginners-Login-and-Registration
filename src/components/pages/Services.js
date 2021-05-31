import React, {Component} from 'react';
import SingleService from "./single/SingleService";

class Services extends Component {
    render() {
        const data = [
            {name: "Responsive Design", image: "fas fa-laptop fa-stack-1x fa-inverse"},
            {name: "Web Security", image: "fas fa-lock fa-stack-1x fa-inverse"},
            {name: "E-Commerce", image: "fas fa-shopping-cart fa-stack-1x fa-inverse"},
        ]
        return (
            <div>
                <section className="page-section" id="services" style={{marginTop: 10 + "em"}}>
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {data.map((value, index) => {
                                return (<SingleService key={index} name={value.name} image={value.image}/>)
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Services;