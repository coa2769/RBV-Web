import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
    width : 100%;
    height : var(--header-height);

    background-color: var(--header-background-color);
    box-shadow: 0 1px 1px var(--header-border-bottom-color);
    color: var(--header-font-color);

    padding : 20px 40px;

    h1 {
        float : left;
        margin : 0;
    }

    .TabsUnstyled-root {
        line-height : 40px;
        float : left;
        margin : 0 0 0 60px;
        padding 0;

        a {
            font-size : 14px;
            display : inline-block;
            padding : 0 5px;
            opacity : 0.9;
            text-decoration : none;
            color: var(--header-font-color);
        }

        a.Mui-selected {
            color : var(--header-tab-selected-font-color);
        }
    }

    .header-right {
        float : right;

        .logout-style {
            margin-left : 10px;
            color : var(--header-font-color);
        }

        .team-select-style{
            
            .MuiInputLabel-root {
                color : var(--header-font-color);
            }
            .MuiOutlinedInput-root {
                color : var(--header-font-color);
            }
            .MuiSvgIcon-root{
                color : var(--header-font-color);
            }
            .MuiOutlinedInput-notchedOutline{
                border-color : var(--header-select-border-color);

            }
        }
    }
`;


export const PageContainer = styled.main`
    background-color : var(--main-page-background-color);
    height : calc(100% - var(--header-height));
`;

export const DateContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;

    height : var(--date-height);

    span {
        padding : 0 10px;
        color : var(--date-font-color);
    }

    .date-field-style{

    }
`;

