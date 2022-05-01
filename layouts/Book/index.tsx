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
import BookSpending from "@pages/BookSpending";
import BookIcome from "@pages/BookIncome";
import BookTransfer from "@pages/BookTransfer";

import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import Tabs from '@components/Tabs';

const Book = ()=>{
    const [ currentGraphTab, setCurrentGraphTab ] = useState("spending");
    const [ currentMainTab, setCurrentMainTab ] = useState("spending");

    const onChangeGraphTab = (event: React.SyntheticEvent, newValue: number | string) => {
        setCurrentGraphTab( typeof(newValue) === 'string'? newValue : newValue.toString());
    };

    const onChangeMainTab = (event: React.SyntheticEvent, newValue: number | string)=>{
      setCurrentMainTab( typeof(newValue) === 'string'? newValue : newValue.toString());
    };


    return(
        <Container>
            <ColumContainer>
                <HouseholdHistory></HouseholdHistory>
                <GraphContainer>
                  <Tabs defaultValue="spending" tabArray={[{value : "spending", label : "지출"}, {value : "income", label : "수입"}]}>
                    <TabPanelUnstyled value={"spending"}>
                      <BookSpendingGraph></BookSpendingGraph>
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={"income"}>
                      <BookIcomeGraph></BookIcomeGraph>
                    </TabPanelUnstyled>
                  </Tabs>
                </GraphContainer>
            </ColumContainer>

            <MainContainer>
              <Tabs defaultValue="spending" tabArray={[{value : "spending", label : "지출"}, {value : "income", label : "수입"}, {value : "transfer", label : "이체"}]}>
                <TabPanelUnstyled value={"spending"}>
                  <BookSpending></BookSpending>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={"income"}>
                  <BookIcome></BookIcome>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={"transfer"}>
                  <BookTransfer></BookTransfer>
                </TabPanelUnstyled>
              </Tabs>
            </MainContainer>
        </Container>
    )
}

export default Book;