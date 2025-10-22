import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = React.useState("")
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
    const [isToastVisible, setIsToastVisible] = React.useState(false)

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

    function onMessageChange(event) {
        setMessage(event.target.value)
    }

    function onVariantChange(event) {
        setVariant(event.target.value)
    }

    function closeToast() {
        setIsToastVisible(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addToast(message, variant)
    }


    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>
            {isToastVisible && <Toast message={message} variant={variant} handleClose={closeToast}/>}
            <ToastShelf toasts={toasts} removeToast={removeToast}/>
            <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea id="message" className={styles.messageInput} value={message}
                                  onChange={onMessageChange}/>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map(option => {
                            const id = `variant-${option}`
                            return (
                                <label htmlFor={id} key={option}>
                                    <input
                                        id={id}
                                        type="radio"
                                        name="variant"
                                        value={option}
                                        checked={option === variant}
                                        onChange={onVariantChange}
                                    />
                                    {option}
                                </label>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}/>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button type="submit">Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
