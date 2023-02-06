import React, { useState, useEffect } from 'react';
import { TableH2, TableMaster, TableHead, TableHeading, Create } from "../../BaseStyles";
import axios from "axios";
import { message } from 'antd';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BsPeople } from "react-icons/bs"; 
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const CustomerBtn = ({ setCreate, setShowBtn }) => {
    const [loading, setLoading] = useState(false);
    const [allCustomer, setAllCustomer] = useState([]);

    const getAllCustomer = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            setLoading(true)
            const res = await axios.post('/api/v1/customers/get-customer', { userid: user._id })
            setLoading(false)
            setAllCustomer(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
            message.error('Issue With Getting Masters')
        }
    }

    useEffect(() => {
        getAllCustomer();
    }, []);

    return (
        <div>
            <TableH2><BsPeople className="head_icon" />Customers</TableH2>
            {loading && <h2 style={{ color: 'black', marginLeft: '20px', marginBottom: '20px' }}>Loading....</h2>}
            <TableMaster>
                <tr>
                    <TableHeading>Customer Name</TableHeading>
                    <TableHeading>Buisness Name</TableHeading>
                    <TableHeading>Customer Mobile Number</TableHeading>
                    <TableHeading>Actions</TableHeading>
                </tr>
                {allCustomer.map((item) => {
                    return <tr>
                        <TableHead>{item.customername}</TableHead>
                        <TableHead>{item.buisnessname}</TableHead>
                        <TableHead>{item.customermo}</TableHead>
                        <TableHead><span><FaRegEdit className="actionIcon" /></span> <span><RiDeleteBin5Line className="actionIcon" /></span></TableHead>
                    </tr>
                })}
            </TableMaster>
            <Create onClick={() => { setCreate(true); setShowBtn(true) }}>
                <HiOutlineViewGridAdd className="icon" /> Create Customer
            </Create>
        </div>
    )
}

export default CustomerBtn
