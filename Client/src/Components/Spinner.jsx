import React from 'react';
import Styled from 'styled-components';
import spinner from '../Assets/spinner.gif';

const Spinner = () => {
  return (
    <BgSpinner>
      <SpinnerImg src={spinner} alt='' />
    </BgSpinner>
  );
};

export default Spinner;

const BgSpinner = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;
const SpinnerImg = Styled.img`
  width: 200px;
  margin:auto;  
  display: block;
`;
