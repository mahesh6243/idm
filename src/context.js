import React, { Component } from 'react';
import items from './data';

const CourseContext = React.createContext();
// <CourseContext.Provider value={'hello'}

class CourseProvider extends Component {
    state = {
        courses: [],
        sortedCourses: [],
        featuredCourses: [],
        loading: true,
        type:'all',
        location:'all'
    };
    // getData

    componentDidMount() {
        // this.getData
        let courses = this.formatData(items);
        let featuredCourses = courses.filter(course => course.featured === true);
        this.setState({
            courses,
            featuredCourses,
            sortedCourses: courses,
            loading:false
        });
    }

    formatData(items) {
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let course = { ...item.fields,images,id };
            return course;
        });
        return tempItems;
    }

    getCourse = (slug) => {
        let tempCourses = [...this.state.courses];
        const course = tempCourses.find((course)=>course.slug === slug);
        return course;
    };

    handleChange = event => {
        const target = event.target;
        const value = event.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState(
            {
                [name] : value
            },
            this.filterCourses
        );
    };

    filterCourses = () => {
        let{
            courses, type, location
        } = this.state

        // all the courses
        let tempCourses = [...courses];

        // filter by type
        if(type !== 'all'){
            tempCourses = tempCourses.filter(course => course.type === type);
        }

        // filter by location
        if(location !== 'all'){
            tempCourses = tempCourses.filter(course => course.location === location);
        }

        this.setState({
            sortedCourses: tempCourses
        });
    };

    render() {
        return (
            <CourseContext.Provider value={{
                ...this.state, getCourse: this.getCourse, handleChange:this.handleChange
                }}>
                {this.props.children}
            </CourseContext.Provider>
        );
    }
}

const CourseConsumer = CourseContext.Consumer;

export function withCourseConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
        <CourseConsumer>
            {value => <Component {...props} context={value} />}
        </CourseConsumer>
        );
    };
}

export { CourseProvider, CourseConsumer, CourseContext };