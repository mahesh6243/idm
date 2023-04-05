import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import CourseContainer from '../components/CourseContainer';

export const Courses = () => {
    return (
        <>
        <Hero hero="coursesHero">
            <Banner title="Colleges">
                <Link to='/' className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <CourseContainer />
        </>
    );
}

export default Courses;