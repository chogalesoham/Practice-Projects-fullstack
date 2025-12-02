import React from 'react'
import './App.css'
import useNotification from './hooks/usenotification'

const App = () => {

  const { NotificationComponent, triggerNotification } = useNotification('bottom-left')
  
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">🔔 Toast Notification Demo</h1>
        <p className="app-subtitle">Click any button below to see animated toast notifications</p>
        
        <div className="button-grid">
          <button 
            className="btn btn-success"
            onClick={() =>
              triggerNotification({
                type: 'success',
                message: 'Operation completed successfully!',
                duration: 3000
              })
            }
          >
            <span className="btn-icon">✓</span>
            Success
          </button>

          <button 
            className="btn btn-error"
            onClick={() =>
              triggerNotification({
                type: 'error',
                message: 'Something went wrong!',
                duration: 3000
              })
            }
          >
            <span className="btn-icon">✕</span>
            Error
          </button>

          <button 
            className="btn btn-info"
            onClick={() =>
              triggerNotification({
                type: 'info',
                message: 'Here is some useful information!',
                duration: 3000
              })
            }
          >
            <span className="btn-icon">ℹ</span>
            Info
          </button>

          <button 
            className="btn btn-warning"
            onClick={() =>
              triggerNotification({
                type: 'warning',
                message: 'Please be careful with this action!',
                duration: 3000
              })
            }
          >
            <span className="btn-icon">⚠</span>
            Warning
          </button>
        </div>
      </div>

      {NotificationComponent}
    </div>
  )
}

export default App