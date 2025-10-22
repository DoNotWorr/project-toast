import React from 'react'

function useEscapeKey(handle) {
    React.useEffect(() => {
        function onEscapeHandler(event) {
            if (event.code === "Escape") {
                handle()
            }
        }

        window.addEventListener("keydown", onEscapeHandler)
        return () => window.removeEventListener("keydown", onEscapeHandler)
    }, [handle])
}

export default useEscapeKey
