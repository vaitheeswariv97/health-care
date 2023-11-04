import React from 'react'
import { client } from '../utils/configSanity'


interface IhealthCare{
  title:string;
  content:string;
}
async function getdata() {
  const query=`*[_type=='health-care']`;
const data=await client.fetch(query);
console.log(data);
return data as IhealthCare[];
  
}

const health_care = async() => {
  //const data=(await getdata()) as IhealthCare[];
  return (
    <div>health-care</div>
  )
}
export default health_care
