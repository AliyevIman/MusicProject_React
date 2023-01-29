import { GoogleLogout } from 'react-google-login';

const clientId = '69753538296-a5ecnn0rbc3921r2lu6soj658a4t4v3a.apps.googleusercontent.com';

function GoogleAuthLogout() {
    const onSuccess=()=>{
        console.log("Log out Succesfull!");
    }
    return(
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default GoogleAuthLogout;