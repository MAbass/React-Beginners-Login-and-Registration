import React, {Component} from 'react';
import {Link} from "react-router-dom";
import image1 from "../assets/img/team/1.jpg";
import image2 from "../assets/img/team/2.jpg";
import image3 from "../assets/img/team/3.jpg";

class Team extends Component {


    render() {
        const team = [
            {name: "Parveen Anand", work: "Lead Designer", image: image1},
            {name: "Diana Petersen", work: "Lead Marketer", image: image2},
            {name: "Larry Parker", work: "Lead Developer", image: image3},
        ];

        return (
            <div>
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {team.map((value, index)=>{
                                return(<div key={index} className="col-lg-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle" src={value.image} alt="..."/>
                                        <h4>{value.name}</h4>
                                        <p className="text-muted">{value.work}</p>
                                        <Link className="btn btn-dark btn-social mx-2" to="#!"><i
                                            className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-dark btn-social mx-2" to="#!"><i
                                            className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-dark btn-social mx-2" to="#!"><i
                                            className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>);
                            })};

                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non
                                quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Team;