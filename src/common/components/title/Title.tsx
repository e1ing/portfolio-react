import React, {FC} from 'react';
import style from './Title.module.css';

type PropsType = {
    text: string
}

export const Title: FC<PropsType> = ({text}) => {
    return (
        <div className={style.title}>
            <h4> {text}</h4>
        </div>
    )
}