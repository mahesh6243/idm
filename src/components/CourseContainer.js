import React from 'react';
import CourseFilter from './CourseFilter';
import CourseList from './CourseList';
import { withCourseConsumer } from '../context';
import Loading from './Loading';

function CourseContainer({ context }) {
    const { loading, sortedCourses, courses } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <CourseFilter courses={courses} />
            <CourseList courses={sortedCourses} />
        </>
    );
}

export default withCourseConsumer(CourseContainer)

// import React from 'react';
// import CourseFilter from './CourseFilter';
// import CourseList from './CourseList';
// import {CourseConsumer} from '../context';
// import Loading from './Loading';

// export default function CourseContainer() {
//     return (
//         <CourseConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedCourses, courses} = value;
//                     if (loading) {
//                         return <Loading />;
//                     }
//                     return (
//                         <div>
//                             Hello from Course Container
//                             <CourseFilter courses={courses} />
//                             <CourseList courses={sortedCourses} />
//                         </div>
//                     );
//                 }
//             }
//         </CourseConsumer> 
//     );
// }
