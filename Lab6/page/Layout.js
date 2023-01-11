import { NavLink, Outlet } from "react-router-dom";

import Card from "../UI/Card";
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <Card>
            <header className={styles.item}>
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/category">Category</NavLink>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </Card>
    );
};