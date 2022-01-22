import React, { Component } from 'react';
import axios from 'axios';
import {
    Typography,
    Layout,
    Form, 
    Button,
    Input
  
   } from 'antd';
import 'antd/dist/antd.css';
import { 
    MailOutlined,
    UserOutlined
  } from '@ant-design/icons';
  const { Title } = Typography;
  const { Content } = Layout;
 class SendMassege extends Component {
    constructor(props){
        super(props)
        this.state ={
           name: '',
           email: '',
           message: ''
        }
    }
   
    handleChange=(e) => {
            this.setState({
                [e.target.name]: e.target.value
               })
    }

    handleSubmit = (e) => {
       e.preventDefault()
       
       axios.post('https://61a7b1d1387ab200171d2e5a.mockapi.io/api/v1/messages', this.state)
       .then(response => {
          console.log(response)
       })
   }

    render() {
       const {name, email,message} = this.state

        return (
            <div>
                <Layout style={{margin:'20'}}>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content" style={{backgroundColor: '#fff'}}></div>

                        <div style={{ width:300,padding:25, marginTop: 50, borderRadius:20, backgroundColor: '#fff'}}>
                        <Form style={{ width: '200'  }}
                        onSubmit={this.handleSubmit}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        >
                        <Title style={{textAlign:'center'}} level={2}>Contact us</Title>
            
                        <Form.Item style={{borderRadius:'15'}}
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input
                            name='name'
                            type= 'text'
                            value = {name}
                            onChange={this.handleChange}
                            style={{borderRadius:20,height:40}}
                            placeholder="Name"  
                            suffix={<UserOutlined className="site-form-item-icon " style={{color:'#1890ff'}} />} 
                            
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input 
                            name="email"
                            value = {email}
                            onChange={this.handleChange}
                            style={{borderRadius:20,height:40}} 
                            suffix={<MailOutlined className="site-form-item-icon " style={{color:'#1890ff'}} />}
                            type="email"
                            placeholder="Your Email"
                            />
                        </Form.Item>
                        <Form.Item name="message" >
                            <Input.TextArea
                             type="text"
                             style={{borderRadius:20}} 
                             placeholder="Message"
                             name="message"
                             onChange={this.handleChange}
                             value={message}
                             />  
                        </Form.Item>
                        <Form.Item >
                            <Button 
                            style={{borderRadius:20, height:40}}
                            block type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            onClick ={this.handleSubmit}
                            >
                            Send message
                            </Button>
                        
                        </Form.Item>
                        </Form>
                        </div>
                    </Content>
                </Layout> 
            </div>
        )
    }
}

export default SendMassege

  

  