import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

//conditional rendering is needed


function App() {

  //creating states 
  const [loading, setLoading] = useState(true);
  //loading process forced to be true

  const [tours, setTours] = useState([]);
  //fetch the data and store it in tours
 
  //creating function for removing a tour component from site based on id
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //fetching data form api
  const fetchTours = async() => {
      setLoading(true); 
      //setting loading to be true when we start to fetch the data
      try {
        const response = await fetch(url); 
        //fetch data from the url
        const tours = await response.json();
        setLoading(false); 
        setTours(tours)
        //fetched data stored in variable tours as an array

      } catch(error) {
        setLoading(false);
        console.log(error);
      };
  };

  //useEffect to fetch the data in the first rendering or refreshing of the page
  useEffect(() => {
    fetchTours();
  }, []);

  //creating loading effect with the use of loading component from Loading.js
  if(loading){
    return( 
      <main>
          <Loading />
      </main>
    );
  };


  //changing the return for no elements case
  //onClick fetching data again 
  if(tours.length === 0){
    return(
    <main> 
      <div className="title">
        <h2> No tours left </h2>
        <button  className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    </main>
    );
  };

  // returning the Tours.js component in which are located all Tour.js components form api
  return (
    //passing tours that is storing the data form api as props in Tours component
    //passign removeTour as a props to tours component
    <main>
      <Tours tours = {tours} removeTour = {removeTour}/>
    </main>);
}

export default App
