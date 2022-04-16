import React, { useState, useCallback } from "react";
import { Link, Route, Switch, RouteComponentProps } from "react-router-dom";
import { Header, PageContainer, tap_style, MenuContainer, RowContainer } from '@layouts/Main/style'

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookIcon from '@mui/icons-material/Book';

import Cog from '@layouts/Cog';
import Asset from '@layouts/Asset';

const Main = (props : RouteComponentProps)=>{
    const [ currentTab, setCurrentTab ] = useState(
        props.location.pathname.replace(/\/main\//, '')
    );

    const onChangeTab = useCallback(
        (event : React.SyntheticEvent<Element, Event>, value : string | number)=>{
            setCurrentTab( typeof(value) === "string" ? value : value.toString());
            props.history.push(`/main/${value}`);
        }, [currentTab]);

    return(
        <RowContainer>
            <MenuContainer>
                <Header>
                    <BookIcon />
                    <h1>Menu</h1>
                </Header>
                <TabsUnstyled orientation='vertical' defaultValue={currentTab}>
                    <TabsListUnstyled >
                        <TabUnstyled onChange={onChangeTab} value="cog">장부</TabUnstyled>
                        <TabUnstyled onChange={onChangeTab} value="asset">자산</TabUnstyled>
                    </TabsListUnstyled>
                </TabsUnstyled>
                {/* <Tabs
                    orientation="vertical"
                    value={currentTab}
                    onChange={onChangeTab}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                    <Tab label="장부" value="cog" style={tap_style} component={Link} to="/main/cog"/>
                    <Tab label="자산" value="asset" style={tap_style} component={Link} to="/main/asset"/>
                </Tabs> */}
            </MenuContainer>
            <PageContainer>
                <Switch>
                    <Route path="/main/cog" component={Cog} />
                    <Route path="/main/asset" component={Asset} />
                </Switch>    
            </PageContainer>
        {/* Header */}

        {/* <img src={strip} alt="" /> */}
        {/* <Box sx={{ width: '100%', bgcolor: 'background.paper' }}> */}
        {/* <TabsUnstyled defaultValue={"cog"} background-image={strip}> */}
        {/* <TabsListUnstyled style={tap_list_style} > */}
            {/* <TabUnstyled value="cog" style={tap_style} component={Link} to="/main/cog">장부</TabUnstyled> */}
            {/* <TabUnstyled value="asset" style={tap_style} component={Link} to="/main/asset">자산</TabUnstyled> */}
        {/* </TabsListUnstyled> */}
        {/* <TabPanelUnstyled value={"cog"}>First page</TabPanelUnstyled> */}
        {/* <TabPanelUnstyled value={"asset"}>Second page</TabPanelUnstyled> */}
        {/* <TabPanelUnstyled value={2}>Third page</TabPanelUnstyled> */}
        {/* </TabsUnstyled> */}
        {/* </Box> */}


        {/* value={currentTab} onChange={onChangeTab} style={taps_style} */}
        {/* <Box sx={{ width: '100%', bgcolor: 'background.paper' }}> */}
            {/* <Tabs value={currentTab} onChange={onChangeTab} > */}
                {/* <TabUnstyled>장부</TabUnstyled> */}
                {/* <TabUnstyled>자산</TabUnstyled> */}
                {/* <Tab label="장부" value="cog" style={tap_style} component={Link} to="/main/cog"/> */}
                {/* <Tab label="자산" value="asset" style={tap_style} component={Link} to="/main/asset"/> */}
            {/* </Tabs> */}
        {/* </Box> */}
        {/* 장부 or 자산 */}

        {/* <Box display="flex" flex={1} flexDirection="column"> */}
            {/* <Header> 
                <h1>가계부</h1>
            </Header>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={currentTab}
                onChange={onChangeTab}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="장부" value="cog" style={tap_style} component={Link} to="/main/cog"/>
                <Tab label="자산" value="asset" style={tap_style} component={Link} to="/main/asset"/>
            </Tabs>
            <Switch>
                <Route path="/main/cog" component={Cog} />
                <Route path="/main/asset" component={Asset} />
            </Switch> */}
        {/* </Box> */}
        </RowContainer>
  
    )
}

export default Main;