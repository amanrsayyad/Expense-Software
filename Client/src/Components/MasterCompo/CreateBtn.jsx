import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import { message, Table } from 'antd';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BsPeople } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TableMaster, TableHead, TableHeading } from "../../BaseStyles";

const CreateBtn = ({ setCreate, setShowBtn, editable, setEditable }) => {

  const [loading, setLoading] = useState(false);
  const [allMasters, setAllMasters] = useState([]);

  const getAllMasters = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      const res = await axios.post('/api/v1/masters/get-masters', { userid: user._id })
      setLoading(false)
      setAllMasters(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      message.error('Issue With Getting Masters')
    }
  }

  useEffect(() => {
    getAllMasters();
  }, []);

  return (
    <>
      <TableH2><BsPeople className="head_icon" />Masters</TableH2>
      {loading && <h2 style={{ color: 'black', marginLeft: '20px', marginBottom: '20px' }}>Loading....</h2>}
      <TableMaster>
        <tr>
          <TableHeading>Master Name</TableHeading>
          <TableHeading>Master Bank</TableHeading>
          <TableHeading>Master Account</TableHeading>
          <TableHeading>Actions</TableHeading>
        </tr>
        {allMasters.map((item) => {
          return <tr>
            <TableHead>{item.mastername}</TableHead>
            <TableHead>{item.masterbank}</TableHead>
            <TableHead>{item.masteraccount}</TableHead>
            <TableHead>
              <span><FaRegEdit className="actionIcon" /></span>
              <span><RiDeleteBin5Line className="actionIcon" /></span></TableHead>
          </tr>
        })}
      </TableMaster>
      <Create onClick={() => { setCreate(true); setShowBtn(true) }}>
        <HiOutlineViewGridAdd className="icon" /> Create Master
            </Create>
    </>
  )
}

export default CreateBtn;

const TableH2 = styled.h2`
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

const Create = styled(Link)`
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