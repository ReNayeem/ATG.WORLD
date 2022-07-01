import React from 'react';
import { MdOutlineGroupAdd, MdArrowDropDown } from 'react-icons/md'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import './PostNav.css'

const PostNav = () => {
    return (
        <>
            <div className="d-none d-md-none d-lg-block position-changing nav-links">
                <div className='' style={{ background: '#ffffff' }}>
                    <div className='container position-relative'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <ul class="nav nav-pills py-3">
                                <li class="nav-item active-nav-item border-bottom border-dark border-2">
                                    <a class="nav-link  text-dark ps-0 cursor" aria-current="page" >All Posts(32)</a>
                                </li>
                                <li class="nav-item inactive-nav-item">
                                    <a class="nav-link nav-link-3  cursor">Article</a>
                                </li>
                                <li class="nav-item inactive-nav-item">
                                    <a class="nav-link nav-link-3  cursor" >Event</a>
                                </li>
                                <li class="nav-item inactive-nav-item">
                                    <a class="nav-link nav-link-3  cursor" >Education</a>
                                </li>
                                <li class="nav-item inactive-nav-item">
                                    <a class="nav-link nav-link-3  cursor" >Job</a>
                                </li>
                            </ul>

                        </div>
                        <hr className='post-hr' />
                    </div>
                </div>
            </div>
            <div className='d-block d-md-block d-lg-none'>
                <div className='d-flex justify-content-between align-items-center mt-2 px-2'>
                    <p className='fw-bold ms-2'>Posts(368)</p>
                    <p><div class="dropdown">
                        <button class="btn write-post-btn mt-2 text-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter:All
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Action</button></li>
                            <li><button class="dropdown-item" type="button">Another action</button></li>
                            <li><button class="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div></p>
                </div>
            </div>
        </>
    );
};

export default PostNav;