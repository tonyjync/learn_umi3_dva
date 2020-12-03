import React, { useState } from 'react'
import { Table, Space, Popconfirm, Button } from 'antd';
import { connect } from 'umi'
import UserModal from './components/UserModal'

const index = ({ users, dispatch, loading }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [record, setRecord] = useState(undefined);
    const [modalTitle, setModalTile] = useState('Basic title');
    const columns = [
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => { editModal(record) }}>修改</a>
                    <Popconfirm
                        title="Are you sure to delete this user?"
                        onConfirm={() => { confirm(record.id) }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>删除</a>
                    </Popconfirm>

                </Space>
            ),
        },
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '账号',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '创建日期',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        }

    ];
    const editHandler = () => {
        setModalVisible(false)
    }
    const editModal = (recordget) => {
        const id = recordget.id || ''
        setModalVisible(true)
        setRecord(recordget)
        setModalTile("修改序号：" + id)
    }

    const modeOnFinish = (values) => {
        if (record) {
            const id = record.id;
            dispatch({ type: 'users/edit', payload: { id, values } })
        } else {
            dispatch({ type: 'users/add', payload: { values } })
        }
        setModalVisible(false)
    }
    const confirm = (id) => {
        dispatch({ type: 'users/delete', payload: { id } })
    }
    const addUser = () => {
        setModalVisible(true)
        setRecord(undefined)
        setModalTile("添加")
    }


    return (
        <div className="list-table">
            <Button type="primary" onClick={addUser}>Add</Button>
            <Table columns={columns} dataSource={users.data} rowKey="id" loading={loading} />
            <UserModal
                modalTitle={modalTitle}
                modalvisible={modalVisible}
                editHandler={editHandler}
                record={record}
                modeOnFinish={modeOnFinish}
            >
            </UserModal>
        </div>
    )
}

const mapStateToProps = ({ users, loading }) => {
    return {
        users,
        loading: loading.models.users
    }
}

// const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps)(index);

