import { h } from 'preact';

import { AuthForm } from '~/src/components/AuthForm/AuthForm';

import * as styles from './styles.scss';

export const App = () => {
    return (
        <div className={styles.root}>
            <AuthForm />
        </div>
    );
};
