import React, { useState, useCallback } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { Header, PageContainer, tap_style, menu_style, MenuContainer, RowContainer } from '@layouts/Main/style'

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Cog from '@layouts/Cog';
import Asset from '@layouts/Asset';
import Graph from '@layouts/Graph';

const Main = (props : RouteComponentProps)=>{
    const [ currentTab, setCurrentTab ] = useState(
        props.location.pathname.replace(/\/main\//, '')
    );
    
    const today = new Date();
    const [startDate, setStartDate] = useState('2022-03-10');
    const [endDate, setEndDate] = useState(`${today.getFullYear()}-${(today.getMonth() + 1)>9?today.getMonth() + 1 : '0' + (today.getMonth()+1)}-${today.getDate()}`);

    const onChangeStartDate = useCallback(
        (event : React.ChangeEvent<HTMLInputElement>)=>{
            setStartDate(event.target.value);
        }, [startDate]);

    const onChangeEndDate = useCallback(
        (event : React.ChangeEvent<HTMLInputElement>)=>{
            setEndDate(event.target.value);
        }, [endDate]);
    
    const onChangeTab = useCallback(
        (event : React.SyntheticEvent<Element, Event>, value : string | number)=>{
            setCurrentTab( typeof(value) === "string" ? value : value.toString());
            props.history.push(`/main/${value}`);
        }, [currentTab]);

    return(
        <RowContainer>
            <MenuContainer>
                <Header>
                    <h1>MENU</h1>
                </Header>
                <TabsUnstyled defaultValue={"cog"}>
                    <TabsListUnstyled style={menu_style} component={"ul"}>
                        <TabUnstyled onChange={onChangeTab} value="cog" style={tap_style} component={"li"}>장부</TabUnstyled>
                        <TabUnstyled onChange={onChangeTab} value="asset" style={tap_style} component={"li"}>자산</TabUnstyled>
                        <TabUnstyled onChange={onChangeTab} value="graph" style={tap_style} component={"li"}>그래프</TabUnstyled>
                    </TabsListUnstyled>
                </TabsUnstyled>
            </MenuContainer>
            <PageContainer>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                    label="기간"
                    value={value}
                    onChange={(newValue)=>{
                        setValue(newValue);
                    }}
                    renderInput={(params)=>  <TextField {...params} /> }
                />
            </LocalizationProvider> */}
                <TextField
                    label="시작"
                    type="date"
                    defaultValue={startDate}
                    margin="normal"
                    onChange={onChangeStartDate}
                />

                <TextField 
                    label="끝"
                    type="date"
                    defaultValue={endDate}
                    margin="normal"
                    onChange={onChangeEndDate}
                />
                <Switch>
                    <Route path="/main/cog" component={Cog} />
                    <Route path="/main/asset" component={Asset} />
                    <Route path="/main/graph" component={Graph} />
                </Switch>    
            </PageContainer>
        </RowContainer>
  
    )
}

export default Main;