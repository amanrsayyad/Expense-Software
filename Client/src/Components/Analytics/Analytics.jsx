import React from "react";
import styled from "styled-components";
import { Progress } from "antd";

const Analytics = ({ allTransaction }) => {
    const totalTransaction = allTransaction.length;
    const totalIncomeTransaction = allTransaction.filter((transaction) => transaction.category === 'Income');
    const totalExpenseTransaction = allTransaction.filter((transaction) => transaction.category === 'Expense');
    const totalIncomePercent = (totalIncomeTransaction.length / totalTransaction) * 100;
    const totalExpensePercent = (totalExpenseTransaction.length / totalTransaction) * 100;

    return (
        <AnalyticalContainer>
            <AnalyticalGrid>
                <AnalyticalCard>
                    <AnalyticalHeader>
                        <h1>Total Transaction: {totalTransaction}</h1>
                    </AnalyticalHeader>
                    <AnalyticData>
                        <h3>Income: {totalIncomeTransaction.length}</h3>
                        <h3>Expense: {totalExpenseTransaction.length}</h3>
                    </AnalyticData>
                    <AnalyticProgress>
                        <Progress className="progressCircle" type="circle" strokeColor={'green'} percent={totalIncomePercent.toFixed(0)} />
                    </AnalyticProgress>
                    <AnalyticProgress>
                        <Progress type="circle" strokeColor={'green'} percent={totalExpensePercent.toFixed(0)} />
                    </AnalyticProgress>
                </AnalyticalCard>
                <AnalyticalCard>
                    <AnalyticalHeader>
                        <h1>Total Transaction: {totalTransaction}</h1>
                    </AnalyticalHeader>
                    <AnalyticData>
                        <h3>Income: {totalIncomeTransaction.length}</h3>
                        <h3>Expense: {totalExpenseTransaction.length}</h3>
                    </AnalyticData>
                </AnalyticalCard>
            </AnalyticalGrid>
        </AnalyticalContainer>
    )
}

export default Analytics;

const AnalyticalContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AnalyticalGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-gap: 1rem;
`;

const AnalyticalCard = styled.div`
   border: 0.2px solid #fff;
   border-radius: 8px;
   width: 350px;
`;

const AnalyticData = styled.div`
 padding: 8px;
 color: #fff;
 h3 {
    font-size: 20px;
    font-weight: 400;
    padding-left: 10px;
    padding-bottom: 7px;
 }
`;

const AnalyticProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;

  .progressCircle {
    display: flex;
    color: #fff;
  }
`;

const AnalyticalHeader = styled.div`
   h1 {
       font-size: 22px;
       font-weight: 400;
       color: #fff;
       padding: 6px;
       border-bottom: 0.5px solid #fff;
   }
`;
