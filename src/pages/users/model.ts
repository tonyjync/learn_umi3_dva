import { Reducer, Effect, Subscription } from 'umi'
import { editUser, getUserList, deleteUser, addUser } from './service'

//Model 是一个对像
interface UserModelType {
    namespace: 'users';
    state: {};
    reducers: {
        getlist: Reducer;
    };
    effects: {
        getremote: Effect;
        edit: Effect;
        delete: Effect;
        add: Effect;
    };
    subscriptions: {
        setup: Subscription;
    }
}
const UserModel: UserModelType = {
    namespace: 'users',
    state: {},
    reducers: {
        getlist(state, { payload }) {
            return payload;
        }
    },
    effects: {
        *getremote({ payload }, { put, call }) {
            const data = yield call(getUserList);
            if (data) {
                yield put({ type: 'getlist', payload: data });
            }

        },
        *edit({ payload: { id, values } }, { put, call }) {
            const data = yield call(editUser, { id, values })
            if (data) {
                yield put({ type: 'getremote' })
            }
        },
        *delete({ payload: { id } }, { put, call }) {
            const data = yield call(deleteUser, { id })
            if (data) {
                yield put({ type: 'getremote' })
            }
        },
        *add({ payload: { values } }, { put, call }) {
            const data = yield call(addUser, { values })
            if (data) {
                yield put({ type: 'getremote' })
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname == '/users') {
                    dispatch({ type: 'getremote' })
                }
            })

        }
    }
}

export default UserModel;