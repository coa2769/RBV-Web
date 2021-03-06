import React, { useState, useCallback } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

import {
    HeaderContainer,
    PageContainer,
    DateContainer } from '@layouts/Main/style'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import Book from '@layouts/Book';
import Asset from '@layouts/Asset';

import useToken from "@hooks/useToken";
import useSWR from 'swr';
import { fetcher } from "@utils/fetcher";
// import { getToken } from "@utils/utils";
import axios from "axios";
import queryString from 'query-string';

const Main = (props : RouteComponentProps)=>{

    const query = queryString.parse(props.location.search);
    const { data : token, mutate } = useToken(typeof(query.token) === 'string'? query.token : undefined);
    // const {data : userData, error, mutate } = useSWR('/api/me', fetcher);

    const [ currentTab, setCurrentTab ] = useState(
        props.location.pathname.replace(/\/main\//, '')
    );
    const [startDate, setStartDate] = useState('2022-03-10');
    const [endDate, setEndDate] = useState(new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]);
    const [teams, setTeams] = useState([{name : 'team1'}, {name : 'team2'}, {name : 'team3'}, {name : 'team4'}]);
    const [currentTeam, setCurrentTeam] = useState('team1');    

    //
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
    
    const onChangeTeam = useCallback(
        (event : SelectChangeEvent)=>{
            setCurrentTeam(event.target.value);
        }, [currentTeam]);


    return(
        <div>
            <HeaderContainer>
                <h1>LOGO</h1>
                <TabsUnstyled defaultValue={"book"}>
                    <TabsListUnstyled component={"nav"}>
                        <TabUnstyled onChange={onChangeTab} value="book">??????</TabUnstyled>
                        <TabUnstyled onChange={onChangeTab} value="asset">??????</TabUnstyled>
                    </TabsListUnstyled>
                </TabsUnstyled>

                <div className="header-right">
                    <FormControl size="small" className="team-select-style">
                        <InputLabel>Team</InputLabel>
                        <Select
                            value={currentTeam}
                            label="Age"
                            onChange={onChangeTeam}
                        >
                        {teams.map((value)=>{
                            return(
                                <MenuItem value={value.name} key={value.name}>{value.name}</MenuItem>
                            )
                        })}
                        </Select>
                    </FormControl>
                    <Button className="logout-style" variant="text">Logout</Button>
                </div>
            </HeaderContainer>
            <PageContainer>
                <DateContainer>
                    <TextField
                        label="??????"
                        type="date"
                        defaultValue={startDate}
                        margin="normal"
                        onChange={onChangeStartDate}
                        size="small"
                        className="date-field-style"
                    />
                    <span>~</span>
                    <TextField 
                        label="???"
                        type="date"
                        defaultValue={endDate}
                        margin="normal"
                        onChange={onChangeEndDate}
                        size="small"
                        className="date-field-style"
                    />
                </DateContainer>
                <Switch>
                    <Route path="/main/book" component={Book} />
                    <Route path="/main/asset" component={Asset} />
                </Switch> 
            </PageContainer>
        </div>

    )
}

export default Main;