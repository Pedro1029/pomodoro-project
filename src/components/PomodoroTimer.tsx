import React, { useState } from "react"
import { useInterval } from "../hooks/useInterval";

interface PropsPomodoroTimer {
    defaultPomodoroTimer: number,
}

export function PomodoroTimer(props: PropsPomodoroTimer): JSX.Element {

    const [mainTime, setMainTime] = useState<number>(props.defaultPomodoroTimer);

    useInterval(() => {
        setMainTime(mainTime + 1)
    }, 1000)

    return (
        <>
            <main>

            </main>
        </>
    )
}