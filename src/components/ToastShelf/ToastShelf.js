import React from 'react';
import styles from './ToastShelf.module.css';
import Toast from "../Toast";
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const {toasts, removeToast, removeAll} = React.useContext(ToastContext)

    React.useEffect(() => {
        function removeAllOnEscape(event) {
            if (event.code === "Escape") {
                removeAll()
            }
        }

        addEventListener("keydown", removeAllOnEscape)
        return () => removeEventListener("keydown", removeAllOnEscape)
    }, [removeAll])

    return (
        <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
            {toasts.map(({id, message, variant}) => {
                const removeCurrentToast = () => removeToast(id)
                return (
                    <li key={id} className={styles.toastWrapper}>
                        <Toast id={id} message={message} variant={variant} onClose={removeCurrentToast}/>
                    </li>
                )
            })}
        </ol>
    );
}

export default ToastShelf;
