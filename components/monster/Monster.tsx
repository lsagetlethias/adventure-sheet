import { FC, useContext } from 'react';
import style from './monster.module.scss';
import { LocaleContext } from '../../lib/localeContext';

interface MonsterProps {
    name: string;
}

export const Monster: FC<MonsterProps> = ({ name }) => {
    const t = useContext(LocaleContext);
    return (
        <div className={style['monster-item']}>
            {t['monster.name']} {name}
            <br />
            <span className={style.skill}>{t['monster.skill']}=10</span>
            <span className={style.stamina}>{t['monster.stamina']}=10</span>
        </div>
    );
};
