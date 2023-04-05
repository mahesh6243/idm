import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCourses from '../components/FeaturedCourses';

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Discover Colleges" subtitle="A career is a life">
                <Link to='/courses' className="btn-primary">
                    Colleges
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedCourses />
        </>
    );
}
