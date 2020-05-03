import { FC, useContext } from 'react';
import style from './Board.module.scss';
import { Player } from './player/Player';
import { MonsterList } from './monster/MonsterList';
import { LocaleContext } from '../lib/localeContext';
import cn from 'classnames';

interface BoardProps {
    darkMode?: boolean;
}
export const Board: FC<BoardProps> = ({ darkMode = false }) => {
    const t = useContext(LocaleContext);
    return (
        <div className={cn(style.container, { [style['dark-mode']]: darkMode })}>
            <header>{t.adventureSheet}</header>
            <main>
                <Player />
                <MonsterList />
            </main>
        </div>
    );
};
