import React, {useState, useEffect} from 'react';
import PostService from "../../API/PostService";
import СurrencyInput from '../СurrencyInput/СurrencyInput';
import  './Inputs.css';

const Inputs = () => {
   const [amount1, setAmount1] = useState (1);
   const [amount2, setAmount2] = useState (1);
   const [currency1, setCurrency1] = useState ('USD');
   const [currency2, setCurrency2] = useState ('UAH');
   const [rates, setRates] = useState({'UAH': 1})

  const createCurrencуObj = (data) => {
        let obj = {}
        data.map(({ccy, sale}) => ccy !== "BTC" && (obj =  {...obj, ...rates, [ccy]: +sale}))
        return obj;
    }
        
    useEffect(() => {
         PostService.getСurrency().then(({data}) => {     
            let obj =  createCurrencуObj(data);
            setRates(obj);
             })
         }, []);

    useEffect(() => {
             handleAmoumt1Change(1)
         }, [rates])
   
  const format = (number) => Math.round(parseFloat(number) * 100) / 100;
  
  const handleAmoumt1Change = (amount1) => {
    setAmount2(format(amount1 * rates[currency1] / rates[currency2]))
    setAmount1(amount1)
   }
  
  const handleCurrency1Change = (currency1) => {
      setAmount2(format(amount1 * rates[currency1] / rates[currency2]))
      setCurrency1(currency1)
   }
   
  const handleAmoumt2Change = (amount2) => {
    setAmount1(format(amount2 * rates[currency2] / rates[currency1]))
    setAmount2(amount2)
   }

  const handleCurrency2Change = (currency2) => {
    setAmount2(format(amount1 * rates[currency1] / rates[currency2]))
    setCurrency2(currency2)
    }
    
  return (
      <div className='container'>
        <div className="inputs">
                <СurrencyInput
                     currency={currency1}
                     amount={amount1}
                     currencies={Object.keys(rates)}
                     onAmountChange={handleAmoumt1Change}
                     onCurrencyChange={handleCurrency1Change}
                     />
                <СurrencyInput
                      currency={currency2}
                      amount={amount2}
                      currencies={Object.keys(rates)}
                      onAmountChange={handleAmoumt2Change}
                      onCurrencyChange={handleCurrency2Change}/>
        </div>
      </div>   
  )
}

export default Inputs;