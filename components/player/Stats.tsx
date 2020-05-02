import { FC, useContext } from 'react';
import style from './player.module.scss';
import { LocaleContext } from '../../lib/localeContext';
import { Counter } from '../utils/Counter';

export const Stats: FC = () => {
    const t = useContext(LocaleContext);
    return (
        <div className={style.stats}>
            <Counter className={style.skill} title={t['player.skill']} />
            <Counter className={style.stamina} title={t['player.stamina']} />
            <Counter className={style.luck} title={t['player.luck']} />
        </div>
    );
};
