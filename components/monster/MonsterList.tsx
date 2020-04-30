import { FC } from 'react';
import { Monster } from './Monster';
import style from './monster.module.scss';

const monsters = ['Orc', 'Gobelin', 'Orc2', 'Kimera'];
export const MonsterList: FC = () => (
    <div className={style.monsterList}>
        {monsters.map((m, idx) => (
            <Monster key={idx} name={m} />
        ))}
    </div>
);
