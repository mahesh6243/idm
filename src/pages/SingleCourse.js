import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { CourseContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleCourse extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = CourseContext;
    // componentDidMount() {}
    render() {
        const { getCourse } = this.context;
        const course = getCourse(this.state.slug);
        if(!course) {
            return (
            <div className="error">
                <h3>No such college could be found...</h3>
                <Link to='/courses' className="btn-primary">
                    Back to Colleges
                </Link>
            </div>
            );
        }
        const { name, description, mail1, contact, criteria, location, extras, mail2, images } = course;
        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg);

        return (
        <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name} course`}>
                <Link to='/courses' className="btn-primary">
                    Back to Colleges
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item, index) => {
                    return <img key={index} src={item} alt={name} />;
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>Admission Criteria : {criteria}</h6>
                    <h6>Contact : {contact} </h6>
                    <h6>Email : {mail1} <br></br>&emsp;&emsp;&emsp;&emsp; {mail2} </h6>
                    <h6>Location : {location} </h6>
                    
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>Courses</h6>
            <ul className="extras">
                {extras.map((item, index) => {
                    return <li key={index}>- {item}</li>;
                })}
            </ul>
        </section>
        </>
        );
    }
}
