import { NavLink } from "react-router";
import './HeaderNAv.css';
function HeaderNav() {
    return (
        <header className="header">
            <h1>Forms in React with libraries</h1>
            <nav>
                <NavLink to={''}
                    className={({ isActive }) => isActive ? 'active-link' : undefined}
                >Home</NavLink>
                <NavLink to={'forms/formik'}
                    className={({ isActive }) => isActive ? 'active-link' : undefined}

                >Formik</NavLink>
                <NavLink to={'forms/useform'}
                    className={({ isActive }) => isActive ? 'active-link' : undefined}

                >useForm</NavLink>
            </nav>

        </header>
    );
}
export default HeaderNav;