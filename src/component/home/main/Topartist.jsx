import React, { Fragment } from "react";
import aghamsorenaimg from "../../../assets/images/Folder.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"

import "./swiperslide.css"

const Topartist = () => {

    return (
        <Fragment>
            <div className="rounded-3xl flex flex-col w-full mb-5 justify-center shadow border-grayprodark border-1 px-5 bg-testbacksecond">
                <h2 className="text font-bold p-2 my-3">Best Artists</h2>
                <div className="flex w-full mb-7 kosnanaekhamenei">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={5}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        className="myswiper"
                    >
                        <SwiperSlide className="text-blackpro">
                            <div className="mx-2 cursor-pointer">
                                <img src={aghamsorenaimg} className="w-full lg:h-33 md:h-24 sm:h-16 rounded-full" />
                                <h5 className="mdlg:text-base zero:text-sm text-white">sorena</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="mx-2 cursor-pointer" >
                                <img src={aghamsorenaimg} className="w-full lg:h-33 md:h-24 sm:h-16 rounded-full" />
                                <h5 className="mdlg:text-base zero:text-sm text-white">sorena</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="mx-2  cursor-pointer" >
                                <img src={aghamsorenaimg} className="w-full lg:h-33 md:h-24 sm:h-16 rounded-full" />
                                <h5 className="mdlg:text-base zero:text-sm text-white">sorena</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="mx-2  cursor-pointer" >
                                <img src={aghamsorenaimg} className="w-full lg:h-33 md:h-24 sm:h-16 rounded-full" />
                                <h5 className="mdlg:text-base zero:text-sm text-white">sorena</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="mx-2  cursor-pointer">
                                <img src={aghamsorenaimg} className="w-full lg:h-33 md:h-24 sm:h-16 rounded-full" />
                                <h5 className="mdlg:text-base zero:text-sm text-white">sorena</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-blackpro">
                            <div className="mx-2  cursor-pointer">
                                <img src={aghamsorenaimg} className="w-full lg:h-33 md:h-24 sm:h-16 rounded-full" />
                                <h5 className="mdlg:text-base zero:text-sm text-white">sorena</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </Fragment>
    )
}

export default Topartist