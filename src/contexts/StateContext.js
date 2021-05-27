import {useMemo, useState, useContext, createContext} from 'react';

const StateContext = createContext();

export const StateProvider = (props) => {
    const [stateChange, setStateChange] = useState(true);

    const changeState = () => {
        if(stateChange) {
            setStateChange(false);
        }
        else {
            setStateChange(true);
        }
    }

    const value = useMemo(() => {
        return({
            stateChange,
            changeState,
        })
    },[stateChange]);

    return <StateContext.Provider value={value} {...props}/>
}

export function useStateChange() {
    const context = useContext(StateContext);

    if(!context) {
        throw new Error('useStateChange has to be inside StateContext provider');
    }

    return context;
}
