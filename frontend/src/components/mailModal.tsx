import { useState } from "react";
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

  const onFinish = async ({ email, message }) => {
    try {
      const res = await axios.post("/mail/send", {
        email,
        message,
      });
      if (res.status === 200) {
        form.resetFields(); // 필드 초기화
        Swal.fire({
          text: "이메일이 성공적으로 발송되었습니다!",
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
        title="To: sungwook@vxtkorea.com"
        open={open}
        onOk={handleOk}
        onCancel={onClose}
        width={800}
        footer={[
          <Button
            style={{ backgroundColor: "rgb(45,27,109)" }}
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
          <Form.Item
            rules={[
              { type: "email", message: "올바른 이메일 주소를 입력해 주세요!" },
              { required: true, message: "이메일을 입력해 주세요!" },
            ]}
            name="email"
          >
            <Input placeholder="이메일을 입력해 주세요" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "내용을 입력해 주세요!" }]}
            name="message"
          >
            <TextArea
              rows={7}
              placeholder="내용을 입력해 주세요"
              maxLength={500}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default MailModal;
