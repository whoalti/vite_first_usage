import { useState, useEffect } from "react";

function Clock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);
    // console.log(time);
    return (
        <div className="clock">
            <p>{time.toTimeString()}</p>
        </div>
    )
}

export default Clock;