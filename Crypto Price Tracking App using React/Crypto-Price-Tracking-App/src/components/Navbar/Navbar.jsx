import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {
    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", Symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", Symbol: "€" });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", Symbol: "₹" });
                break;
            }
            default: {
                setCurrency({ name: "usd", Symbol: "$" });
                break;
            }
        }
    };

    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">Eur</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign up <img src={arrow_icon} alt="" /></button>
            </div>
        </div>
    );
};

export default Navbar;