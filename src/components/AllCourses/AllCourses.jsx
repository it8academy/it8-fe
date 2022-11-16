import React from 'react';
import { courseData } from '../../constant/staticData';
import CourseCard from '../CourseCard/CourseCard';

const AllCourses = () => {
  return (
    <div>
      <h2>Tech Stacks</h2>
      <h1>Available Courses</h1>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="grid">
          {courseData.map((item, index) => {
            return <CourseCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
