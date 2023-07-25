import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    
    const { budget, dispatch } = useContext(AppContext);
    const [b, setB] = useState(budget);
    
    useEffect(() => {
        dispatch({
            type: 'SET_BUDGET',
            payload: b
        })
    }, [b,dispatch]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type='number'  step='10' max='20000' onChange={(event) => {
            setB(oldB => event.target.value);
            }} value={b} /></span>
        </div>
    );
};
export default Budget;
