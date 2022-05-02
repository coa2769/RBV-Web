import styled from '@emotion/styled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';


export const Container = styled.div`
    display : flex;
    flex-direction : row;
    height : calc(100% - var(--date-height));
    padding : var(--main-padding);

`;

export const ColumContainer = styled.div`
    width : var(--book-left-width);
    margin-right : 10px;
    
`;

export const GraphContainer = styled.div`
    margin-top : 10px;
    height : calc(100% - var(--householdhistory-height) - var(--main-padding));
`;

export const MainContainer = styled.div`
    width : calc(100% - var(--book-left-width));
`;

// export const GraphTabPanel = styled(TabPanelUnstyled)`
//     height : calc(100% - var)
// `;