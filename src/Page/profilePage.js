import { Footer } from "../components/footer/footer";
import { Account } from "../components/user/account";
import { HeaderUser } from "../components/user/header";

export function ProfilePage() {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Account></Account>
            <Footer></Footer>
        </>
    )
}