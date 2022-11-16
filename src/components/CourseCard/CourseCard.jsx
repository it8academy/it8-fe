import React from 'react';

const CourseCard = ({ item }) => {
  return (
    <div
      style={{
        border: `1px solid ${item.border_color}`,
        background: `${item.background_color}`,
        color: `${item.color}`,
      }}
    >
      <div>
        <div className="logo">
          <img src="" alt="ourse-logo" />
        </div>
        <h3>{item.title}</h3>
        <p> {item.details}</p>
        <button> View Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
