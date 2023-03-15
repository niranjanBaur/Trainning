import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/SideMenuBar/SideBar'
import axios from "axios"
import "./Profile.css"
import { useParams } from 'react-router-dom'
const Profile = () => {

    const [users,setUsers] = useState([])
    const [userInfo,setUserInfo] = useState([])

    const {userId} = useParams()

    console.log(userId);

    useEffect(()=>{
        const fetchAllUsers = async () => {
            await axios
              .get("http://localhost:8000/users")
              .then((res) => {
                setUsers(res?.data);

                return res?.data
              }).then((res)=>{
                const temp = res.filter((user) => user?.id === Number(userId))
                setUserInfo(temp)
              })
              .catch((err) => {
                console.log(err);
              });
          };
          fetchAllUsers()
    },[])

    
    console.log(userInfo);

  return (
    <div className='profile'>
        <SideBar/>
        <div className='profileCont'>
        <div className="top">
          <div className="left">
            <h1 className="title"> Information</h1>
            <div className="item">
              <img
                src="https://robohash.org/hicveldicta.png"
                alt=""
                className="itemImg"
              />
            </div>
          </div>
          <div className="right">
            <div className="details">

              <h1 className="itemTitle">{userInfo[0]?.username}</h1>

              <div className="detailItem">
                <span className="itemKey">Email : </span>
                <span className="itemValue">{userInfo[0]?.email}</span>
              </div>
              {/* <div className="detailItem">
                <span className="itemKey">Phone Number : </span>
                <span className="itemValue">+01 234 567 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address : </span>
                <span className="itemValue">745 T Street Southeast , Washington , 20020</span>
              </div> */}
            </div>

            <div className="contact">
              {/* <div className="mail"><EmailIcon/></div>
              <div className="twitter"><TwitterIcon/></div>
              <div className="whatsapp"><WhatsAppIcon/></div>
              <div className="facebook"><FacebookIcon/></div> */}
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Profile