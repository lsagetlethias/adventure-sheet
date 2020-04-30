import { FC } from 'react';
import styles from './Board.module.scss';
import { Player } from './player/Player';
import { MonsterList } from './monster/MonsterList';

export const Board: FC = () => (
    <div className={styles.container}>
        <span>Adventure Sheet</span>

        <Player />
        <MonsterList />
    </div>
);
