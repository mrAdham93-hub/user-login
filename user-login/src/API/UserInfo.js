import React, { useMemo, useState, useEffect } from 'react'
import axios from "axios";
import UserList from './UserList';

export default function UserInfo() {

    const [data, setData] = useState([]);

  useEffect(() => {
  (async () => {

    const result = await axios("https://61a7b1d1387ab200171d2e5a.mockapi.io/api/v1/users");
    setData(result.data)
  }) ();
  }, []);

  const columns = useMemo(
    () => [
    {
       Header: "USER INFORMATION",
       columns: [
         {
           Header: "Full Name",
           accessor: "show.name"
         },
         {
          Header: "Email",
          accessor: "show.email"
        },
        {
          Header: "Pone",
          accessor: "show.phone"
        },
       ]
       
    },
    {
      Heaer: "USER INFORMATION",
      columns: [
        {
          Heaer: "Full Name",
          accessor: "show.name"
        },
        {
         Heaer: "Email",
         accessor: "show.email"
       },
       {
         Heaer: "Pone",
         accessor: "show.phone"
       },
      ]
      
   }
  ])
  return (
    <div >
      <UserList columns={columns} data={data} />
    </div>
  );
}
