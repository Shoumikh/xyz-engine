import { Button, Card, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, setForm } from "../../store/reducers/homeReducer";

const BasicForm = () => {
  const dispatch = useDispatch();
  

  // @desc: Submit Form
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(setForm(values));
    dispatch(setCurrentStep(1));
  };

  // @desc: Submit Form Failed
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Project Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Project Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input your Project Description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Client"
          name="client"
          rules={[
            {
              required: true,
              message: "Please input your Client!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contractor"
          name="contractor"
          rules={[
            {
              required: true,
              message: "Please input your Contractor!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Proceed
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BasicForm;
