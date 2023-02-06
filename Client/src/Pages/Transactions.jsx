import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { BgHome, HomeContainer, HomeCard } from "../BaseStyles";
import TransactionBtn from '../Components/Transaction/TransactionBtn';
import TransactionCreate from '../Components/Transaction/TransactionCreate';

const Transactions = () => {
    const [create, setCreate] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [editable, setEditable] = useState(null);
    return (
        <BgHome>
            <Sidebar>
                <HomeContainer>
                    <HomeCard>
                        {showBtn == false ? (
                            <TransactionBtn setCreate={setCreate} setShowBtn={setShowBtn} editable={editable} setEditable={setEditable} />
                        ) : null}
                        {create == true ? (
                            <TransactionCreate setCreate={setCreate} setShowBtn={setShowBtn} editable={editable} setEditable={setEditable} />
                        ) : null}
                    </HomeCard>
                </HomeContainer>
            </Sidebar>
        </BgHome>
    )
}

export default Transactions
