import React, { useContext } from "react";
import { X } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastProviderContext } from "../ToastProvider/ToastProvider";

function Toast({ toastItem }) {
  const toast = useContext(ToastProviderContext);
  const { ICONS_BY_VARIANT, removeToast } = toast;

  const { id, message, variant } = toastItem;
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {message}
      </p>
      <button className={styles.closeButton}>
        <X
          size={24}
          onClick={() => removeToast(id)}
          aria-label="Dismiss message"
          aria-live="off"
        />
      </button>
    </div>
  );
}

export default Toast;
