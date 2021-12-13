import React, { ReactElement, useState } from "react";
import YouTubePng from '../assets/youtube1.png';
import TestSvg from '../assets/svg/youtube2.svg';
import css from './styles.module.css';


export const TestComponent = (): ReactElement => {
    const [state, setState] = useState(0)

    return (
        <div>
            <img src={YouTubePng} alt="#" />
            <TestSvg />
            <h2 className={css.Title}>{state}</h2>
            <button onClick={() => setState((prev) => prev + 1)}>Add count</button>
        </div>
    )
}
