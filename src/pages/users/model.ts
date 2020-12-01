import { Reducer, Effect, Subscription } from 'umi'
import { getUserList } from './service'

//Model 是一个对像
interface UserModelType {
    namespace: 'users';
    state: {};
    reducers: {
        getlist: Reducer;
    };
    effects: {
        getremote: Effect;
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
            yield put({ type: 'getlist', payload: data });
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