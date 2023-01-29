import React, { useState } from 'react';


//getting the removeTour as a props from function in App.js 
//-> passed to Tours.js -> passed as a props here 
const Tour = ({id, info, image, name, price, removeTour}) => {

  //creating a readMore state
  const [readMore, setReadMore] = useState(false);

  return(
    <article className="single-tour">
      <img src={image} alt={name} />
      
      <footer>

        <div className="tour-info">
            <h4> {name} </h4>
            <h4 className="tour-price"> ${price} </h4>
        </div>

        <p> 
          {readMore ? info : `${info.substring(0,200)}...`}

          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>

      </footer>

    </article>
  );
};

export default Tour;
