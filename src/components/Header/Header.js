import { useEffect, useState, useContext } from "react";
import { useStateChange } from "../../contexts/StateContext";
import { obtainBalance } from "../../infra/RestService";

const Header = () => {

    const {stateChange, changeState} = useStateChange();
    const account = '0x605C19673474283b9696579e80F1476103071A9F';
    const [balance, setBalance] = useState(0);

   useEffect(() => {
    if(stateChange) {
        (async () => {
            const response = await obtainBalance(account);
            changeState();
            setBalance(response.data.balance);
        })();
    }
    }, [stateChange]);

    return(
        <>
            <header className="user info">
                <p>{account}</p>
                <p>{balance}</p>
            </header>
        </>
    )
}

export default Header;