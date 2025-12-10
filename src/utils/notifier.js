// src/utils/notifier.js
let showNotification = () => {
    console.warn("Notification system not initialized yet");
};

export const setNotificationHandler = (fn) => {
    showNotification = fn;
};

export const notify = (...args) => {
    showNotification(...args);
};
