import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: [
                'development',
                'test',
                'production'
            ]
        }),
        PORT: port(),
    });
};

export default validateEnv;
