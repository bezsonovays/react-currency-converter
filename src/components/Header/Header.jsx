import  './Header.css';
import PostService from "../../API/PostService";
import React, { useEffect, useState} from "react";

function Header () {
    const [currency, setСurrency] = useState([]);

    useEffect(() => {
        const result = PostService.getСurrency().then(({data}) => {
            setСurrency(data)});
        }, []);

    return (
        <div className="header">
            <div className="container">
                <ul className="header__list">
                    {currency.map(({ccy, buy, sale}) => ccy !== 'BTC' && <li key={ccy}><strong>{ccy}</strong> {buy} / {sale} </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Header;