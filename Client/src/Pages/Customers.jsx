import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { BgHome, HomeContainer, HomeCard } from "../BaseStyles";
import CustomerBtn from "../Components/Customers/CustomerBtn";
import CustomerCreate from "../Components/Customers/CustomerCreate";

const Customers = () => {
    const [create, setCreate] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    return (
        <BgHome>
            <Sidebar>
                <HomeContainer>
                    <HomeCard>
                        {showBtn == false ? (
                            <CustomerBtn setCreate={setCreate} setShowBtn={setShowBtn} />
                        ) : null}
                        {create == true ? (
                            <CustomerCreate setCreate={setCreate} setShowBtn={setShowBtn} />
                        ) : null}
                    </HomeCard>
                </HomeContainer>
            </Sidebar>
        </BgHome>
    )
}

export default Customers
