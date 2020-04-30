import { FC } from 'react';
import style from './monster.module.scss';

interface MonsterProps {
    name: string;
}

export const Monster: FC<MonsterProps> = ({ name }) => (
    <div className={style.monsterItem}>
        {name}
        <span className="skill">Skill=10</span>
        <span className="stamina">Stamina=10</span>
    </div>
);
