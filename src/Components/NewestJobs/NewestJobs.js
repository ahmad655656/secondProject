import React from 'react'
import { NewJobs } from '../../Data';
import BigCard from '../BigCard/BigCard';
export default function NewestJobs(props) {
  return (
    <div ref={props.ref} className={`flexCard ${props.className}`}>
    {NewJobs.map((info) => {
      return (
       <>
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
        </>
      );
    })}
  </div>
  )
}
