import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FilterDiv, TableH2, TableMaster, TableHead, TableHeading, Create } from "../../BaseStyles";
import axios from "axios";
import moment from "moment";
import { message, DatePicker } from 'antd';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BsBank } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { BsTable } from "react-icons/bs";
import Analytics from '../Analytics/Analytics';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const { RangePicker } = DatePicker;


const TransactionBtn = ({ setCreate, setShowBtn, editable, setEditable }) => {
    const [loading, setLoading] = useState(false);
    const [allTransaction, setAllTransaction] = useState([]);
    const [frequency, setFrequency] = useState('7');
    const [selectedDate, setSelectedDate] = useState([]);
    const [allMasters, setAllMasters] = useState([]);
    const [category, setCategory] = useState('All');
    const [mastername, setMastername] = useState('All');
    const [viewData, setViewData] = useState('table');


    useEffect(() => {
        const getAllTransaction = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'))
                setLoading(true)
                const res = await axios.post('/api/v1/transaction/get-transaction', { userid: user._id, frequency, selectedDate, category, mastername })
                setLoading(false)
                setAllTransaction(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
                message.error('Issue With Getting Masters')
            }
        }
        getAllTransaction();
    }, [frequency, selectedDate, category, mastername]);

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
        <div>
            <TableH2><BsBank className="head_icon" />Transaction</TableH2>
            {loading && <h2 style={{ color: 'black', marginLeft: '20px', marginBottom: '20px' }}>Loading....</h2>}
            <FilterDiv>
                <div>
                    <h6>Select Frequency</h6>
                    <select value={frequency} onChange={(event) => setFrequency(event.target.value)}>
                        <option value="7">Last 1 Week</option>
                        <option value="30">Last 1 Month</option>
                        <option value="365">Last 1 Year</option>
                        <option value="custom">Custom</option>
                    </select>
                    {frequency === 'custom' && <RangePicker className="custom" value={selectedDate} onChange={(values) => setSelectedDate(values)} />}
                    <select className="marginLeft" value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="All">All</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <select className="marginLeft" value={mastername} onChange={(event) => setMastername(event.target.value)}>
                        <option value="All">All Masters</option>
                        {allMasters.map((item) => {
                            return <option value={item.mastername}>{item.mastername}</option>
                        })}
                    </select>
                </div>
                <div className="dashboard_icon">
                    <VscGraphLine className={`icon ${viewData === 'table' ? 'active_icon' : 'inactive_icon'}`} onClick={() => setViewData('table')} />
                    <BsTable className={`icon ${viewData === 'analytics' ? 'active_icon' : 'inactive_icon'}`} onClick={() => setViewData('analytics')} />
                </div>
            </FilterDiv>
            {viewData === 'table' ?
                <TableMaster>
                    <tr>
                        <TableHeading>Amount</TableHeading>
                        <TableHeading>Category</TableHeading>
                        <TableHeading>Master Name</TableHeading>
                        <TableHeading>Description</TableHeading>
                        <TableHeading>Date</TableHeading>
                        <TableHeading>Actions</TableHeading>
                    </tr>
                    {allTransaction.map((item) => {
                        return <tr>
                            <TableHead>{item.amount}</TableHead>
                            <TableHead>{item.category}</TableHead>
                            <TableHead>{item.mastername}</TableHead>
                            <TableHead>{item.description}</TableHead>
                            <TableHead>{moment(item.date).format("YYYY-MM-DD")}</TableHead>
                            <TableHead>
                            <span><FaRegEdit className="actionIcon" /></span>
                                <span><RiDeleteBin5Line className="actionIcon" /></span></TableHead>
                        </tr>
                    })}
                </TableMaster>
                : <Analytics allTransaction={allTransaction} />}
            <Create onClick={() => { setCreate(true); setShowBtn(true) }}>
                <HiOutlineViewGridAdd className="icon" /> Create Transaction
            </Create>
        </div>
    )
}

export default TransactionBtn;



