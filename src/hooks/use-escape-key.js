import React from 'react'

function useEscapeKey(callback) {
    React.useEffect(() => {
        function onEscapeHandler(event) {
            if (event.code === "Escape") {
                callback()
            }
        }

        window.addEventListener("keydown", onEscapeHandler)
        return () => window.removeEventListener("keydown", onEscapeHandler)
    }, [callback])
}

export default useEscapeKey
