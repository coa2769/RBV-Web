import React, { useCallback, useState } from "react";
import { Main ,Container, LoginButton } from '@pages/Login/styled';
import { Redirect } from 'react-router-dom';

import KakaotalkIcon from '@Assets/kakaotalk-seeklogo.com.svg';
import AppleIcon from '@Assets/Apple_logo_black.svg';
import GoogleIcon from '@Assets/Google__G__Logo.svg';

const Login = ()=>{
    const [LoginSuccess, setLoginSuccess] = useState(false);

    const onClick = useCallback(
        (e)=>{
            setLoginSuccess(true);
        },
        []
    );

    if(LoginSuccess){
        console.log('로그인됨');
        return <Redirect to="/main" />;
    }
    
    return (
        <div>
            <Main>
                <h1>가계부에 로그인 해주세요</h1>
                <Container>
                    <ul>
                        <li>
                            <LoginButton onClick={onClick} background={'#FEE500'} color={'rgb(60, 30, 30)'} >
                                <img src={KakaotalkIcon} alt="카카오톡 로그인" />
                                카카오 로그인
                            </LoginButton>
                        </li>
                        <li>
                            <LoginButton onClick={onClick} background={'#FFFFFF'} color={'rgba(0, 0, 0, 0.9)'}>
                                <img src={GoogleIcon} alt="구글 로그인" />
                                구글 로그인
                            </LoginButton>
                        </li>
                        <li>
                            <LoginButton onClick={onClick} background={'#FFFFFF'} color={'rgba(0, 0, 0, 0.9)'}>
                                <img src={AppleIcon} alt="애플 로그인" />
                                애플 로그인
                            </LoginButton>
                        </li>
                    </ul>
                </Container>
            </Main>
        </div>
    )
}

export default Login;