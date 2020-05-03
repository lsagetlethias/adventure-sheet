import { FC } from 'react';
import { Monster } from './Monster';
import style from './monster.module.scss';

const monsters = Array<string>(30).fill('Monster');
export const MonsterList: FC = () => (
    <div className={style['monster-list']}>
        <div className={style['monster-item']}>+</div>
        {monsters.map((m, idx) => (
            <Monster key={idx} name={`eeezalekleakzlekazlen°${idx}`} />
        ))}
    </div>
);
