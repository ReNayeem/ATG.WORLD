import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <div className='banner-background-overlay'>
                    <div>
                        <div className='d-flex justify-content-between p-3 d-block d-md-block d-lg-none'>
                            <span className='cursor' style={{ fontSize: '18px', color: '#ffffff' }}><AiOutlineArrowLeft /></span>
                            {
                                user ?
                                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className='px-3 rounded py-1' style={{ fontSize: '15px', color: '#ffffff', border: '1px solid white' }}>Leave Group</span>
                                    :
                                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className='px-3 rounded py-1' style={{ fontSize: '15px', color: '#ffffff', border: '1px solid white' }}>Join Group</span>
                            }
                        </div>
                    </div>
                    <div className='container h-100 d-flex align-items-end pb-md-5'>
                        <div className='pb-5'>
                            <h1 className='banner-title'>Computer Engineering</h1>
                            <p className='banner-mini-title'>142,765 Computer Engineers follow this</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-bottom rounded-3 h-75 d-block d-md-none" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title mt-3" id="offcanvasBottomLabel">Create Account</h5>
                    <button type="button" class="btn-close text-reset mt-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    <div className='d-flex'><input placeholder='First Name' type="text" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' />
                        <input placeholder='Last Name' type="text" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' /></div>
                    <input placeholder='Email' type="email" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' />
                    <input placeholder='Password' type="password" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' />
                    <input placeholder='Confirm Password' type="password" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' />
                    <div className='d-flex justify-content-between align-items-center my-4'>
                        <input type="button" className='create-account-btn-mobile' value='Create Account' />
                        <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom2" aria-controls="offcanvasBottom" style={{ color: 'gray', textDecoration: 'underline' }}>or, Sign In</a>
                    </div>
                    <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 '><span className='text-primary'><MdFacebook /></span> Sign up with Facebook</button></div>
                    <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 mt-2' ><FcGoogle /> Sign up with Google</button></div>
                    <p className='text-center mt-4 policy'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>

            <div class="offcanvas offcanvas-bottom h-75 rounded-3 d-block d-md-none" tabindex="-1" id="offcanvasBottom2" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title mt-3" id="offcanvasBottomLabel">Welcome back!</h5>
                    <button type="button" class="btn-close text-reset mt-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    <input placeholder='Email' type="email" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' />
                    <input placeholder='Password' type="password" style={{ backgroundColor: '#f7f8fa', border: '1px solid #d9d9db', padding: '8px 0', borderRadius: '2px 2px 0 0' }} className='w-100 p-2' />
                    <div className='d-flex justify-content-between align-items-center my-4'>
                        <input type="button" className='create-account-btn-mobile' value='Sign In' />
                        <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" style={{ color: 'gray', textDecoration: 'underline' }}>or, Create an account</a>
                    </div>
                    <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 '><span className='text-primary'><MdFacebook /></span> Sign up with Facebook</button></div>
                    <div><button style={{ backgroundColor: '#ffffff', border: '1px solid #d9d9db', borderRadius: '2px' }} className='w-100 py-2 mt-2' ><FcGoogle /> Sign up with Google</button></div>
                    <div><button style={{ backgroundColor: '#ffffff', border: 'none' }} className='w-100 py-2 mt-2'>Forgot Password ?</button></div>
                </div>
            </div>
        </>
    );
};

export default Banner;