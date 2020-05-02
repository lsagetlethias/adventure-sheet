import { FC, useContext } from 'react';
import style from './monster.module.scss';
import { LocaleContext } from '../../lib/localeContext';

interface MonsterProps {
    name: string;
}

export const Monster: FC<MonsterProps> = ({ name }) => {
    const t = useContext(LocaleContext);
    return (
        <div className={style.monsterItem}>
            {name}
            <br />
            <span className={style.skill}>Skill=10</span>
            <span className={style.stamina}>Stamina=10</span>
        </div>
    );
};
