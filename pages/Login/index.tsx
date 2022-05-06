import React, { useCallback, useState, useRef } from "react";
import { Main ,Container, LoginButton } from '@pages/Login/styled';

import KakaotalkIcon from '@Assets/kakaotalk-seeklogo.com.svg';
import AppleIcon from '@Assets/Apple_logo_black.svg';
import GoogleIcon from '@Assets/Google__G__Logo.svg';

const Login = ()=>{

    // const {data : userData, error, mutate } = useSWR('/api/me', fetcher);
    // const [logInError, setLogInError] = useState(false);
    // console.log(userData);

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

    const onClick = useCallback(
        (e : React.MouseEvent<HTMLButtonElement>)=>{
            //자신의 자식으로 있는 a tag를 클릭하는 이벤트
            e.currentTarget.querySelector('a')?.click();
        },
        []
    );
    
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
                <Container>
                    <ul>
                        {
                            socials.map((value, index)=>(
                                <li key={index}>
                                    <LoginButton 
                                        onClick={onClick}
                                        background={value.background} 
                                        color={value.fontColor}
                                    >
                                        <img src={value.image} alt={value.label} />
                                        {value.label}
                                        <a href={`${process.env.DEV_SERVER_URL}:${process.env.BACKEND_PORT}/oauth2/authorization/${value.socialType}?redirect_uri=${process.env.DEV_SERVER_URL}:${process.env.FRONTEND_PORT}/main/book`}></a>
                                    </LoginButton>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </Main>
        </div>
    )
}

export default Login;