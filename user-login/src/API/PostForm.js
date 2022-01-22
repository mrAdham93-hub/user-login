import React, { Component } from 'react';
import axios from "axios";
import {
    Typography,
    Layout,
    Form, 
    Button,
    Input,
    Checkbox,
   } from 'antd';
import 'antd/dist/antd.css';
import { 
    MailOutlined,
    UserOutlined,
   
    PhoneOutlined
  } from '@ant-design/icons';

const { Title } = Typography;
const {  Content } = Layout;

 class PostForm extends Component {
   
    constructor(props){
         super(props)

         this.state ={
            id: '',
            FullName: '',
            Email: '',
            Phone: '',
            Password: ''
         }
     }
    
     handleChange=(e) => {
             this.setState({
                 [e.target.name]: e.target.value
                })
     }

     handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post('https://61a7b1d1387ab200171d2e5a.mockapi.io/api/v1/users', this.state)
        .then(response => {
           console.log(response)
        })
    }



    render() { 
       const {FullName, Email, Phone, Password} = this.state
        return (
           <div>
                <Layout style={{margin:'20'}}>
                        <Content style={{ padding: ' 50px' }}>
                            <div style={{ width:300,padding:25, marginTop: 50, borderRadius:20, backgroundColor: '#fff'}}>
                                <Form 
                                onSubmit={this.handleSubmit}
                                style={{ width: '200'  }}
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                >
                                <Title style={{textAlign:'center'}} level={2}>Create Accaunt</Title>
                                 {/* <Form.Item  style={{borderRadius:'15'}} name="id">
                                    <Input disabled
                                      type='text'
                                      name='id'
                                      value = {id} 
                                      onChange={this.handleChange}
                                    ></Input>
                                </Form.Item>  */}
                                <Form.Item style={{borderRadius:'15'}}
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your FullName!' }]}
                                >
                                <Input 
                                style={{borderRadius:20,height:40}}
                                placeholder="FullName" 
                                suffix={<UserOutlined 
                                className="site-form-item-icon "
                                style={{color:'#1890ff'}}/>}
                                name='FullName'
                                type= 'text'
                                value = {FullName}
                                onChange={this.handleChange}
                                ></Input> 
                                </Form.Item>

                                <Form.Item
                                name="email"
                                rules={[{ required: true,
                                          message: 'Please input your Email!' }]}
                                >
                                
                                <Input 
                                    style={{borderRadius:20,height:40}} 
                                    suffix={<MailOutlined className="site-form-item-icon " style={{color:'#1890ff'}} />}
                                    type="text"
                                    placeholder="Your Email"
                                    name='Email'
                                    value = {Email}
                                    onChange={this.handleChange}
                                ></Input>
                                </Form.Item>

                                <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                <Input 
                                placeholder="Phone Number"
                                suffix={<PhoneOutlined className="site-form-item-icon " style={{color:'#1890ff'}} />}
                                style={{ width: '100%',borderRadius:20,height:40 }}
                                name='Phone'
                                type= 'text'
                                value = {Phone}
                                onChange={this.handleChange}
                                ></Input>
                                </Form.Item>
                                
                                <Form.Item
                                    name="password"
                                    
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ]}
                                    hasFeedback
                                >
                                <Input.Password 
                                style={{ width: '100%',borderRadius:20,height:40 }} 
                                placeholder="Password"
                                type='text'
                                name='Password'
                                value = {Password}
                                onChange={this.handleChange}
                                />
                                </Form.Item>

                                 <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                    }),
                                ]}
                                >
                                <Input.Password 
                                 style={{ width: '100%',borderRadius:20,height:40 }}
                                  placeholder="Confirm Password"
                                
                                  />
                                </Form.Item> 

                                <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Agree whith</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="https://ru.reactjs.org/docs/handling-events.html">
                                Term & Condition
                                </a>
                                </Form.Item>
                                    <Form.Item >
                                    <Button
                                       style={{borderRadius:20, height:40,marginBottom:15}} 
                                       block type="primary"
                                       htmlType="submit" 
                                       className="login-form-button"
                                       onClick ={this.handleSubmit}
                                       >
                                       
                                       Create Accaunt

                                    </Button>
                                        Alredy have on accaunt? <a href="https://ru.reactjs.org/docs/handling-events.html">Login</a>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Content>
                </Layout>
            </div>
        )
    }
}
 
export default PostForm;