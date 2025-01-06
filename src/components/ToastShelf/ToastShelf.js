import React, { useState, memo, useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProviderContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const toast = useContext(ToastProviderContext);
  const { toastList } = toast;

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map((toastItem) => {
        return (
          <li key={toastItem.id} className={styles.toastWrapper}>
            <Toast toastItem={toastItem}></Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default memo(ToastShelf);
