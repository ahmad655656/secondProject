import React from 'react'
import { lastJobs } from '../../Data';
import BigCard from '../BigCard/BigCard';

export default function LatestJobs(props) {
  return (
    <div className={`flexCard ${props.className}`}>
    {lastJobs.map((info) => {
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
