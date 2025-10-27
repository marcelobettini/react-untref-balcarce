import { useNavigate } from 'react-router';
import screen_formik from '../assets/screen_formik.png';
import screen_useform from '../assets/screen_useform.png';
import './HomeForms.css';
function HomeForms() {
    const navigate = useNavigate();

    return (
        <nav className='hero-nav'>
            <img src={screen_formik} alt="formik website capture" onClick={() => navigate("forms/formik")} />
            <img src={screen_useform} alt="useform website capture" onClick={() => navigate("forms/useform")} />
        </nav>
    );
}
export default HomeForms;