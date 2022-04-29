import styled from '@emotion/styled';

export const Container = styled.div`
    margin : 5px 10px;
    padding-bottom : 3px;
    background : var(--householdhistory-background-color);

    .summary-info {
        margin : 5px;
        padding : 5px;
        width : 96%;
        font-size : 12;
        border : 1px dotted var(--householdhistory-bordoer-color);
        color : var(--householdhistory-font-color);
        text-align : center;
    }
`;

export const AppBar = styled.div`
    background : var(--householdhistory-bar-background-color);
    padding : 5px 10px;

    h4 {
        margin : 0;
    }
`;

export const Table = styled.table`

    .title {
        padding : 0px 0px 0px 20px;
        text-align : left;
    }

    .content {
        padding : 0px 20px 0px 0px;
        text-align : right;
    }

    .subTitle {
        padding : 0px 0px 0px 40px;
    }

`;