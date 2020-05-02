import { FC, useContext } from 'react';
import style from './player.module.scss';
import cn from 'classnames';
import { LocaleContext } from '../../lib/localeContext';
import { Counter } from '../utils/Counter';

// TODO: magic
const magicEnabled = true;
export const Bag: FC = () => {
    const t = useContext(LocaleContext);
    return (
        <div
            className={cn(style.bag, {
                [style['no-magic']]: !magicEnabled,
            })}
        >
            {magicEnabled && (
                <>
                    <Counter inline className={style.magic} title={t['player.magic']} />
                    <div className={style.spells}>{t['player.spells']}</div>
                </>
            )}
            <Counter inline className={style.gold} title={t['player.gold']} />
            <div className={style.items}>{t['player.items']}</div>
        </div>
    );
};
