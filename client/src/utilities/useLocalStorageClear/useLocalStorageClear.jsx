import {useEffect} from "react";

/**
 * Custom hook that clears local storage selected checks when the component mounts
 */
function useLocalStorageClear() {

    useEffect(() => {
        // Clear local storage on mount
        localStorage.removeItem('selectedChecks');

        // Clear local storage on unmount
        const clearLocalStorageUnmount = () => {
            localStorage.removeItem('selectedChecks');
        };

        // navigating away from page (e.g., refresh clears the local storage)
        window.addEventListener('beforeunload', clearLocalStorageUnmount);
        return () => {
            clearLocalStorageUnmount();
            window.removeEventListener('beforeunload', clearLocalStorageUnmount);
        };
    }, []);
}

export default useLocalStorageClear;