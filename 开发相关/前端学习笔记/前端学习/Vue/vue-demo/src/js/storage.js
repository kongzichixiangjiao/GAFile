/*
 * @Author: houjianan 
 * @Date: 2018-12-03 22:36:49 
 * @Last Modified by: hjn
 * @Last Modified time: 2020-12-03 22:39:13
 * @Description: 存储数据
 */

const storage = window.localStorage;

export default {
    set(key, val) {
        if (val === undefined) {
            return;
        }
        storage.setItem(key, serialize(val));
    },
    get(key, def) {
        const val = deserialize(storage.getItem(key));
        return val === undefined ? def : val;
    },
    remove(key) {
        storage.removeItem(key);
    },
    clear() {
        storage.clear();
    }
};

function serialize(val) {
    return JSON.stringify(val);
}

function deserialize(val) {
    if (typeof val !== 'string') {
        return undefined;
    }
    try {
        return JSON.parse(val);
    } catch (e) {
        return val || undefined;
    }
}

/*
import storage from 'assets/js/storage';

storage.get(KEY, []);
storage.set(KEY, value);
*/