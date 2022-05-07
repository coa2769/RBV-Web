import styled from '@emotion/styled';


export const Container = styled.div`
    height : 100%;
    width : 100%;
`;

export const ToolBar = styled.div`
    height : var(--tool-bar-height);
    width : 100%;
    box-shadow: 0 1px 1px var(--header-border-bottom-color);

    min-width : 700px;

    .toolbar-left {
        float : left;
    }

    .toolbar-right {
        float : right;
    }

    button{
        height : 100%;
        color : #555;
        font-size : 12px;
    }
`;

export const TableContainer = styled.div`
    height : calc(100% - var(--tool-bar-height));
    width : 100%;
    overflow : auto;

    th {
        padding : 5px 10px 5px 5px;
    }
`;