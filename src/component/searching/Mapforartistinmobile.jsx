import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "../trackpage/swiperslidegrid.css"
import { useSelector } from "react-redux";
import ananymousartist from '../../assets/images/ananymousformusicorartist.png'
import { NavLink } from "react-router-dom";

const Mapforartistinmobile = () => {

    const getdetailsfortextsearch = useSelector(state => state.detailssearch)

    return (
        <>
            <div className="mt-2 border-1 rounded-2xl border-gray-600">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={5}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {getdetailsfortextsearch.artists.hits.map(o =>
                        <SwiperSlide className="justify-start">
                            <NavLink to={`/artist/${o.artist.adamid}`}>
                                <div className="flex flex-col items-center pt-3 px-5 transition-all">
                                    <img src={o.artist.avatar !== undefined ? o.artist.avatar : ananymousartist} alt={`cover image ${o.artist.name}`} width='150' height='150' className="rounded-2xl" />
                                    <h3 className="text-base mt-3">{o.artist.name.length >= 15 ? o.artist.name.slice(0, 15) + " .." : o.artist.name}</h3>
                                </div>
                            </NavLink>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    )
}

export default Mapforartistinmobile