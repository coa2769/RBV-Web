import React, { useState } from "react";

import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  

const BookSpendingGraph = ()=>{

    const [ data, setData ] = useState([
        {
            name : "적금",
            money : 600000
        },
        {
            name : "병원비",
            money : 80000
        },
        {
            name : "보험비",
            money : 98300
        },
        {
            name : "식비",
            money : 250000
        },
        {
            name : "교통/차량",
            money : 32000
        },
        {
            name : "구독결제",
            money : 20000
        },
    ]);

    return(
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    layout="vertical"
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        bottom: 10,
                        left: 10,
                }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" domain={[0, 'dataMax + 1000']} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="money" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
    )
};

export default BookSpendingGraph;