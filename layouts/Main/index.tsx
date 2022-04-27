import React, { useState, useCallback } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { 
    Header, 
    PageContainer, 
    tab_style, 
    menu_style, 
    MenuContainer, 
    RowContainer,
    DateContainer,
    date_field_style,
    DateTextField } from '@layouts/Main/style'

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

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
    
    const [startDate, setStartDate] = useState('2022-03-10');
    const [endDate, setEndDate] = useState(new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]);

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
                        <TabUnstyled onChange={onChangeTab} value="cog" style={tab_style} component={"li"}>장부</TabUnstyled>
                        <TabUnstyled onChange={onChangeTab} value="asset" style={tab_style} component={"li"}>자산</TabUnstyled>
                        <TabUnstyled onChange={onChangeTab} value="graph" style={tab_style} component={"li"}>그래프</TabUnstyled>
                    </TabsListUnstyled>
                </TabsUnstyled>
            </MenuContainer>
            <PageContainer>
                <DateContainer>
                    <DateTextField
                        label="시작"
                        type="date"
                        defaultValue={startDate}
                        margin="normal"
                        onChange={onChangeStartDate}
                        style={date_field_style}
                        size="small"
                    />
                    <span>~</span>
                    <DateTextField 
                        label="끝"
                        type="date"
                        defaultValue={endDate}
                        margin="normal"
                        onChange={onChangeEndDate}
                        style={date_field_style}
                        size="small"
                    />
                </DateContainer>
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