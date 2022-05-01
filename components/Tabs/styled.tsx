import styled from '@emotion/styled';
import TabsUnstyled from '@mui/base/TabsUnstyled';

export const Container = styled(TabsUnstyled)`
    background : #fff;
    height : 100%;

    .tabs-list{
        height : 30px;
        background : var(--page-top-bar-background-color);
    }


    .tab-button{
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