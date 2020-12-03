import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'

const UserModal = (props) => {
    const { modalvisible, editHandler, modalTitle, record, modeOnFinish } = props
    const [form] = Form.useForm();
    useEffect(() => {
        if (record) {
            form.setFieldsValue(record)
        } else {
            form.resetFields()
        }

    }, [modalvisible])
    const okHandler = () => {
        form.submit()
    }

    return (
        <div>
            <Modal
                title={modalTitle}
                visible={modalvisible}
                onOk={okHandler}
                onCancel={editHandler}
                forceRender
                maskClosable={false}

            >
                <Form name="nest-messages" form={form} onFinish={modeOnFinish}>
                    <Form.Item name={'name'} label="账号" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'email'} label="邮箱" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'create_time'} label="创建日期" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={'status'} label="状态" >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default UserModal;


