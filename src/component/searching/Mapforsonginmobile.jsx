import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "../trackpage/swiperslidegrid.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'

const Mapforsonginmobile = () => {

    const getdetailsfortextsearch = useSelector(state => state.detailssearch)

    return (
        <>
            <div className="mt-2 border-1 rounded-2xl border-gray-600">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {getdetailsfortextsearch.tracks.hits.map((o, index) =>
                        <SwiperSlide className="justify-start" key={index}>
                            <NavLink to={`/song/${o.track.key}`}>
                                <div className="flex flex-col items-center pt-5 px-5 transition-all">
                                    <img src={o.track.images.coverart !== undefined ? o.track.images.coverart : ananymousartist } alt={`cover ${o.track.title}`} width='150' height='150' className="rounded-2xl" />
                                    <div className="mt-3">
                                        <h3 className="text-sm font-bold">{o.track.title.length >= 10 ? o.track.title.slice(0, 10) + " .." : o.track.title}</h3>
                                        <h5 className="text-xs font-medium text-grayprolight mt-2">{o.track.subtitle.length >= 10 ? o.track.subtitle.slice(0, 10) + ".." : o.track.subtitle}</h5>
                                    </div>
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    )
}

export default Mapforsonginmobile