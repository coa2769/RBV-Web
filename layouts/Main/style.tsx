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
`;

export const PageContainer = styled.main`
    flex-basis : calc(100% - 200px);
`;


export const Header = styled.header`
    width : 100%;
    height : 60px;
    padding-left : 24px;
    display:flex;
    align-items: center;
    justify-content: left;
    color: #455A64;
    h1 {
        margin : 0;
        padding-left : 10px;
    }
`;



export const tap_style = {
    color: "#455A64",
    height : "28px",
    
}