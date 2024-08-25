import React from 'react'
import H1 from '../H1/H1';
import SectionCard from '../SectionCard/SectionCard';
import { Costumers } from '../../Data'
export default function HappyCustomers(props) {
  return (
    <div className="HappyCustomers" style={{
        marginTop: `${props.marginTop}`
    }}>
        <H1 content={"Happy Customers"} className={"titleHappy"} />
        <div className="slider">
          {Costumers.map((cust) => {
            return (
              <SectionCard
                jop={cust.jop}
                content={cust.content}
                image={cust.image}
                key={cust.id}
                name={cust.title}
              />
            );
          })}
        </div>
      </div>
  )
}
