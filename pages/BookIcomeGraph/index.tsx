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
  

const BookIcomeGraph = ()=>{

    const [ data, setData ] = useState([
        {
            name : "월급",
            money : 2400000
        },
        {
            name : "금융",
            money : 80000
        },
        {
            name : "기타",
            money : 98300
        },
        {
            name : "부수입",
            money : 1000
        }
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
                    <YAxis dataKey="name" type="category"/>
                    <Tooltip />
                    <Bar dataKey="money" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
    )
};

export default BookIcomeGraph;