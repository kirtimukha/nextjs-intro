import Link from "next/link";
import { useReducer } from "next/router";
export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    );

}