import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa'
import { GoLocation } from "react-icons/go"
import { BiLike } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import groupPic1 from '../resources/img/group/group.png'
import groupPic2 from '../resources/img/group/group2.png'
import groupPic3 from '../resources/img/group/group3.png'
import groupPic4 from '../resources/img/group/group4.png'
import './Recommended.css'


const Recommended = () => {
    const [follow, setFollow] = useState(false)
    const [follow2, setFollow2] = useState(true)
    const [follow3, setFollow3] = useState(true)
    const [follow4, setFollow4] = useState(true)

    const followed = () => {
        setFollow(!follow)
    }
    const followed2 = () => {
        setFollow2(!follow2)
    }
    const followed3 = () => {
        setFollow3(!follow3)
    }
    const followed4 = () => {
        setFollow4(!follow4)
    }
    return (
        <>
            <div className='d-none recommended d-md-block'>
                {
                    <>
                        <div className='d-flex justify-content-end mt-4'>
                            <div className='d-flex justify-content-between  recommended-custom-width' ><span> <span><GoLocation /></span><span> |</span><span className='location-text'>Enter your location</span></span> <span className='location-close cursor'><AiOutlineClose /></span></div>
                        </div>
                        <div className='d-flex justify-content-end'><hr className='recommended-custom-width custom-hr-2' /></div>
                        <div className='d-flex justify-content-end'><span className='d-flex align-items-start recommended-custom-width'> <span className='me-2'><AiOutlineExclamationCircle /></span><span className='location-text-2'>Your location will help us serve better and extend a personalised experience.</span></span></div>
                    </>

                }
                <div className={`${'d-none'}`}>
                    <div className='d-flex justify-content-end'>
                        <div style={{ width: '243px' }} className='my-3 recommended-custom-width'>
                            <p className='recommended-group-text-0'><span><BiLike /></span> <span className='recommended-group-text'>RECOMMENDED GROUPS</span></p>

                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div className=' d-flex align-items-center'>
                                    <img className='cursor' src={groupPic4} alt="" />
                                    <p className='my-auto ms-2 cursor followers followers'>Leisure</p>
                                </div>
                                <span className='cursor follow-or-not' style={{
                                    background: follow ? '#EDEEF0' : 'black',
                                    borderRadius: '14px',
                                    width: follow ? '60px' : '73px',
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: follow ? 'black' : 'white'
                                }}
                                    onClick={followed} >
                                    {
                                        follow ?
                                            <span>Follow</span> :
                                            <span>Followed</span>
                                    }
                                </span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <div className=' d-flex align-items-center'>
                                    <img className='cursor' src={groupPic1} alt="" />
                                    <p className='my-auto ms-2 cursor followers'>Activism</p>
                                </div>
                                <span className='cursor follow-or-not' style={{
                                    background: follow2 ? '#EDEEF0' : 'black',
                                    borderRadius: '14px',
                                    width: follow2 ? '60px' : '73px',
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: follow2 ? 'black' : 'white'
                                }}
                                    onClick={followed2} >
                                    {
                                        follow2 ?
                                            <span>Follow</span> :
                                            <span>Followed</span>
                                    }
                                </span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <div className='d-flex align-items-center'>
                                    <img className='cursor' src={groupPic2} alt="" />
                                    <p className='my-auto ms-2 cursor followers'>MBA</p>
                                </div>
                                <span className='cursor follow-or-not' style={{
                                    background: follow3 ? '#EDEEF0' : 'black',
                                    borderRadius: '14px',
                                    width: follow3 ? '60px' : '73px',
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: follow3 ? 'black' : 'white'
                                }}
                                    onClick={followed3} >
                                    {
                                        follow3 ?
                                            <span>Follow</span> :
                                            <span>Followed</span>
                                    }
                                </span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <div className=' d-flex align-items-center'>
                                    <img className='cursor' src={groupPic3} alt="" />
                                    <p className='my-auto ms-2 followers cursor'>Philosophy</p>
                                </div>
                                <span className='cursor follow-or-not' style={{
                                    background: follow4 ? '#EDEEF0' : 'black',
                                    borderRadius: '14px',
                                    width: follow4 ? '60px' : '73px',
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    color: follow4 ? 'black' : 'white'
                                }}
                                    onClick={followed4} >
                                    {
                                        follow4 ?
                                            <span>Follow</span> :
                                            <span>Followed</span>
                                    }
                                </span>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <p className='cursor see-more'>See more...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recommended;