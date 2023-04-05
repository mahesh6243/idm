import React, { Component } from 'react';
import {FaUniversity, FaListUl, FaAward, FaDatabase} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaUniversity />,
                title:"Best Universities",
                info:'400+ colleges to choose from around karnataka, opt for the best'
            },
            {
                icon:<FaListUl />,
                title:"List of Courses",
                info:'100+ courses and much more technology implementation on its way'
            },
            {
                icon:<FaAward />,
                title:"Top Ranked",
                info:'Check for the best and top ranked colleges which are near to you'
            },
            {
                icon:<FaDatabase />,
                title:"Complete Review",
                info:'Get the latest and updated reviews of colleges and courses available'
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
