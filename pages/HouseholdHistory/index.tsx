import React, { useState } from "react";

import {
    Container,
    AppBar,
    Table,
} from '@pages/HouseholdHistory/style';

const HouseholdHistory = ()=>{
    const startDate = useState('2022-03-10');
    const endDate = useState('2022-04-09');

    const income = useState('4,790,323');
    const spending = useState('722,952');
    const cashSpending = useState('722,952');
    const cardSpending = useState('0');
    const totalAmount = useState('4,067,371');

    return (
        <Container>
            <AppBar>
                <h4>기간내 가계내역</h4>
            </AppBar>   

            <div className="summary-info">
                {startDate} <span>~</span> {endDate}
            </div>

            <Table className="summary-info">
                <tbody>
                    <tr>
                        <td className="title">수입</td>
                        <td className="content">
                            <b>{income}</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">지출</td>
                        <td className="content">
                            <b>{spending}</b>
                        </td>
                    </tr>
                    <tr>
                        <td className="subTitle">현금지출</td>
                        <td className="content">{cashSpending}</td>
                    </tr>
                    <tr>
                        <td className="subTitle">카드지출</td>
                        <td className="content">{cardSpending}</td>
                    </tr>
                </tbody>
            </Table>

            <Table className="summary-info">
                <tbody>
                    <tr>
                        <td className="title">총액</td>
                        <td className="content">
                            <b>{totalAmount}</b>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </Container>       
    )
};

export default HouseholdHistory;