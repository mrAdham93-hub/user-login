import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
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
    LockOutlined
  } from '@ant-design/icons';


   const { Title } = Typography;
   const {  Content } = Layout;


  function Login() {
     
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
    // useEffect(() => {
    //     if(localStorage.getItem('user-info')) {
    //      navigate("/send-massege")
    //     }
    // }, [])

    async  function  handleSubmit(){
        
        console.warn(email,password);
        
        let item ={email,password};
         console.log(item)
        let result = await fetch("https://61a7b1d1387ab200171d2e5a.mockapi.io/api/v1/user",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(item)
        })
         result = await result.json(); 
         console.log(result);
         if(item.email === result.email && item.password === result.password) {
             navigate("/send-massege");
         } else {
             console.log('Went wrong data!!!');
         }

        //  if(item.email === result.email || item.password === result.email ){
        // //   localStorage.setItem( "user-info", JSON.stringify(result))
        // //     navigate("/send-massege");
        //    console.log("ddddddd");
        //  } else {
        //     console.log("error");

        //  }
         
     
    }  
    
    return (
        <div style={{alignItems:'center'}}>
        <div> 
            <Layout style={{margin:'20'}}>
            
                <Content style={{ padding: '0 50px' }}>
                
                    <div className="site-layout-content" style={{backgroundColor: '#fff'}}></div>
                    <div style={{ width:300,padding:25, marginTop: 50, borderRadius:20, backgroundColor: '#fff'}}>
                    <Form style={{ width: '200'  }}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onSubmit={handleSubmit}
                    >
                    <Title style={{textAlign:'center'}} level={2}>Login Accaunt</Title>
        
                    <Form.Item style={{borderRadius:'15'}}
                        name="Email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                        style={{borderRadius:20,height:40}}
                        type="text"
                        placeholder="Email"  
                        suffix={<MailOutlined 
                        className="site-form-item-icon " 
                        style={{color:'#1890ff'}}/>}
                        onChange={(e)=>setEmail(e.target.value)}
                        /> 
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        style={{borderRadius:20,height:40}} 
                        suffix={<LockOutlined className="site-form-item-icon " 
                        style={{color:'#1890ff'}} />}
                        type="password"
                        placeholder="Your Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Form.Item>
        
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Save Password</Checkbox>
                        </Form.Item>
        
                        <a className="login-form-forgot" href="./API/Loggin">
                        Forgot password
                        </a>
                    </Form.Item>
                    <Form.Item >
                        <Button   
                        style={{borderRadius:20, height:40,marginBottom:15}} 
                        block type="primary" 
                        htmlType="submit" 
                        className="login-form-button"
                        onClick={handleSubmit}
                        >
                        Login Accaunt
                        </Button>
                        Don't have accaunt? <a href="https://github.com">SignUp</a>
                    </Form.Item>
                    </Form>
                    </div>
                </Content>
            </Layout> 
        </div>
        </div>
    )
}
export default Login