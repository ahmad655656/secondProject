import React from 'react'
import { Highedsalaryjobs } from '../../Data';
import BigCard from '../BigCard/BigCard';

export default function HighedSalaryJobs(props) {
  return (
    <div className={`flexCard ${props.className}`}>
    {Highedsalaryjobs.map((info) => {
      return (
        <BigCard
          image1={info.image1}
          level={info.level}
          typeWork={info.typeWork}
          image2={info.image2}
          company={info.company}
          location={info.location}
          title={info.title}
          workTime={info.workTime}
          salary={info.salary}
        />
      );
    })}
  </div>
  )
}
