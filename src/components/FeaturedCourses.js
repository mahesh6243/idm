import React, { Component } from 'react';
import { CourseContext } from '../context';
import Loading from './Loading';
import Course from './Course';
import Title from './Title';
export default class FeaturedCourses extends Component {
    static contextType = CourseContext;
    render() {
        let { loading, featuredCourses : courses } = this.context;
        courses = courses.map(course => {
            return <Course key={course.id} course={course} />
        });

        return (
            <section className="featured-rooms">
                <Title title="featured colleges"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : courses}
                </div>
            </section>
        );
    }
}
