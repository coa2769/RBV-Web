import React, { useState } from "react";

import{
    Container,
    ColumContainer,
    GraphContainer,
    MainContainer,
} from '@layouts/Book/style';

import HouseholdHistory from "@pages/HouseholdHistory";
import BookSpendingGraph from "@pages/BookSpendingGraph";
import BookIcomeGraph from "@pages/BookIcomeGraph";

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

const Book = ()=>{
    const [ currentGraphTab, setCurrentGraphTab ] = useState("spending");
    const [ currentMainTab, setCurrentMainTab ] = useState("spending");

    const onChangeGraphTab = (event: React.SyntheticEvent, newValue: number | string) => {
        console.log(newValue);
        setCurrentGraphTab( typeof(newValue) === 'string'? newValue : newValue.toString());
    };


    return(
        <Container>
            <ColumContainer>
                <HouseholdHistory></HouseholdHistory>
                <GraphContainer>
                  
                  <TabsUnstyled defaultValue={"spending"} className={"graph-tab-container"}>
                    <TabsListUnstyled className="graph-tab-list">
                      <TabUnstyled onChange={onChangeGraphTab} className={"graph-tab"} value={"spending"}>지출</TabUnstyled>
                      <TabUnstyled onChange={onChangeGraphTab} className={"graph-tab"} value={"income"}>수입</TabUnstyled>
                    </TabsListUnstyled>

                    <TabPanelUnstyled value={"spending"}>
                      <BookSpendingGraph></BookSpendingGraph>
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={"income"}>
                      <BookIcomeGraph></BookIcomeGraph>
                    </TabPanelUnstyled>

                  </TabsUnstyled>

                </GraphContainer>
            </ColumContainer>

            <MainContainer>
              <TabsUnstyled defaultValue={"spending"} className={"main-tab-container"}>
                <TabsListUnstyled className="main-tab-list">
                  <TabUnstyled onChange={onChangeGraphTab} className={"main-tab"} value={"spending"}>지출</TabUnstyled>
                  <TabUnstyled onChange={onChangeGraphTab} className={"main-tab"} value={"income"}>수입</TabUnstyled>
                </TabsListUnstyled>

                <TabPanelUnstyled value={"spending"}>
                  <BookSpendingGraph></BookSpendingGraph>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={"income"}>
                  <BookIcomeGraph></BookIcomeGraph>
                </TabPanelUnstyled>

              </TabsUnstyled>
            </MainContainer>
        </Container>
    )
}

export default Book;