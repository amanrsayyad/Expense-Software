import React, { useState, useEffect } from "react";
import { MasterForm, MasterHead, MasterContainer, CreateMasterForm, CreateBtn } from "../../BaseStyles";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { message } from 'antd';

const TransactionCreate = ({ setCreate, setShowBtn,}) => {

    const [loading, setLoading] = useState(false);

    const [transaction, setTransaction] = useState({
        amount: "",
        category: "",
        mastername: "",
        description: "",
        date: "",
    });

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

    const handleTransaction = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            setLoading(true);
            await axios.post('/api/v1/transaction/create-transaction', { ...transaction, userid: user._id });
            setLoading(false);
            message.success('Transaction Created Successfully');
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
            <MasterContainer onSubmit={handleTransaction}>
                <h1>Create Transaction</h1>
                <CreateMasterForm>
                    <input type="number" placeholder="Amount"
                        onChange={(event) =>
                            setTransaction({ ...transaction, amount: event.target.value })
                        } />
                    <select onChange={(event) =>
                        setTransaction({ ...transaction, category: event.target.value })
                    }>
                        <option>Category</option>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                    <select
                        onChange={(event) =>
                            setTransaction({ ...transaction, mastername: event.target.value })
                        }>
                        <option>Master Name</option>
                        {allMasters.map((item) => {
                            return <option>{item.mastername}</option>
                        })}
                    </select>
                    <input type="text" placeholder="Description"
                        onChange={(event) =>
                            setTransaction({ ...transaction, description: event.target.value })
                        } />
                    <input type="date" placeholder="Master Bank"
                        onChange={(event) =>
                            setTransaction({ ...transaction, date: event.target.value })
                        } />
                </CreateMasterForm>
                <CreateBtn type="submit">Create</CreateBtn>
            </MasterContainer>
        </MasterForm>
    )
}

export default TransactionCreate;

