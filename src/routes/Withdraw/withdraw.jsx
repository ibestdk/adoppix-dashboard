import { useEffect, useState } from "react"
import { getWithdrawRequests } from "../../services/withdraw.service"
export const Withdraw = () => {
    const [requests, setRequests] = useState([]);

    const fetchRequest = async () => {
        const requests = await getWithdrawRequests();
        console.log(requests);
    }

    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <div>
            <p>Withdraw it work !</p>
        </div>
    )
}