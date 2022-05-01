import React, { useCallback, useState } from "react";

import {
    Container,
} from '@components/Tabs/styled';

import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

interface TabsProps{
    children : React.ReactNode;
    defaultValue : string;
    tabArray : Array<{value : string, label : string}>;
}

const Tabs = (props : TabsProps)=>{
    const { children, defaultValue, tabArray } = props;
    const [ selectedTab, setSelectTab ] = useState(defaultValue);

    const onChangeSelectedTab = useCallback((event: React.SyntheticEvent, newValue: number | string)=>{
        setSelectTab( typeof(newValue) === 'string'? newValue : newValue.toString());
        
    }, [selectedTab,]);

    return(
        <Container defaultValue={defaultValue}>
            <TabsListUnstyled className="tabs-list">
                {tabArray.map((tab, index)=>{
                    return(
                        <TabUnstyled onChange={onChangeSelectedTab} className={"tab-button"} value={tab.value} key={index}>{tab.label}</TabUnstyled>
                    )
                })}
            </TabsListUnstyled>

            { children }

        </Container>
    )
}

export default Tabs;