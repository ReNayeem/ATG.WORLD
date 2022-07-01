import React from 'react';
import { BsThreeDots } from "react-icons/bs"
import { AiOutlineEye } from "react-icons/ai"
import { HiShare } from "react-icons/hi"
import { RiCalendarEventLine } from "react-icons/ri"
import { GoLocation } from "react-icons/go"
import { IoBagOutline } from "react-icons/io5"
import postImg from '../resources/img/post/post1.png'
import postImg2 from '../resources/img/post/post2.png'
import postImg3 from '../resources/img/post/post3.png'
import person1 from '../resources/img/person/person1.png'
import person2 from '../resources/img/person/person2.png'
import person3 from '../resources/img/person/person3.png'
import person4 from '../resources/img/person/person4.png'
import './PostCard.css'

const PostCard = () => {

    return (
        <>
            <div class="card mb-3">
                <img className="card-img-top" src={postImg} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title post-card-tag d-none d-md-block">✍️ <span>Article</span></h5>
                    <h5 class="card-title d-block d-md-none post-card-tag-mobile">✍️ <span>Article</span></h5>
                    <div className='d-flex justify-content-between align-items-start mt-3 mb-2'>
                        <h4 className='col-9 d-none d-md-block post-card-header'>
                            What if famous brands had regular fonts? Meet RegulaBrands!
                        </h4>
                        <p className='d-block d-md-none post-card-header-mobile'>
                            What if famous brands had regular fonts? Meet RegulaBrands!
                        </p>
                        <div className='d-flex justify-content-start'>
                            <div class="dropdown-menu-end user-select-none">
                                <a style={{ fontSize: '25px', color: 'black' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots />
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" >Edit</a></li>
                                    <li><a class="dropdown-item" >Report</a></li>
                                    <li><a class="dropdown-item" >Option 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p class="card-text d-none d-md-block post-card-mini-header">
                        I've worked in UX for the better part of a decade. From now on, I plan to rei...
                    </p>
                    <p class="card-text d-block d-md-none post-card-mini-header-mobile">
                        I've worked in UX for the better part of a decade.F..
                    </p>

                    <div className='d-none d-md-block'>
                        <div className='d-flex justify-content-between '>
                            <div className='d-flex align-items-center cursor'>
                                <div>
                                    <img src={person1} alt="" />
                                </div>
                                <div>
                                    <h5 className='mt-1 ms-2 post-card-person-name'>Sharthak Kamra</h5>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-card-view'>
                                <p><AiOutlineEye /> <span> 1.4k views</span></p>

                                <p className="post-card-share ms-5 cursor"><HiShare /></p>
                            </div>
                        </div>
                    </div>

                    <div className='d-block d-md-none'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex cursor'>
                                <img className='person-img-mobile' src={person1} alt="" />
                                <div className='d-grid ms-1'>
                                    <span className='post-card-person-name-mobile'>Sharthak Kamra</span>
                                    <span className='post-card-view-mobile'>1.4k views</span>
                                </div>
                            </div>
                            <div className=''>

                                <p className='my-auto cursor share-button-mobile'>
                                    <HiShare />
                                    <span className='ms-1'>Share</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <img className="card-img-top" src={postImg3} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title d-none d-md-block post-card-tag">🔬️  <span >Education</span></h5>
                    <h5 class="card-title d-block d-md-none post-card-tag-mobile">🔬️  <span>Education</span></h5>
                    <div className='d-flex justify-content-between align-items-start mt-3 mb-2'>
                        <h4 className='col-9 d-none d-md-block post-card-header'>
                            Tax Benefits for Investment under National Pension Scheme launched by Government
                        </h4>
                        <p className='d-block d-md-none post-card-header-mobile'>
                            Tax Benefits for Investment under National Pension Scheme launched by Government
                        </p>
                        <div className='d-flex justify-content-start'>
                            <div class="dropdown-menu-end user-select-none">
                                <a style={{ fontSize: '25px', color: 'black' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" >Edit</a></li>
                                    <li><a class="dropdown-item" >Report</a></li>
                                    <li><a class="dropdown-item" >Option 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p class="card-text d-none d-md-block post-card-mini-header">
                        I've worked in UX for the better part of a decade. From now on, I plan to rei...
                    </p>
                    <p class="card-text d-block d-md-none post-card-mini-header-mobile">
                        I've worked in UX for the better part of a decade.F..
                    </p>

                    <div className='d-none d-md-block'>
                        <div className='d-flex justify-content-between '>
                            <div className='d-flex align-items-center cursor'>
                                <div>
                                    <img src={person2} alt="" />
                                </div>
                                <div>
                                    <h5 className='mt-1 ms-2 post-card-person-name'>Sarah West</h5>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-card-view'>
                                <p><AiOutlineEye /> <span>1.4k views</span></p>

                                <p className="post-card-share ms-5 cursor"><HiShare /></p>
                            </div>
                        </div>
                    </div>

                    <div className='d-block d-md-none'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex cursor'>
                                <img className='person-img-mobile' src={person2} alt="" />
                                <div className='d-grid ms-1'>
                                    <span className='post-card-person-name-mobile'>Sarah West</span>
                                    <span className='post-card-view-mobile'>4.8k views</span>
                                </div>
                            </div>
                            <div className=''>

                                <p className='my-auto cursor share-button-mobile'>
                                    <HiShare />
                                    <span className='ms-1'>Share</span>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="card mb-3">
                <img className="card-img-top" src={postImg2} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title d-none d-md-block post-card-tag">🗓️  <span>Meetup</span></h5>
                    <h5 class="card-title d-block d-md-none post-card-tag-mobile" >🗓️  <span>Meetup</span></h5>
                    <div className='d-flex justify-content-between align-items-start mt-3 mb-2'>
                        <h4 className='col-9 d-none d-md-block post-card-header'>
                            Finance & Investment Elite Social Mixer @Lujiazui
                        </h4>
                        <p className='d-block d-md-none post-card-header-mobile'>
                            Finance & Investment Elite Social Mixer @Lujiazui
                        </p>
                        <div className='d-flex justify-content-start'>
                            <div class="dropdown-menu-end user-select-none">
                                <a style={{ fontSize: '25px', color: 'black' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" >Edit</a></li>
                                    <li><a class="dropdown-item" >Report</a></li>
                                    <li><a class="dropdown-item" >Option 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <div className='d-none d-md-block'><p style={{ fontSize: '15px', fontWeight: '600', marginRight: '85px' }}><span className='me-2'><RiCalendarEventLine /></span>Fri, 12 Oct, 2018</p></div>
                        <div className='d-block d-md-none'><p style={{ fontSize: '12px', fontWeight: '600', marginRight: '83px' }}><span className='me-2'><RiCalendarEventLine /></span>Fri, 12 Oct, 2018</p></div>
                        <div className='d-none d-md-block'><p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '20px' }}><span className='me-2'><GoLocation /></span>Ahmedabad, India</p></div>
                        <div className='d-block d-md-none'><p style={{ fontSize: '12px', fontWeight: '600', lineHeight: '20px' }}><span className='me-2'><GoLocation /></span>Ahmedabad, India</p></div>
                    </div>
                    <div>
                        <button className='w-100 py-2 mt-2 mb-4' style={{
                            border: '1px solid #A9AEB8', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                            lineHeight: '18.25px',
                            fontFamily: "'IBM Plex Sans', sans-serif", backgroundColor: '#ffffff', color: '#E56135'
                        }}>Visit Website</button>
                    </div>

                    <div className='d-none d-md-block'>
                        <div className='d-flex justify-content-between '>
                            <div className='d-flex align-items-center cursor'>
                                <div>
                                    <img src={person3} alt="" />
                                </div>
                                <div>
                                    <h5 className='mt-1 ms-2 post-card-person-name'>Ronal Jones</h5>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-card-view'>
                                <p><AiOutlineEye /> <span>1.4k views</span></p>

                                <p className="post-card-share ms-5 cursor"><HiShare /></p>
                            </div>
                        </div>
                    </div>

                    <div className='d-block d-md-none'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex cursor'>
                                <img className='person-img-mobile' src={person3} alt="" />
                                <div className='d-grid ms-1'>
                                    <span className='post-card-person-name-mobile'>Ronal Jones</span>
                                    <span className='post-card-view-mobile'>800 views</span>
                                </div>
                            </div>
                            <div className=''>

                                <p className='my-auto cursor share-button-mobile'>
                                    <HiShare />
                                    <span className='ms-1'>Share</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-body">

                    <h5 class="card-title d-none d-md-block post-card-tag">💼️ <span >Job</span></h5>
                    <h5 class="card-title d-block d-md-none post-card-tag-mobile">💼️ <span>Job</span></h5>

                    <div className='d-flex justify-content-between align-items-start mt-3 mb-2'>
                        <h4 className='col-9 d-none d-md-block post-card-header'>
                            Software Developer
                        </h4>

                        <p className='d-block d-md-none post-card-header-mobile'>
                            Software Developer - II
                        </p>
                        <div className='d-flex justify-content-start'>
                            <div class="dropdown-menu-end user-select-none">
                                <a style={{ fontSize: '25px', color: 'black' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" >Edit</a></li>
                                    <li><a class="dropdown-item" >Report</a></li>
                                    <li><a class="dropdown-item" >Option 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <div className='d-none d-md-block'><p style={{ fontSize: '15px', fontWeight: '600', marginRight: '35px' }}><span className='me-2'><IoBagOutline /></span>Innovaccer Analytics Private Ltd. </p></div>
                        <div className='d-block d-md-none'><p style={{ fontSize: '12px', fontWeight: '600', marginRight: '45px' }}><span className='me-2'><IoBagOutline /></span>Innovaccer Analytics... </p></div>
                        <div className='d-none d-md-block'><p style={{ fontSize: '15px', fontWeight: '600' }}><span className='me-2'><GoLocation /></span>Nodia, India</p></div>
                        <div className='d-block d-md-none'><p style={{ fontSize: '12px', fontWeight: '600' }}><span className='me-2'><GoLocation /></span>Nodia, India</p></div>
                    </div>
                    <div>
                        <button className='w-100 py-2 mt-2 mb-4' style={{
                            border: '1px solid #A9AEB8', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                            lineHeight: '18.25px',
                            fontFamily: "'IBM Plex Sans', sans-serif", backgroundColor: '#ffffff', color: '#02B875'
                        }}>Apply on Timesjobs</button>
                    </div>
                    <div className='d-none d-md-block'>
                        <div className='d-flex justify-content-between '>
                            <div className='d-flex align-items-center cursor'>
                                <div>
                                    <img src={person4} alt="" />
                                </div>
                                <div>
                                    <h5 className='mt-1 ms-2 post-card-person-name'>Joseph Gray</h5>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-card-view'>
                                <p><AiOutlineEye /> <span>1.4k views</span></p>

                                <p className="post-card-share ms-5 cursor"><HiShare /></p>
                            </div>
                        </div>
                    </div>

                    <div className='d-block d-md-none'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex cursor'>
                                <img className='person-img-mobile' src={person4} alt="" />
                                <div className='d-grid ms-1'>
                                    <span className='post-card-person-name-mobile'>Joseph Gray</span>
                                    <span className='post-card-view-mobile'>1.7k views</span>
                                </div>
                            </div>
                            <div className=''>

                                <p className='my-auto cursor share-button-mobile'>
                                    <HiShare />
                                    <span className='ms-1'>Share</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PostCard;