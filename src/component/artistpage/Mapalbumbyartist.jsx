import React from "react";
import Albumsbyartist from "./Albumsbyartist";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "../trackpage/swiperslidegrid.css"
import { useSelector } from "react-redux";

const Mapalbumbyartist = () => {

    const albumsartist = useSelector(state => state.albumsartist.objects)

    const widthplayermusic = useSelector(state => state.widthplayermusic)
    let lengthslide = ''
    if (widthplayermusic <= 640) lengthslide = 2
    else if (widthplayermusic <= 768) lengthslide = 3
    else if (widthplayermusic <= 1024 || widthplayermusic >= 1024) lengthslide = 4


    return (
        <>
            <div className="flex mb-7 mt-3 kosnanaekhamenei2 rounded-xl">
                <Swiper
                    slidesPerView={lengthslide}
                    spaceBetween={30}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {albumsartist.map(key => (
                        <SwiperSlide className="justify-start" key={key}>
                            <Albumsbyartist
                                namealbume={key.name}
                                linkpagealbume={key.playParams.id}
                                covermusic={key.artwork.url}
                                widthforcovermusic={key.artwork.width}
                                heightforcovermusic={key.artwork.height}
                                releasedata={key.releaseDate}
                            >
                            </Albumsbyartist>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Mapalbumbyartist