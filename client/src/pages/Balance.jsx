import React, { useState, useEffect } from 'react';
import { axiosPrivateInstance } from "../api/apiConfig";
import axios from 'axios';

const Balance = ({ address }) => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axiosPrivateInstance.get(`/auth/balance/${address}/`);
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };
        fetchBalance();
    }, [address]);

    return (
        <div>
            <h2>Wallet Balance</h2>
            {balance !== null ? <p>{balance} ETH</p> : <p>Loading...</p>}
        </div>
    );
};

export default Balance;
