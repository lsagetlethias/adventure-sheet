import { FC, useContext } from 'react';
import style from './player.module.scss';
import cn from 'classnames';
import { LocaleContext } from '../../lib/localeContext';

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
                    <div className={style.magic}>{t['player.magic']}</div>
                    <div className={style.spells}>{t['player.spells']}</div>
                </>
            )}
            <div className={style.gold}>{t['player.gold']}</div>
            <div className={style.items}>{t['player.items']}</div>
        </div>
    );
};
