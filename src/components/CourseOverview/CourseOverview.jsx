import { useState } from 'react';
import courses from '../Data/Data';
import './CourseOverview.css';
import CourseAccordion from './CourseAccordion';
const CourseOverview = () => {
  const [questions, setQuestions] = useState(courses);
  return (
    <div className="container">
      <div className="heading">
        <h2>Syllabus</h2>
        <p>Learning Outline</p>
      </div>
      <div className="section">
        {questions.map((question) => {
          return <CourseAccordion key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
};

export default CourseOverview;

