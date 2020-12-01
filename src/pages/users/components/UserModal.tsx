import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'

const UserModal = (props) => {
    const { modalvisible, editHandler, modalTitle, record } = props
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(record)
    }, [modalvisible])
    return (
        <div>
            <Modal
                title={modalTitle}
                visible={modalvisible}
                onOk={editHandler}
                onCancel={editHandler}
                forceRender
            >
                <Form name="nest-messages" form={form} >
                    <Form.Item name={'id'} label="序号" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'name'} label="账号" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'email'} label="邮箱" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'create_time'} label="创建日期" >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default UserModal;


