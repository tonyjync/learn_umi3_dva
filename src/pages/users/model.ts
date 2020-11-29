import { Reducer, Effect, Subscription } from 'umi'

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

        }
    },
    effects: {
        getremote({ payload }, { put }) {
            const data = [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ];
        },
        subscriptions: {
            setup({ dispatch, history }) {
                history.listen(({ pathname }) => {
                    if (pathname == '/users') {
                        dispatch({ type: 'getlist' })
                    }
                })

            }
        }
    }

export default UserModel;