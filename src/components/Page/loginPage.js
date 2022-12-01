import { Footer } from "../footer/footer";
import { NavBar } from "../header/navBar";
import { Login } from "../../Signin/main";

export function LoginPage() {
    return (
        <>
            <NavBar></NavBar>
            <Login></Login>
            <Footer></Footer>
        </>
    )
}