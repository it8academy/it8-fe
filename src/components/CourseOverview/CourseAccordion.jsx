import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { SlCamrecorder } from 'react-icons/sl';
import './CourseOverview.css';
const CourseAccordion = ({ title, detail, video }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="outline">
      <header>
        <h2>{title}</h2>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
        </button>
      </header>
      {showInfo && (
        <div className="outline-info">
          {detail.map((data) => {
            return (
              <ul className="details-ul" key={data}>
                <li>
                  <div>
                    <IoMdCheckmark className={{ Color: '#fff' }} />
                    <h2>{data}</h2>
                  </div>
                </li>
              </ul>
            );
          })}
          <div>
            {video ? (
              <div className="video">
                <SlCamrecorder className={{ Color: '#fff' }} />
                <h2>{video}</h2>
              </div>
            ) : (
              <h2>{video}</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseAccordion;
