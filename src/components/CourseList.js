import React from 'react';
import Course from './Course';
import Courses from '../pages/Courses';

export default function CourseList({courses}) {
    if(courses.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no colleges mathced your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    courses.map(item => {
                        return <Course key={item.id} course={item} />; 
                    })
                }
            </div>
        </section>
    );
}
