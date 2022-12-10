import { Footer } from "../components/footer/footer";
import { NavBar } from "../components/header/navBar";
import { Login } from "../components/Signin/main";

export function LoginPage() {
    return (
        <>
            <NavBar></NavBar>
            <Login></Login>
            <Footer></Footer>
        </>
    )
}