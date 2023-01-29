import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../api/BaseConfig';


function GoogleAuthLogin() {
    const navi = useNavigate();

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )
    const onSuccess = async (googleData) => {
        // const res = await fetch(`${BASE_URL}api/Account/login`,{
        //     method:"POST",
        //     body: JSON.stringify({
        //         token:googleData.tokenId
        //     }),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // });
        // const data = await res.json();
        setLoginData(googleData)
        localStorage.setItem('loginData', JSON.stringify(googleData.profileObj));
        if (loginData) {
            navi('/')
        }
    };


    const onFailure = (err) => {
        alert(err)
    };
    return (
        <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </>

    )
}
export default GoogleAuthLogin;