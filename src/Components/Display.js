import React from 'react';
import DisplayCard from './DisplayCard';

const Display = (props)=> {
  return (
  <div className='display'> {
    props.data.map((data, index)=>{
      return (
      <DisplayCard key={index} 
      fname={data.fname} 
      lname={data.lname} 
      phoneNo={data.phoneNo} 
      email={data.email}
      address={data.address}
      program={data.program} />
      );
    })
  }
  </div>
  );
};
export default Display;