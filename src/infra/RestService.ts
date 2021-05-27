import axios from 'axios';

const conectionData = 'http://localhost:8080/api/eth';

const obtainBalance = async (account: string) => {
    return await axios.get(`${conectionData}/balance`,
       {
            headers: {
                'Content-Type': 'application/json'
                },
            data: {},
            params: {
                account: account
            }
        }) 
}

const sendEth = async (account: string, amount: number) => {
    await axios.post(`${conectionData}/send`, JSON.stringify({ receiverWallet: account,
        amount: amount}),
        {
            headers: {
              'Content-Type': 'application/json'
            }
        });
}

export {obtainBalance,  sendEth};
