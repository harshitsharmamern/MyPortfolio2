import Title from './Title'
import SubTitle from './SubTitle'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ay2tdk', 'template_z5dxop8', form.current, '8R2AlonC3RdZ-e1uD')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <div id='contact' className='bg-[#333a3f] min-h-screen relative'>
            <Title Children={'CONTACTS'} />
            <div className='flex justify-center items-center pt-20 z-20 relative'>
                <SubTitle Children={'Get in Touch'} />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:my-20 px-4 md:px-10">
                <div className="rounded-lg space-y-8">
                    <div className='space-y-3'>
                        <h1 className='md:text-xl font-bold text-white'>ADRESS</h1>
                        <p className='md:text-lg font-medium text-[#b7b5b5]'>Mohanpur, Rajshahi-6220 <br /> Bangladesh</p>
                    </div>
                    <div className='space-y-2 text-[#b7b5b5]'>
                        <h1 className='md:text-lg font-medium flex justify-start items-center gap-2'>
                            <IoCall className='text-[#20c997] md:text-xl' />+880 1714760739</h1>
                        <h1 className='md:text-lg font-medium flex justify-start items-center gap-2'>
                            <FaLinkedin className='text-[#20c997] md:text-xl' />Shimul Zahan</h1>
                        <h1 className='md:text-lg font-medium flex justify-start items-center gap-2'>
                            <FaWhatsappSquare className='text-[#20c997] md:text-xl' /> +880 1714760739</h1>
                        <h1 className='md:text-lg font-medium flex justify-start items-center gap-2'>
                            <IoIosMail className='text-[#20c997] text-2xl' />shimulzahan636@gmail.com</h1>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='md:text-xl font-bold text-white'>FOLLOW ME</h1>
                        <div className='flex justify-start items-center md:text-2xl text-[#b7b5b5] space-x-3'>
                            <FaGithub />
                            <FaLinkedin />
                            <FaFacebookSquare />
                            <FaDribbbleSquare />
                            <FaGoogle />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg mt-10 lg:mt-0 lg:col-span-2">
                    <div className='space-y-1 md:space-y-3'>
                        <h1 className='md:text-xl mb-2 font-bold text-white'>SEND US A NOTE</h1>
                        <form ref={form} onSubmit={sendEmail} className="mt-8 grid grid-cols-6 gap-3 md:gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block md:text-lg font-medium text-white">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="user_name"
                                    className="mt-1 p-4 w-full rounded-md  text-sm text-white bg-[#232a31]"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label className="block md:text-lg text-white ">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="user_email"
                                    className="mt-1 p-4 w-full rounded-md text-white text-sm bg-[#232a31]"
                                />
                            </div>

                            <div className="col-span-6">
                                <label class="block md:text-lg font-medium text-white"> Order notes </label>

                                <textarea
                                    class="mt-2 p-4 w-full rounded-lg text-white align-top outline-none bg-[#232a31]"
                                    name="message"
                                    rows="5"
                                    placeholder="Enter any additional order notes..."
                                ></textarea>
                            </div>

                            <div className="col-span-6 py-10 md:py-0 flex justify-center rounded-full items-center sm:gap-4">
                                <button type="submit"
                                    className="inline-block rounded-full shrink-0 border border-[#20c997] bg-[#20c997] px-12 py-3 md:text-lg font-medium text-white transition hover:bg-[#1baa80]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts