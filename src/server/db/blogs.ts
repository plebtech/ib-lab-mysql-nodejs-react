import { Connection } from './index';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from blogs', (err, results) => {
            if (err) {
                return reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export default {
    all
}