import React from 'react';
import { useContext } from 'react';
import { CourseContext } from '../context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function CourseFilter({courses}) {
    const context = useContext(CourseContext);
    const { handleChange, type, location } = context;

    //get unique types
    let types = getUnique(courses, 'type');
    //add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index) => {
        return (
        <option value={item} key={index}>
            {item}
        </option>
        );
    });

    let gprs = getUnique(courses, 'location');
    gprs = gprs.map((item, index) => {
        return (
        <option value={item} key={index}>
            {item}
        </option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="search Colleges" />
            <form className="filter-form">
                {/*college type */}
                <div className="form-group">
                    <label htmlFor="type">College Type</label>
                    <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end college type */}
                {/*location */}
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select name="location" id="location" value={location}
                    className="form-control" onChange={handleChange}>
                        {gprs}
                    </select>
                </div>
                {/* end location */}
            </form>
        </section>
    );
}
