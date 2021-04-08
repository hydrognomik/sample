import { h } from 'preact';
import type { StateUpdater } from 'preact/hooks';

import * as styles from './styles.scss';

type Props = {
    checked: boolean;
    onChange: StateUpdater<boolean>;
    label: string;
};

export const Checkbox = (props: Props) => {
    const { checked, onChange, label } = props;

    const handleChange = (e: h.JSX.TargetedEvent<HTMLInputElement>) => {
        onChange((e.target as HTMLInputElement).checked);
    };

    return (
        <label className={styles.root}>
            <input
                checked={checked}
                onChange={handleChange}
                className={styles.input}
                type="checkbox"
            />
            <svg class={styles.checkbox} viewBox="0 0 20 20">
                <rect
                    class={styles.checkboxOutline}
                    width="20"
                    height="20"
                    rx="4"
                ></rect>
                <rect
                    class={styles.checkboxSquare}
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="2"
                ></rect>
                <polyline
                    class={styles.checkboxMark}
                    points="5 9 9 13 15 6"
                ></polyline>
            </svg>
            {label}
        </label>
    );
};
