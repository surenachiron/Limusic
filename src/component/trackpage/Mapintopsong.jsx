import React from "react";
import { useSelector } from "react-redux";
import Topsong from "./Topsong";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "swiper/css/grid";
import "./swiperslidegrid.css"

const Mapintopsong = () => {

    const topsongalldetails = useSelector(state => state.topsongbyartist)
    const countplaysong = useSelector(state => state.countplaysong)

    return (
        <div className="flex mb-7 mt-4 kosnanaekhamenei2 rounded-xl">
            <Swiper
                modules={[Pagination, Grid]}
                slidesPerView={2}
                grid={{ rows: 3, fill: "row" }}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="myswiper"
            >
                {topsongalldetails.data.map(o => (
                    <SwiperSlide className="justify-start" key={o.index}>
                        <Topsong
                            namemusic={o.attributes.name}
                            artistsong={o.attributes.artistName}
                            linkpagemusic={o.id}
                            linkpageartist={countplaysong.id}
                            covermusic={o.attributes.artwork.url}
                            widthforcovermusic={o.attributes.artwork.width}
                            heightforcovermusic={o.attributes.artwork.height}
                        ></Topsong>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Mapintopsong