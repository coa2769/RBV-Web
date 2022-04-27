import styled from '@emotion/styled';
import { CSSProperties } from "react";

import CalendarIcon from '@Assets/calendar_21.svg';
import test from '@Assets/Google__G__Logo.svg';

import TextField from '@mui/material/TextField';

export const RowContainer = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
`;

export const MenuContainer = styled.nav`
    height:100%;
    width:200px;
    background : var(--base-tab-background-color);
    border-right: 1px solid var(--border-color);

    li{
        border-left: 4px solid transparent;
    }

    li.Mui-selected {
        border-left: 4px solid #FF6E40;
    }
`;

export const PageContainer = styled.main`
    flex-basis : calc(100% - 200px);
`;

export const Header = styled.header`
    width : 100%;
    height : 60px;
    
    display:flex;
    align-items: center;
    justify-content: center;
    color: var(--base-font-color);
    h1 {
        margin : 0;
        letter-spacing: 2px;
    }
`;

export const menu_style : CSSProperties = {
    margin : '0',
    padding : '0',
    height : 'calc(100% - 60px)',
    listStyle : 'none',
};


export const tab_style : CSSProperties = {
    color: "var(--base-font-color)",
    height : "49px",
    cursor : 'pointer',
    fontSize : '14px',
    fontWeight : 500,
    lineHeight : '3.5',
    textAlign : 'center' as const,
    
};

export const DateContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;

    background-color : var(--base-background-color);

    span {
        padding : 0 10px;
        color : var(--base-font-color);
    }

`;

export const date_field_style : CSSProperties = {
    color : 'var(--base-font-color)',
    
};

export const DateTextField = styled(TextField)({
    
    '& label' : {
        color : 'var(--base-font-color)',
    },
    '& label.Mui-focused': {
        color: 'var(--base-font-color)',
    },
    
    '& .MuiOutlinedInput-root' : {
        '& input' : {
            color : 'var(--base-font-color)',
        },
        '& input[type="date"]::-webkit-calendar-picker-indicator' : {
            background : `url(${CalendarIcon})`,
            width: '13px',
            height: '13px',
            filter: 'grayscale(1) invert(1)',
        },
        '& fieldset': {
            borderColor: 'var(--base-font-color)',
        },
        '&.Mui-focused fieldset' : {
            borderColor: 'var(--base-font-color)',
        },
        '&:hover fieldset': {
            borderColor: 'var(--base-font-color)',
        },
    },
    '& MuiOutlinedInput-input' : {
        color : 'var(--base-fontt-color)',
    }
});

export const ValidationTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
  });