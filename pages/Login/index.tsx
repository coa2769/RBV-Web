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

    const [LoginSuccess, setLoginSuccess] = useState(false);

    const onClick = useCallback(
        (e)=>{
            // setLogInError(false);
            console.log(e.target.value);
            console.log(process.env.DEV_SERVER_URL);
            console.log(process.env.FRONTEND_PORT);
            // axios.post(
            //     'api/users',
            //     {
            //         "email" : "test222@naver.com",
            //         "nickname" : "ccc",
            //         "password" : "qwe123"
            //     },
            //     {
            //         withCredentials: true,
            //     },)
            //     .then((response)=>{
            //         console.log(response.data);
            //     })

            axios.get(
                    `oauth2/authorization/${e.target.value}?redirect_uri=http://localhost:3090/main`,
                    // `oauth2/text`,
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

    if(LoginSuccess){
        console.log('로그인됨');
        return <Redirect to="/main" />;
    }
    
    return (
        <div>
            <Main>
                <h1>가계부에 로그인 해주세요</h1>
{/* 
    [ 에러 이유 ]
    /oauth/authorize를 Ajax로 호출하셨나요?
    /oauth/authorize는 리다이렉트 URI로 302 리다이렉트를 해야하기때문에 Ajax 호출하시면 안되고
    a href 링크로 호출해보시겠어요?

    authorize CORS에러의 원인은 비동기 통신 함수(XMLHttpRequest) 를 이용해서 발생합니다.

    [ 해결 방안 ]
    a tag사용


    https://kakao-tam.tistory.com/81?category=872536
    https://kakao-tam.tistory.com/59?category=866966
*/}

                <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3090/main">google</a>

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