import { useMediaQuery } from 'react-responsive';
import DSignup from "./desktop/DSignup.jsx";
import MSignup from "./mobile/MSignup.jsx";


const Signup = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 576px)'
    });

    return (
        <div>
            {isDesktopOrLaptop ? <DSignup /> : <MSignup />}
        </div>
    );
}

export default Signup;