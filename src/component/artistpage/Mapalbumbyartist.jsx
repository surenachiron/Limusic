import React, { useEffect, useState } from "react";
import Albumsbyartist from "./Albumsbyartist";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination"
import "../trackpage/swiperslidegrid.css"
import { useSelector } from "react-redux";

const Mapalbumbyartist = () => {

    const albumsartist = useSelector(state => state.albumsartist)

    let albums = albumsartist.resources.albums

    const [widthplayermusicc, swidthplayermusicc] = useState(window.innerWidth);
    const upadatewidthplayermusic = () => {
        swidthplayermusicc(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", upadatewidthplayermusic);
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [window]);
    useEffect(() => {
        window.addEventListener("resize", upadatewidthplayermusic);
        return () => window.removeEventListener("resize", upadatewidthplayermusic);
    }, [<Mapalbumbyartist />]);
    let lengthslide = ''
    if (widthplayermusicc <= 640) lengthslide = 2
    else if (widthplayermusicc <= 768) lengthslide = 3
    else if (widthplayermusicc <= 1024 || widthplayermusicc >= 1024) lengthslide = 4

    ///////
    // انجام دادن سورت کردن آلبوم های بر اساس تعداد آهنگ ها
    //////

    

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
                    {Object.keys(albums).reverse().slice(0, 8).map(key => (
                        <SwiperSlide className="justify-start" key={key}>
                            <Albumsbyartist
                                namealbume={albums[key].attributes.name}
                                linkpagealbume={albums[key].id}
                                covermusic={albums[key].attributes.artwork.url}
                                widthforcovermusic={albums[key].attributes.artwork.width}
                                heightforcovermusic={albums[key].attributes.artwork.height}
                                releasedata={albums[key].attributes.releaseDate}
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