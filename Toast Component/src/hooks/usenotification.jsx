import { useState, useRef } from "react"
import Notification from "../components/notification"

const useNotification = (position = 'top-right') => {
    const [notification, setNotification] = useState(null)
    const timeoutRef = useRef(null)

    const triggerNotification = (notificationProps) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        setNotification(notificationProps)
        
        // Set new timeout
        timeoutRef.current = setTimeout(() => {
            setNotification(null)
            timeoutRef.current = null
        }, notificationProps.duration)
    }

    const closeNotification = () => {
        // Clear the timeout when manually closed
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setNotification(null)
    }

    const NotificationComponent = notification ? (
        <div className={`notification-container ${position}`}>
            <Notification {...notification} onClose={closeNotification} />
        </div>
    ) : null

    return { NotificationComponent, triggerNotification }
}

export default useNotification