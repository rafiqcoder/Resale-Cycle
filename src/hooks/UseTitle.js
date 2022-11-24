import { useEffect } from "react";

// Title Hook

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | ResaleCycle`;
    },[title]);
};

export default UseTitle;