import React from 'react';
import Sidebar from '../Components/Sidebar';
import { BgHome, HomeContainer, HomeCard } from "../BaseStyles";

const Home = () => {
  return (
    <BgHome>
      <Sidebar>
        <HomeContainer>
          <HomeCard>
            <h1>HIII</h1>
          </HomeCard>
        </HomeContainer>
      </Sidebar>
    </BgHome>
  );
};

export default Home;


