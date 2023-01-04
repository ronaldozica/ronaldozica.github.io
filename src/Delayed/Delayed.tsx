import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function FakeSuspense(props: any) {
    const { children, delay } = props;
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true);
        }, delay);
    }, [delay]);

    return isShown ? children : <LoadingSpinner/>;
}