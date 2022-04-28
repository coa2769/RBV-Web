import React from "react";

import{
    Container,
    ColumContainer,
    MainContainer,
} from '@layouts/Book/style';

import HouseholdHistory from "@pages/HouseholdHistory";


const Book = ()=>{

    return(
        <Container>
            <ColumContainer>
                <HouseholdHistory></HouseholdHistory>
            </ColumContainer>
            <MainContainer>
            Book 화면
            </MainContainer>
        </Container>
    )
}

export default Book;