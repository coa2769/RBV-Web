import React, { useCallback, useState } from "react";
import { Main ,Container, LoginButton } from '@pages/Login/styled';
import { Redirect } from 'react-router-dom';

import useSWR from 'swr';

import KakaotalkIcon from '@Assets/kakaotalk-seeklogo.com.svg';
import AppleIcon from '@Assets/Apple_logo_black.svg';
import GoogleIcon from '@Assets/Google__G__Logo.svg';

import fetcher from "@utils/fetcher";
import axios from "axios";

const Login = ()=>{

    // const {data : userData, error, mutate } = useSWR('/api/users', fetcher);
    // const [logInError, setLogInError] = useState(false);


    const [ socials, setSocials ] = useState([
        {
            socialType : 'kakao',
            label : '카카오 로그인',
            image : KakaotalkIcon,
            background : '#FEE500',
            fontColor : 'rgb(60, 30, 30)',
        },
        {
            socialType : 'google',
            label : '구글 로그인',
            image : GoogleIcon,
            background : '#FFFFFF',
            fontColor : 'rgba(0, 0, 0, 0.9)',

        },
        {
            socialType : 'apple',
            label : '애플 로그인',
            image : AppleIcon,
            background : '#FFFFFF',
            fontColor : 'rgba(0, 0, 0, 0.9)',
        }
    ]);

    // const [LoginSuccess, setLoginSuccess] = useState(false);

    const onClick = useCallback(
        (e)=>{
            // setLogInError(false);

            axios
                .get(
                    `/oauth2/authorization/${e.target.value}?redirect_uri=${process.env.DEV_SERVER_URL}:${process.env.FRONTEND_PORT}/main`,
                    {
                        withCredentials: true,
                    },
                )
                .then((response)=>{
                    console.log('응답 옴');
                    console.log(response.data);
                })
                .catch((error)=>{
                    console.error(error);
                });

            // setLoginSuccess(true);
        },
        []
    );

    // if(LoginSuccess){
    //     console.log('로그인됨');
    //     return <Redirect to="/main" />;
    // }
    
    return (
        <div>
            <Main>
                <h1>가계부에 로그인 해주세요</h1>
                <Container>
                    <ul>
                        {
                            socials.map((value, index)=>(
                                <li key={index}>
                                    <LoginButton onClick={onClick} background={value.background} color={value.fontColor} value={value.socialType}>
                                        <img src={value.image} alt={value.label} />
                                        {value.label}
                                    </LoginButton>
                                </li>
                            ))
                        }
                        {/* <li>
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
                        </li> */}
                    </ul>
                </Container>
            </Main>
        </div>
    )
}

export default Login;