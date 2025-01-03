import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = useState([]);

  const popToast = (event) => {
    console.log("pop toast");
    event.preventDefault();
    addToList();
    resetForm();
  };

  const resetForm = () => {
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const addToList = () => {
    console.log("add to list");
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };
    // push new element on
    const tempList = [...toastList, newToast];
    setToastList(tempList);
  };

  const removeFromList = (removeId) => {
    const nextToasts = toastList.filter((toast) => toast.id != removeId);
    setToastList(nextToasts);
  };

  return (
    <form className={styles.wrapper} onSubmit={popToast}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        toastList={toastList}
        removeToast={removeFromList}
      ></ToastShelf>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="current-variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => {
                    setVariant(event.target.value); // or option
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
