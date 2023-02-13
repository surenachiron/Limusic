import React from "react";
import Latestreleaseartist from "./Latestreleaseartist";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "../trackpage/swiperslidegrid.css"

const Maplatestreleaseartist = () => {


    return (
        <>
            <div className="flex mb-7 mt-4 kosnanaekhamenei2 rounded-xl">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={false}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    className="myswiper"
                >
                    {/* {topsongalldetails.data.map(o => (
                    <SwiperSlide className="justify-start" key={o.index}>
                        <Latestreleaseartist
                            namealbume={o.attributes.name}
                            artist={o.attributes.artistName}
                            linkpagealbume={o.id}
                            covermusic={o.attributes.artwork.url}
                            widthforcovermusic={o.attributes.artwork.width}
                            heightforcovermusic={o.attributes.artwork.height}
                        ></Latestreleaseartist>
                    </SwiperSlide>
                    ))} */}
                </Swiper>
            </div>
        </>
    )
}

export default Maplatestreleaseartist