import { useState, useEffect } from 'react';


function useForm(callback, current){
    const [inputs, setInputs] = useState(current);
    
    const handleInputChange = event => {
        event.persiste();
        const {name, value} = event.target;
        setInputs(fields => ({...fields, [name]:value}));
    };

    const handleSubmit = event => {
        if(event) event.preventDefault();
        callback(inputs);
    };

    return {
        inputs,
        handleInputChange,
        handleSubmit
    }
};

export default useForm;