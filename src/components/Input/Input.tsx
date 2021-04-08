import { h } from 'preact';
import type { StateUpdater } from 'preact/hooks';

import styles from './styles.scss';

type Props = {
    value: string;
    onChange: StateUpdater<string>;
    type: string;
    placeholder: string;
};

export const Input = (props: Props) => {
    const { onChange, ...rest } = props;

    const handleChange = e => {
        const target = e.target as HTMLInputElement;

        onChange(e.target.value);
    };

    return (
        <div className={styles.root}>
            <input {...rest} className={styles.input} onChange={handleChange} />
        </div>
    );
};
