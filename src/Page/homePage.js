import { NavBar } from "../components/header/navBar";
import { Hero } from "../components/Index/hero";
import { Footer } from "../components/footer/footer";

export function HomePage() {
    return (
        <>
            <NavBar></NavBar>
            <Hero></Hero>
            <Footer></Footer>
        </>
    )
}