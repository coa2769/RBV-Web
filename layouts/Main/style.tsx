import styled from '@emotion/styled';

export const RowContainer = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
`;

export const MenuContainer = styled.nav`
    height:100%;
    width:200px;
    background-color:#ECEFF1;
    border-right: 1px solid #CFD8DC;

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
    color: #455A64;
    h1 {
        margin : 0;
        letter-spacing: 2px;
    }
`;

export const menu_style = {
    margin : '0',
    padding : '0',
    height : 'calc(100% - 60px)',
    listStyle : 'none',
};


export const tap_style = {
    color: "#455A64",
    height : "49px",
    cursor : 'pointer',
    fontSize : '14px',
    fontWeight : 500,
    lineHeight : '3.5',
    textAlign : 'center' as const,
    
};

//padding-left : 24px;
//'padding-left' : '60px',
//padding-left : 10px;

/*
'border-left' : '4px solid transparent',
    li:focus {
        border-left: 4px solid #FF6E40;
    }
*/