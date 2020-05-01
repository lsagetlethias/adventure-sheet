import { FC, useContext } from 'react';
import styles from './Board.module.scss';
import { Player } from './player/Player';
import { MonsterList } from './monster/MonsterList';
import { LocaleContext } from '../lib/localeContext';

export const Board: FC = () => {
    const t = useContext(LocaleContext);
    return (
        <div className={styles.container}>
            <header>{t.adventureSheet}</header>
            <main>
                <Player />
                <MonsterList />
            </main>
        </div>
    );
};
