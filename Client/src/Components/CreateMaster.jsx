import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { message, Form } from 'antd';
import axios from 'axios';

const CreateMaster = ({ setCreate, setShowBtn, editable, setEditable }) => {

  const [loading, setLoading] = useState(false);

  const [master, setMaster] = useState({
    mastername: "",
    masterbank: "",
    masteraccount: ""
  })

  const handleCreateMaster = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      await axios.post('/api/v1/masters/create-master', { ...master, userid: user._id });
      setLoading(false);
      message.success('Master Created Successfully');
      setEditable(null);
    } catch (error) {
      setLoading(false);
      message.error('Failed To Create Master');
    }
  }
  return (
    <MasterForm>
      {loading && <h2 style={{ color: 'black' }}>Loading....</h2>}
      <MasterHead>
        <div onClick={() => { setCreate(false); setShowBtn(false) }}>
          <BiArrowBack className="backIcon" /><h3>Back</h3>
        </div>
        <div></div>
      </MasterHead>
      <MasterContainer onSubmit={handleCreateMaster}>
        <h1>Create Master</h1>
        <CreateMasterForm>
          <input type="text" placeholder="Master Name"
            onChange={(event) =>
              setMaster({ ...master, mastername: event.target.value })
            } />
          <input type="text" placeholder="Master Bank"
            onChange={(event) =>
              setMaster({ ...master, masterbank: event.target.value })
            } />
          <select
            onChange={(event) =>
              setMaster({ ...master, masteraccount: event.target.value })
            }>
            <option>Select Account Type</option>
            <option>Savings</option>
            <option>Current</option>
          </select>
        </CreateMasterForm>
        <CreateBtn type="submit">Create</CreateBtn>
      </MasterContainer>
    </MasterForm>
  )
}

export default CreateMaster;

const MasterForm = styled.div``;

const MasterHead = styled.div`
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

const MasterContainer = styled.form`
  padding: 10px 50px;

  h1 {
    color: #333;
    font-weight: 400;
  }
`;

const CreateMasterForm = styled.div`
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

const CreateBtn = styled.button`
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