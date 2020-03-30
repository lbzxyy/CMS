import React, { Component } from 'react';
import './index.scss';
import { Form, Input, Button, Checkbox, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from './service';
import { getData, saveData } from '@utils/cache';
import md5 from 'js-md5';
class Login extends Component {
  formRef = React.createRef();
  componentDidMount() {
    this.formRef.current.setFieldsValue({
      username: getData('username') || '',
      password: getData('password') || ''
    })
  }
  // 提交表单 校验成功 回调事件
  onFinish = async(values) => {
    console.log('Received values of form: ', values);
    if(values.remember) { // 勾选记住
      saveData('username',values.username)
      saveData('password',values.password)
      console.log(this.props,'props')
    }
    values.password = md5(values.password);

    const { data, errorCode } = await login(values);
    if(errorCode === '100200') {
      message.success('登录成功')
    }
    console.log(data,'dtataaaaaa')
  };
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }

  render() {
    return(
      <div className="container">
        <div className="login-form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed= {this.onFinishFailed}
          ref={this.formRef}
        >
          <div className="title">品连后台管理系统</div>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/forget">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
        </div>
      </div>
    )
  }
} 

export default Login;