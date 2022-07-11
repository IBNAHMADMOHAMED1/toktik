import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { GoogleLogin } from 'react-google-login';
import Discover from '../components/Discover';
import SuggestedAccunts from '../components/SuggestedAccunts';
import Footer from './Footer';


const SideBar = () => {
    
    const [OpenSideBar, setOpenSideBar] = useState(true);
    
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded'; // className for normal link
    
    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded '; // className for active link
    
    const userProfile = false; // if user is logged in
  return (
      <div>
          <div
              onClick={() => setOpenSideBar((prev) => !prev)}
              className="block xl:hidden m-2 ml-4 mt-3 text-xl">
              {OpenSideBar ? <ImCancelCircle className="cursor-pointer" /> : <AiOutlineMenu  className="cursor-pointer" />}
          </div>
          {OpenSideBar && (
              <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
                  <div className="xl:border-b-2 border-gray-200 xl:pb-2 ">
                      <Link href="/">
                          <div className={normalLink}>
                              <p className="text-2xl ">
                                    <AiFillHome className="" />
                              </p>
                              <span className="text-xl hidden xl:block">For You </span>
                            </div>
                      </Link>
                  </div>
                  {!userProfile && (
                      <div className="px-2 py-4 hidden xl:block">
                          <p className=" text-gray-400"
                          > Login To like and comment </p>
                          <div className="flex justify-center">
                              <GoogleLogin
                                  clientId=""
                                  onSuccess={() => {}}
                                  onFailure={() => {}}
                                  cookiePolicy={'single_host_origin'}
                                  render={(renderProps) => (
                                      <button
                                          onClick={renderProps.onClick}
                                          disabled={renderProps.disabled}
                                          className="bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold rounde-md px-6 py-3 outline-none w-full cursor-pointer mt-3 hover:text-white hover:bg-[#F51997]"
                                      >
                                          Login with Google
                                      </button>
                                    )}
                                  
                              />
                            </div>
                      </div>
                  )}
                  <Discover />
                  <SuggestedAccunts />
                  <Footer />
              </div>
            )}
          
    </div>
  )
}

export default SideBar