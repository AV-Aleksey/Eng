import React, { useState } from "react";
import css from './styles.module.css';

export const TestComponent = () => {
    const [state, setState] = useState(0)

    return (
        <div>
            <h2 className={css.Title}>{state}</h2>
            <button onClick={() => setState((prev) => prev + 1)}>Add count</button>
        </div>
    )
}
