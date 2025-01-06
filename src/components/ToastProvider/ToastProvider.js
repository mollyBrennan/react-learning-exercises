import React, { createContext, useState, useCallback } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import useKeyDown from "../../hooks/useKeyDown.js";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

export const ToastProviderContext = createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = useState([]);

  const addToast = () => {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };
    // push new element on
    const tempList = [...toastList, newToast];
    setToastList(tempList);
  };

  const removeToast = (removeId) => {
    const nextToasts = toastList.filter((toast) => toast.id != removeId);
    setToastList(nextToasts);
  };

  const resetToastForm = () => {
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const handleEscape = useCallback(() => {
    setToastList([]);
  }, []);
  useKeyDown("Escape", handleEscape);

  toastProvider = {
    message,
    setMessage,
    VARIANT_OPTIONS,
    ICONS_BY_VARIANT,
    variant,
    setVariant,
    removeToast,
    toastList,
    setToastList,
    addToast,
    resetToastForm,
  };

  return (
    <ToastProviderContext value={toastProvider}>
      {children}
    </ToastProviderContext>
  );
}

export default ToastProvider;
