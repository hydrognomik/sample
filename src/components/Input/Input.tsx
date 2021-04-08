import { h } from 'preact';
import type { StateUpdater } from 'preact/hooks';

import * as styles from './styles.scss';

type Props = {
    value: string;
    onChange: StateUpdater<string>;
    type: string;
    placeholder: string;
};

export const Input = (props: Props) => {
    const { onChange, ...rest } = props;

    const handleChange = (e: h.JSX.TargetedEvent<HTMLInputElement>) => {
        onChange((e.target as HTMLInputElement).value);
    };

    return (
        <div className={styles.root}>
            <input {...rest} className={styles.input} onChange={handleChange} />
        </div>
    );
};
