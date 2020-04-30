import { FC } from 'react';
import style from './player.module.scss';

export const Bag: FC = () => (
    <div className={style.bag}>
        <div className="magic">Magic</div>
        <div className="gold">Gold</div>
        <div className="spells">Magic Spells</div>
        <div className="items">Items</div>
    </div>
);
