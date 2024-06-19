import React, { useEffect } from 'react'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom'
import { User, useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'react-query';

const Layout = () => {
  const {isAuthenticated , user , getAccessTokenWithPopup} = useAuth0()
  // const {setUserDetails} = useContext(UserDetailContext)



const {mutate} = useMutation({
  mutationKey:[user?.email],
  mutationFn: (token) => createUseExternalEvents(User?.email , token)
})


useEffect(()=>{
    
  const getTokenAndRegister = async ()=>{
    const res = await getAccessTokenWithPopup({
      authorizationParams: {
        audience:"http://localhost:9000",
        scope:"openid profile email"
      }
    })
    localStorage.setItem("acess_token" , res)
  setUserDetails((prev)=>({...prev , token:res}))
  mutate(res)
  }

  

  isAuthenticated && getTokenAndRegister()



} , [isAuthenticated])

    return (
        <>
          <div style={{ background: "var(--black)", overflow: "hidden" }}>
          <Header />
            <Outlet />
          </div>
          <Footer />
        </>
      );
    };
    


export default Layout