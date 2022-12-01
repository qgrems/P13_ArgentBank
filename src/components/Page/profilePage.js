import { Footer } from "../footer/footer";
import { Account } from "../user/account";
import { HeaderUser } from "../user/header";

export function ProfilePage() {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Account></Account>
            <Footer></Footer>
        </>
    )
}