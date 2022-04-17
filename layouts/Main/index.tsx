import React, { useState, useCallback } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import { Header, PageContainer, tap_style, menu_style, MenuContainer, RowContainer } from '@layouts/Main/style'

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

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

    // const onSelectTab = useCallback(
    //     (event : React.SyntheticEvent<Element, Event>)=>{
    //         const parent = (event.target as HTMLElement).parentElement;
    //         console.log((parent as HTMLElement).children);
    //         // const children : Array<HTMLElement> = 
    //         // console.log((event.target as HTMLInputElement).style.borderLeftColor = '#FF6E40');
    //         // console.log((event));
    //     }, []);

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
                    </TabsListUnstyled>
                </TabsUnstyled>
            </MenuContainer>
            <PageContainer>
                <Switch>
                    <Route path="/main/cog" component={Cog} />
                    <Route path="/main/asset" component={Asset} />
                </Switch>    
            </PageContainer>
        </RowContainer>
  
    )
}

export default Main;