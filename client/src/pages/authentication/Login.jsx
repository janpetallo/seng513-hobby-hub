import { useMediaQuery } from 'react-responsive';
import DLogin from "./desktop/DLogin.jsx";
import MLogin from "./mobile/MLogin.jsx";

const Login = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 576px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? <DLogin /> : <MLogin />}
        </div>
    );
}

export default Login;