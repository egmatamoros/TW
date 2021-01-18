import {useState} from 'react'


export const useForm = (initState = {})=> {
    const [values, setValues] = useState(initState);

    const reset = () =>{
        setValues(initState)
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange,reset]

}

export const useForm1 = (initState = {})=> {
    const [values1, setValues1] = useState(initState);

    const reset1 = () =>{
        setValues1(initState)
    }

    const handleInputChange1 = ({target}) => {
        setValues1({
            ...values1,
            [target.name]: target.value
        })
    }

    return [values1, handleInputChange1,reset1]

}

