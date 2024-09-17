import { NavLink } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useState } from "react";

export default function Navigation() {
   const[IsLoggedIn,SetisLoggedIn]= useState<boolean>(false)
   if (IsLoggedIn===false) {
    SetisLoggedIn(true)
   }
//   const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink className={({ isActive }) => {
        return clsx(css.link, isActive && css.isActive);
          }} to="/">
                Home
            </NavLink>
            {IsLoggedIn && (
                <NavLink className={({ isActive }) => {
        return clsx(css.link, isActive && css.isActive);
          }} to="/idea">
                    Contacts 
                </NavLink>
            )}
        </nav>
    )
}