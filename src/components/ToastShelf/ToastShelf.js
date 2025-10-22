import React from 'react';
import styles from './ToastShelf.module.css';
import Toast from "../Toast";

function ToastShelf({toasts, removeToast}) {
    return (
        <ol className={styles.wrapper}>
            {toasts.map(({id, message, variant}) => {
                const removeCurrentToast = () => removeToast(id)
                return (
                    <li key={id} className={styles.toastWrapper}>
                        <Toast id={id} message={message} variant={variant} onClose={removeCurrentToast} />
                    </li>
                )
            })}
        </ol>
    );
}

export default ToastShelf;
