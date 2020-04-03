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

export const one = async (id: number) => {
    return new Promise((resolve, reject) => {
        Connection.query(`SELECT * from blogs WHERE id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export default {
    all,
    one,
}