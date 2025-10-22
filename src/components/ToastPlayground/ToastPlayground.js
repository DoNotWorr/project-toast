import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const initialMessage = ""
const initialVariant = VARIANT_OPTIONS[0]

function ToastPlayground() {
    const [message, setMessage] = React.useState(initialMessage)
    const [variant, setVariant] = React.useState(initialVariant)

    const {addToast} = React.useContext(ToastContext)

    function onMessageChange(event) {
        setMessage(event.target.value)
    }

    function onVariantChange(event) {
        setVariant(event.target.value)
    }

    function resetForm() {
        setMessage(initialMessage)
        setVariant(initialVariant)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addToast(message, variant)
        resetForm()
    }


    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>
            <ToastShelf/>
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
