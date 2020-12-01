import React, { useState } from 'react'
import { Table, Space } from 'antd';
import { connect } from 'umi'
import UserModal from './components/UserModal'

const index = ({ users, dispatch }) => {
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
                    <a onClick={() => { delModal(record) }}>删除</a>
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
        }

    ];
    const editHandler = () => {
        setModalVisible(false)
    }
    const editModal = (recordget) => {
        setModalVisible(true)
        setRecord(recordget)
        setModalTile("Add User")
    }
    const delModal = (recordget) => {
        setModalVisible(true)
        setRecord(recordget)
        setModalTile("Del User")
    }


    return (
        <div className="list-table">
            <Table columns={columns} dataSource={users.data} rowKey="id" />
            <UserModal
                modalTitle={modalTitle}
                modalvisible={modalVisible}
                editHandler={editHandler}
                record={record}>
            </UserModal>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

// const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps)(index);

