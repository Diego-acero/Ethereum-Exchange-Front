import { useState} from "react"
import { sendEth } from "../../infra/RestService";
import { useStateChange } from "../../contexts/StateContext";

const EthSender = () => {

    const {changeState} = useStateChange();
    const [data, setData] = useState({
        account:'',
        amount: 0
    });

    const handleInputChange = (event) => {
        setData({
            ...data, 
            [event.target.name] : event.target.value
        });
    }

    const send = async (event) => {

        event.preventDefault();
        await sendEth(data.account, data.amount);
        changeState();
    }

    return(
        <>
           <form className="row" onSubmit={send}>
                <div className="col-md-3">
                    <input type="text" placeholder="Account" className="form-control" onChange={handleInputChange} name="account"></input>
                </div>
                <div className="col-md-3">
                    <input type="number" placeholder="ETH" className="form-control" onChange={handleInputChange} name="amount"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default EthSender