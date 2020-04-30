import { FC } from 'react';
import { Bag } from './Bag';
import { Stats } from './Stats';
import style from './player.module.scss';

export const Player: FC = () => (
    <div className={style.player}>
        <Stats />
        <Bag />
    </div>
);
