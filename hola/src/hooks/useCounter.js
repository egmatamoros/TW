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

    const increment1 = () => {
        setState1(state1 + 1)
    }

    const reset1 = () => {
        setState1(initState)
    }

    const decrement1 = () => {
        setState1(state1 - 1)
    }

    return {
        state1,
        increment1,
        decrement1,
        reset1
    };
}

export const useCounter3 = (initState = 5) => {
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

export const useCounter4 = (initState = 8) => {
    const [state4, setState4] = useState(initState);

    const increment4 = () => {
        setState4(state4 + 1)
    }

    const reset4 = () => {
        setState4(initState)
    }

    const decrement4 = () => {
        setState4(state4 - 1)
    }

    return {
        state4,
        increment4,
        decrement4,
        reset4
    };
}

export const useCounter5 = (initState = 8) => {
    const [state5, setState5] = useState(initState);

    const increment5 = () => {
        setState5(state5 + 1)
    }

    const reset5 = () => {
        setState5(initState)
    }

    const decrement5 = () => {
        setState5(state5 - 1)
    }

    return {
        state5,
        increment5,
        decrement5,
        reset5
    };
}
export const useCounter6 = (initState = 8) => {
    const [state6, setState6] = useState(initState);

    const increment6 = () => {
        setState6(state6 + 1)
    }

    const reset6 = () => {
        setState6(initState)
    }

    const decrement6 = () => {
        setState6(state6 - 1)
    }

    return {
        state6,
        increment6,
        decrement6,
        reset6
    };
}