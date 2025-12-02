import React from 'react'
import "./notification.css"

const icons = {
    info: "ℹ️",
    error: "❌",
    success: "✔️",
    warning: "⚠️"
}

const Notification = ({ type, message, onClose }) => {
    return (
        <div className={`notification ${type}`}>
            <div className="notification-icon">{icons[type]}</div>
            <div className="notification-message">{message}</div>
            <button className="notification-close" onClick={onClose}>✕</button>
        </div>
    )
}

export default Notification