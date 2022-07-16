import React from "react";
import  './СurrencyInput.css';
import PropTypes from 'prop-types'; 


const СurrencyInput = ({currencies, currency, amount, onAmountChange, onCurrencyChange}) => {

  return (
    <div className='input'>
        <input type="number"
          className='input__number'
          value={amount}
          onChange={({target}) => onAmountChange(target.value)}/>
          <select className='input__select'
            value={currency}
            onChange={({target}) => onCurrencyChange(target.value)}
            >
              {currencies.map(item => item && <option key={item} value={item}>{item}</option>)}
        </select>  
    </div>
  )
}

СurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
}

export default СurrencyInput;