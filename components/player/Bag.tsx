import { FC } from 'react';
import style from './player.module.scss';
import cn from 'classnames';

const magicEnabled = true;
export const Bag: FC = () => (
    <div
        className={cn(style.bag, {
            [style['no-magic']]: !magicEnabled,
        })}
    >
        {magicEnabled && (
            <>
                <div className={style.magic}>Magic</div>
                <div className={style.spells}>Magic Spells</div>
            </>
        )}
        <div className={style.gold}>Gold</div>
        <div className={style.items}>Items</div>
    </div>
);
