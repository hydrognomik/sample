import { h } from 'preact';
import { useState } from 'preact/hooks';

import { Input } from '~/src/components/Input/Input';
import { Button } from '~/src/components/Button/Button';
import { Checkbox } from '~/src/components/Checkbox/Checkbox';
import { Link } from '~/src/components/Link/Link';

import * as styles from './styles.scss';

export const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const resetState = () => {
        setEmail('');
        setPassword('');
        setRememberMe(false);
    };

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        const isFormFilled = [email, password].filter(Boolean).length == 2;
        isFormFilled && console.log({ email, password, rememberMe });

        resetState();
    };

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    value={email}
                    onChange={setEmail}
                    type="email"
                    placeholder="Email Address"
                />
                <Input
                    value={password}
                    onChange={setPassword}
                    type="password"
                    placeholder="Password"
                />
                <div className={styles.wrapper}>
                    <Checkbox
                        label="Remember me"
                        checked={rememberMe}
                        onChange={setRememberMe}
                    />
                    <Link onClick={() => alert('Oh, so sad.')}>
                        Forgot Password
                    </Link>
                </div>
                <Button>Sign in</Button>
            </form>
        </div>
    );
};
