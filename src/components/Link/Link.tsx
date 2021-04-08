import { h } from 'preact';
import type { ComponentChildren } from 'preact';

import * as styles from './styles.scss';

type Props = {
    children: ComponentChildren;
    onClick?: () => void;
    to?: string;
};

export const Link = (props: Props) => {
    const { children, to = '#', onClick } = props;

    return (
        <a className={styles.link} href={to} onClick={onClick}>
            {children}
        </a>
    );
};
