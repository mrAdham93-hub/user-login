import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "./API/Login";
import PostList from "./API/PostList";
import PostForm from "./API/PostForm";
import SendMassege from "./API/SendMassege";
import Add from "./API/Add"
import UserInfo from './API/UserInfo';

ReactDOM.render(
  <BrowserRouter>
   <Routes>
      <Route  path='/' element={<App />} >
          <Route  path="post-form" element={<PostForm />} />
          <Route  path="login" element={<Login />} />
          <Route  path="add" element={<Add />} />

          <Route  path='post-list' element={<PostList />} />
          <Route  path='send-massege' element={<SendMassege />} />
         
          <Route
                   path="*"
                   element={
                     <main style={{padding: "1rem"}}>
                       <p> There are nothing here!</p>
                     </main>
                   }
              />
      </Route>
      
  </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

