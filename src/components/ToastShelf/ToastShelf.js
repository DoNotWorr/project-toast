import React from 'react';
import styles from './ToastShelf.module.css';
import Toast from "../Toast";
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
    const {toasts, removeToast} = React.useContext(ToastContext)

    return (
        <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
            {toasts.map(({id, message, variant}) => {
                const removeCurrentToast = () => removeToast(id)
                return (
                    <li key={id} className={styles.toastWrapper}>
                        <Toast id={id} variant={variant} onClose={removeCurrentToast}>{message}</Toast>
                    </li>
                )
            })}
        </ol>
    );
}

export default ToastShelf;
