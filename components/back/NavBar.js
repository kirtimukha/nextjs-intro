import Link from "next/link";
import {useReducer, useRouter} from "next/router";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a className = {  `${styles.link} ${router.pathname === '/'? styles.active: "" }` }>Home</a>
            </Link>
            <Link href="/about">
                <a className = {[styles.link, router.pathname === '/about'? styles.active: ""].join(" ") }>About</a>
            </Link>
        </nav>
    );

}