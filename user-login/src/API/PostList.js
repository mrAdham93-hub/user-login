
import axios from "axios";
import React,{Component} from "react";

class PostList extends Component {
  constructor(props){
      super(props)

      this.state = {
          users:[]
      }
  }
    componentDidMount(){
        axios.get('https://61a7b1d1387ab200171d2e5a.mockapi.io/api/v1/users')
        .then(response => {
            this.setState({
                users: response.data
            })
            console.log(response.data)
        })
    }
 
    render() { 

        const {users} = this.state
        return (
            
            <div>
                
                <div  style={{margin:100}}>
                    <div  style={{marginLeft: 150}}>
                        <h1 style={{alignContent:'center'}}> Users Info</h1>
                    </div>
                
                
                <div >
                    <thead>
                        <td style={{width: '120px',fontWeight:900}}> Full Name</td>
                        <td style={{width: '150px',fontWeight:900}}> Email</td>   
                        <td style={{fontWeight:900}}> Phone</td>
                    </thead>
                     


                </div>
               {
                  users.map(user => <div key ={user.id}> <td style={{width: 120}}>{user.FullName}</td> <td style={{width: '150px'}}>{user.Email}</td> <td style={{width: '120px'}}>{user.Phone}</td></div>)
                  
               }
               </div>
              
               
            </div>
        )
    }
}
 
export default PostList;