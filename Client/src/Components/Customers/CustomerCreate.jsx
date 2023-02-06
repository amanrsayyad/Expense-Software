import React, { useState } from "react";
import { MasterForm, MasterHead, MasterContainer, CreateMasterForm, CreateBtn } from "../../BaseStyles";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { message } from 'antd';

const CustomerCreate = ({ setCreate, setShowBtn }) => {

    const [loading, setLoading] = useState(false);

    const [customer, setCustomer] = useState({
        customername: "",
        buisnessname: "",
        customermo: ""
    });

    const handleCustomer = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            setLoading(true);
            await axios.post('/api/v1/customers/create-customer', { ...customer, userid: user._id });
            setLoading(false);
            message.success('Transaction Created Successfully');
        } catch (error) {
            setLoading(false);
            message.error('Failed To Create Master');
        }
    }

    return (
        <MasterForm>
            {loading && <h2 style={{ color: 'white' }}>Loading....</h2>}
            <MasterHead>
                <div onClick={() => { setCreate(false); setShowBtn(false) }}>
                    <BiArrowBack className="backIcon" /><h3>Back</h3>
                </div>
                <div></div>
            </MasterHead>
            <MasterContainer onSubmit={handleCustomer}>
                <h1>Create Master</h1>
                <CreateMasterForm>
                    <input type="text" placeholder="Customer Name" onChange={(event) =>
                        setCustomer({ ...customer, customername: event.target.value })
                    } />
                    <input type="text" placeholder="Buisness Name" onChange={(event) =>
                        setCustomer({ ...customer, buisnessname: event.target.value })
                    } />
                    <input type="number" placeholder="Customer Mobile Number" onChange={(event) =>
                        setCustomer({ ...customer, customermo: event.target.value })
                    } />
                </CreateMasterForm>
                <CreateBtn type="submit">Create</CreateBtn>
            </MasterContainer>
        </MasterForm>
    )
}

export default CustomerCreate
