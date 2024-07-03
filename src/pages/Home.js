import React from 'react';
import FetchData from '../components/FetchData';
import Counter from '../components/Counter';
import DisplayInfo from '../components/DisplayInfo';

const Home = () => {
  return (
    <div>
      <DisplayInfo/>
      <br/>
      <Counter />
      <br/>
      <FetchData />
    </div>
  );
}

export default Home;
