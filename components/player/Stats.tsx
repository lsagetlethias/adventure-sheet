import { FC } from 'react';
import style from './player.module.scss';

export const Stats: FC = () => (
    <div className={style.stats}>
        <div>Skill</div>
        <div>Stamina</div>
        <div>Luck</div>
    </div>
);
