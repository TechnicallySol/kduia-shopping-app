import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    const {Location, dispatch, CartValue} = useContext(AppContext);
  
    const [quantity, setQuantity] = useState('');
    
    const submitEvent = () => {
       const item = {
        quantity: parseInt(quantity),
        };
        dispatch({
            type: 'MAX_BUDGET',
            payload: item,
        });
        if(quantity > 20000){
            alert("Too expensive!!");

        } 
    }

    const exceededLimit = () => {
        if(CartValue > quantity) {
            alert("no money, mo problems");
        } 

    }
    return (
        <><div className='alert alert-third'>
            <span>Budget: {Location} </span>
            <input
                required='required'
                type='number'
                id='budget'
                value={quantity}
                style={{ size: 5 }}
                onChange={(event) => setQuantity(event.target.value)}>
            </input>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
        </div><div>
                <button onClick={exceededLimit()}>Price Checker</button>
            </div></>
            
        
    );
};
export default Budget;