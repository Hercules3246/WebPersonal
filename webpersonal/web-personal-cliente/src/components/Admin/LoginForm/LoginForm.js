import React from "react";
import { Form, Icon, Input, Button, notification } from "antd";

import "./LoginForm.scss";

export default function LoginForm() {
  return;
  <Form className="login-form">
    <Form.Item>
      <Input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        type="email"
        name="name"
        placeholder="Correo Electronico"
        className="login-form__input"
      />
    </Form.Item>
  </Form>;
}
