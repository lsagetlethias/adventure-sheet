import { FC } from 'react';
import cn from 'classnames';
import style from './Counter.module.scss';

export interface CounterProps {
    className: string;
    title: string;
    inline?: boolean;
}
export const Counter: FC<CounterProps> = ({ title, className, inline = false }) => {
    return (
        <div className={cn(className, style.counter, { [style.inline]: inline })}>
            <label htmlFor={className}>{title}</label>
            <div>
                <input name={className} className={style.current} type="number" min="0" step="1" placeholder="00" /> /
                <input className={style.total} type="number" min="0" step="1" placeholder="00" />
            </div>
        </div>
    );
};
