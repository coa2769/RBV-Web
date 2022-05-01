import styled from '@emotion/styled';


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

    .graph-tab-container{
        background : #fff;
        height : 100%;
    }

    .graph-tab-list{
        height : 30px;
        background : var(--page-top-bar-background-color);
    }

    .graph-tab{
        background : transparent;
        border : 0;
        outline : 0;

        height : 100%;

        font-weight : bold;
        cursor : pointer;

        width : 50px;


    }
    .Mui-selected{
        background : #fff;
    }


`;

export const MainContainer = styled.div`
    width : calc(100% - var(--book-left-width));

    .main-tab-container{
        background : #fff;
        height : 100%;
    }

    .main-tab-list{
        height : 30px;
        background : var(--page-top-bar-background-color);
    }

    .main-tab{
        background : transparent;
        border : 0;
        outline : 0;

        height : 100%;

        font-weight : bold;
        cursor : pointer;

        width : 50px;


    }
    .Mui-selected{
        background : #fff;
    }
`;