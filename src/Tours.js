import React from 'react';
import Tour from './Tour';


//destructuring tours data
//mapping over data stored at tour
//passing data to Tour component with unique id as key
//passing the {...tour} as prop to present elements in Tour component
//getting the removeTour passed as a props in App.js 
//pass removeTour as a props in Tour component
const Tours = ({tours, removeTour}) => {
  return(
    <section>

      <div className="title">
        <h2>
          Tours that we have in offer</h2>
          <div className="underline"></div>
      </div>

      <div>
        {tours.map((tour) => {
          return <Tour key ={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
      
    </section>
  )
};
export default Tours;