import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BgHome = styled.div`
  position: relative;
  background-color: #eee;
  width: 100%;
  height: 100vh;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeCard = styled.div`
  background-color: #fff;
  margin-right: 25px;
  width: 93vw;
  height: 100vh;
  overflow: hidden;
`;

export const MasterForm = styled.div``;

export const MasterHead = styled.div`
  padding: 8px 30px;
  border-bottom: 2px solid #333;
  color: #fff;
  
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    color: #333;
  }
  div > h3 {
    font-weight: 500;
    font-size: 23px;
  }
  .backIcon {
    font-size: 23px;
    font-weight: 300;
    margin-right: 6px;
  }
`;

export const MasterContainer = styled.form`
  padding: 10px 50px;

  h1 {
    font-weight: 400;
    color: #333;
  }
`;

export const CreateMasterForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-row-gap: 17px;
  margin-top: 15px;

  input {
    width: 100%;
    padding: 7px 15px;
    border-radius: 9px;
    border: none;
    outline: none;
    background-color: #fff;
    border: 2px solid #333;
    font-size: 17px;
    font-weight: 500;
  }
  select {
    width: 100%;
    padding: 7px 15px;
    border-radius: 9px;
    border: none;
    outline: none;
    background-color: #fff;
    border: 2px solid #333;
    font-size: 17px;
    font-weight: 500;
  }
`;

export const CreateBtn = styled.button`
   margin: auto;
   margin-top: 18px;
   padding: 10px 25px;
   width: 15%;
   border-radius: 9px;
   cursor: pointer;
   border: none;
   outline: none;
   background-color: #333;
   color: #fff;
   font-size: 19px;
`;

export const TableH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 30px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  font-size: 25px;
  font-weight: 400;
    color: #333;

  .head_icon {
    font-size: 38px;
    font-weight: 300;
    margin-right: 6px;
    color: #333;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  padding: 0px 20px;
  padding-bottom: 15px;
  color: #333;
  h6 {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 10px;
    padding-left: 7px;
  }
  select {
    width: 180px;
    padding: 5px 15px;
    border: none;
    outline: none;
    border: 2px solid #333;
    font-size: 18px;
    font-weight: 500;
    border-radius: 7px;

    option {
      padding: 7px 15px;
    }
  }
  .custom {
    width: 300px;
    padding: 5px;
    margin-left: 15px;
    border-radius: 7px;
    color: #333;
    border: 2px solid #333;
  }
  .dashboard_icon {
    position: absolute;
    top: 29%;
    right: 4%;
  }
  .icon {
    background-color: #fff;
    padding: 3px 10px;
    font-size: 45px;
    border-radius: 5px;
    margin-right: 8px;
    cursor: pointer;
    border: 2px solid #333;
  }
  .active_icon {
    color: #000;
  }
  .inactive_icon {
    color: gray;
  }
  .marginLeft {
    margin-left: 15px;
  }
`;

export const TableMaster = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 2px solid #333;
  border-bottom: 0.1px solid #333;
`;

export const TableHead = styled.td`
  padding: 4px;
  border-bottom: 2px solid #333;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  .actionIcon {
    cursor: pointer;
    font-size: 27px;
    margin: 0px 5px;
  }
`;

export const TableHeading = styled.td`
  padding: 6px;
  border-bottom: 2px solid #333;
  /* border-right: 0.1px solid #333;
  border-left: 0.1px solid #333; */
  color: #333;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
`;

export const Create = styled(Link)`
   position: absolute;
   right: 4%;
   top: 2.5%;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 7px 25px;
   /* background-color: #00ed64; */
   background-color: #fff;
   font-size: 18px;
   font-weight: 600;
   text-decoration: none;
   color: #000;
   border: 1px solid #333;
   -webkit-box-shadow: 7px 7px 0px 0px rgba(61,61,61,1);
-moz-box-shadow: 7px 7px 0px 0px rgba(61,61,61,1);
box-shadow: 7px 7px 0px 0px rgba(61,61,61,1);

   .icon {
    font-size: 25px;
    margin-right: 4px;
   }
`;