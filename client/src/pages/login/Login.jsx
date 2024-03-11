import { useMediaQuery } from 'react-responsive';
import LoginDesktop from "./desktop/LoginDesktop.jsx";
import LoginMobile from "./mobile/LoginMobile.jsx";

const Login = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 576px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? <LoginDesktop /> : <LoginMobile />}
        </div>
    );
}

export default Login;