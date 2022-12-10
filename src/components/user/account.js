import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { modifUser, recupUser } from "../../API/api"
import { addFirstName, addLastName, changerName } from "../../redux/redux"


export function Account() {
    const { token, firstName, lastName, changeName, } = useSelector((state) => state)
    const [firstNamer, setFirstName] = useState(firstName)
    const [lastNamer, setLastName] = useState(lastName)

    useEffect(() => {
        setFirstName(firstName)
        setLastName(lastName)
    },[firstName, lastName])

    const dispatch = useDispatch()
    function nameUser(e) {
        recupUser(token)
        .then(data2 => dispatch(changerName(changeName+1)))
    }
    function validNewName(e)
    {
            modifUser(token, firstNamer, lastNamer)
            .then(data=>dispatch(addFirstName(data.firstName)) && dispatch(addLastName(data.lastName))&& dispatch(changerName(changeName-1)))
    }
    function cancelName(e)
    {
        recupUser(token)
        .then(data=>dispatch(changerName(changeName-1)))
    }
    return (
        <>
            <main className="main bg-dark">
                <div className="header" >
                <h1>Welcome back</h1>
                
                    {
                    (changeName <1 )? 
                        <>
                            <h1>{firstName} {lastName}!</h1>
                            <button className="edit-button" onClick={nameUser}>Edit Name</button>
                        </>:<>
                        <div className="input-wrapperName">
                            <div className="input-margin">
                                <label htmlFor=""></label>
                                <input type="text" id=""  onChange={(e) => setFirstName(e.target.value)} value={firstNamer}/>
                            </div>
                            <div className="input-margin">
                                <label htmlFor=""></label>
                                <input type="text" id=""  onChange={(e) => setLastName(e.target.value)} value={lastNamer}></input>
                            </div>
                        </div>
                        <div className="input-wrapperName">
                            <div className="button-margin">
                                <button className="sizeButton" onClick={validNewName}>Save</button>
                            </div>
                            <div className="button-margin">
                                <button className="sizeButton"onClick={cancelName}>Cancel</button>
                            </div>
                        </div>
                        </>
                    }
                    
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </>
    )
}