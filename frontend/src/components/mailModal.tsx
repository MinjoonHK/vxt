import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import Swal from "sweetalert2";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

function MailModal({ open, onClose }) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const onFinish = async ({ input, message }) => {
    try {
      const res = await axios.post("/mail/send", {
        input,
        message,
      });
      if (res.status === 200) {
        form.resetFields(); // 필드 초기화
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: never) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title="To: Example.com"
        open={open}
        onOk={handleOk}
        onCancel={onClose}
        width={800}
        footer={[
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>,
          <Button
            htmlType="submit"
            key="submit"
            type="primary"
            onClick={form.submit}
          >
            Send
          </Button>,
        ]}
      >
        <Form
          style={{ marginTop: "2%" }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="input">
            <Input placeholder="Your Email Address" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea rows={7} placeholder="Message" maxLength={6} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default MailModal;
