import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';
export default function Course({ course }) {
    const{ name, slug, images } = course;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single course" />
                <Link to={`/courses/${slug}`} className="btn-primary room-link">
                    View
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Course.propTypes = {
    course:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}
