import React from 'react';
import Sidebar from '../Components/Sidebar';
import { BgHome, HomeContainer, HomeCard } from "../BaseStyles";

const Invoices = () => {
    return (
        <BgHome>
            <Sidebar>
                <HomeContainer>
                    <HomeCard>Invoices</HomeCard>
                </HomeContainer>
            </Sidebar>
        </BgHome>
    )
}

export default Invoices
