import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";
import { makeStyles } from "@material-ui/core/styles";

const loginFormStyles = makeStyles(theme => ({
  loginColumns: {
    maxWidth: "460px",
    margin: "0 auto",
    padding: "100px 20px 20px 20px"
  },
  btnLogin: {
    width: "100%"
  }
}));
const Login = () => {
  const classes = loginFormStyles();
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <div className={classes.loginColumns}>
        <Row>
          <Col span={24}>
            <Form
              name="normal_login"
              className="login-form"
              initialvalues={{
                remember: true
              }}
              onSubmit={event => handleSubmit(event)}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!"
                  }
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuepropname="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={classes.btnLogin}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
