import { h } from 'preact';
import type { ComponentChildren } from 'preact';

import * as styles from './styles.scss';

type Props = { children: ComponentChildren };

export const Button = (props: Props) => {
    const { children } = props;

    return <button className={styles.button}>{children}</button>;
};
