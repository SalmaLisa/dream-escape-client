import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../image/marker.jpg'
import TourDestination from '../TourDestination/TourDestination';

const Home = () => {
  const destinations = useLoaderData()
  console.log(destinations)
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mt-20' style={{ fontFamily: "'Satisfy', cursive" }}>Chose Your Dream Tour</h1>
      <div className='relative w-1/12 mx-auto'>
      <img className='ml-24 ' style={{width:"150px"}} src={img} alt="" />
     </div>
      <p className='w-5/12 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi atque ullam nemo nesciunt libero totam maiores tempore enim dolorum saepe fugit culpa nulla repellendus suscipit, mollitia at sint amet.</p>
      {
        destinations.map(d=><TourDestination key={d._id} destination={d}></TourDestination>)
      }
    </div>
  );
};

export default Home;
