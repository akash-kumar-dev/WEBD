import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

// useIsOnline hook
// Window.navigator.onLine returns true or false based on whether the user is online or offline

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => {
        setIsOnline(true);
    })

    window.addEventListener('offline', () => {
        setIsOnline(false);
    })
  }, [])

  return isOnline;
}

const _4_useIsOnline_hook = () => {
    const isOnline = useIsOnline();

    if (isOnline) {
        return (
            <div>
                <h1>You are online</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>You are offline</h1>
        </div>
    )
}


export default _4_useIsOnline_hook
