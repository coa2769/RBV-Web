import styled from '@emotion/styled';

type LoginButtonProps = {
    background : string,
    color : string,
}

export const Main = styled.main`
    background : var(--login-background-page-color);
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items : center;
    height : 100%;
    color : var(--login-title-font-color);
`;

export const Container = styled.div`
    width : 316px;
    height : 372px;

    ul{
        list-style-type : none;
        margin : 0;
        padding : 0;
    }

    li{
        margin : 12px 0px;
    }
`;

export const LoginButton = styled.button<LoginButtonProps>`
    font-family: inherit;    
    font-size : 15px;
    font-weight : 700;
    cursor : pointer;
    border : 0px none transparent;
    padding : 0px;
    background : ${(props) => props.background };
    width : 100%;
    height : 52px;
    border-radius : 4px 4px 4px 4px;
    position : relative;

    img {
        position: absolute;
        top: 13px;
        left: 17px;
        width : 26px;
        height : 26px;
    } 
`;

// export const LoginButton = styled.li<LoginButtonProps>`
//     font-family: inherit;    
//     font-size : 15px;
//     font-weight : 700;
//     cursor : pointer;

//     text-decoration-line : none;

//     border : 0px none transparent;
//     padding : 0px;
//     background : ${(props) => props.background };
//     width : 100%;
//     height : 52px;
//     border-radius : 4px 4px 4px 4px;
//     position : relative;

//     img {
//         float : left;
//         width : 26px;
//         height : 26px;
//     } 
// `;
