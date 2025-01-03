import React, { useState, memo } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toastItem) => {
        return (
          <li key={toastItem.id} className={styles.toastWrapper}>
            <Toast
              id={toastItem.id}
              variant={toastItem.variant}
              removeToast={removeToast}
            >
              {toastItem.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default memo(ToastShelf);
