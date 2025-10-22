import React from 'react';
import useEscapeKey from "../../hooks";

export const ToastContext = React.createContext({toasts: []})

function ToastProvider({children}) {
    const [toasts, setToasts] = React.useState([])

    function addToast(message, variant) {
        const id = crypto.randomUUID()
        setToasts(current => {
            return [...current, {id, message, variant}]
        })
    }

    function removeToast(targetId) {
        setToasts(current => {
            return current.filter(({id}) => id !== targetId)
        })
    }

    function removeAll() {
        setToasts([])
    }

    useEscapeKey(removeAll)

    return <ToastContext.Provider value={{toasts, addToast, removeToast}}>
        {children}
    </ToastContext.Provider>;
}

export default ToastProvider;
