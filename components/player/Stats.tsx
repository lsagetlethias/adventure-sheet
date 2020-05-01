import { FC, useContext } from 'react';
import style from './player.module.scss';
import { LocaleContext } from '../../lib/localeContext';

export const Stats: FC = () => {
    const t = useContext(LocaleContext);
    return (
        <div className={style.stats}>
            <div>{t['player.skill']}</div>
            <div>{t['player.stamina']}</div>
            <div>{t['player.luck']}</div>
        </div>
    );
};
