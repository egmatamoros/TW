import {useState} from 'react';

export const useCounter = (initState = 3) => {
    const [state, setState] = useState(initState);

    const increment = () => {
        setState(state + 1)
    }

    const reset = () => {
        setState(initState)
    }

    const decrement = () => {
        setState(state - 1)
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
}

export const useCounter1 = (initState = 2) => {
    const [state1, setState1] = useState(initState);

    const increment1 = (factor = 1) => {
        setState1(state1 + factor)
    }

    const reset1 = () => {
        setState1(initState)
    }

    const decrement1 = (factor = 1) => {
        setState1(state1 - factor)
    }

    return {
        state1,
        increment1,
        decrement1,
        reset1
    };
}

export const useCounter3 = (initState = 3) => {
    const [state3, setState3] = useState(initState);

    const increment3 = () => {
        setState3(state3 + 1)
    }

    const reset3 = () => {
        setState3(initState)
    }

    const decrement3 = () => {
        setState3(state3 - 1)
    }

    return {
        state3,
        increment3,
        decrement3,
        reset3
    };
}

export const useCounter4 = (initState = 2) => {
    const [state4, setState4] = useState(initState);

    const increment4 = (factor = 1) => {
        setState4(state4 + factor)
    }

    const reset4 = () => {
        setState4(initState)
    }

    const decrement4 = (factor = 1) => {
        setState4(state4 - factor)
    }

    return {
        state4,
        increment4,
        decrement4,
        reset4
    };
}