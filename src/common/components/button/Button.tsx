import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import style from "../button/Button.module.scss"

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const Button: FC<ButtonPropsType> = ({className, ...restProps}) => {
    return (
        <button className={style.button}  {...restProps} />
    )
}