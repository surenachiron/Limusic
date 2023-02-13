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

    const albumsartist = useSelector(state => state.albumsartist)

    let albums = albumsartist.resources.albums
    console.log(Object.keys(albums).map(key => albums[key].attributes.artwork.width))

    return (
        <>
            <div className="flex mb-7 mt-4 kosnanaekhamenei2 rounded-xl">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {Object.keys(albums).slice(0, 8).map(key => (
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
                    {/* {albumsartist.resources.albums.map(o => (
                        <SwiperSlide className="justify-start" key={o.index}>
                            <Albumsbyartist
                                namealbume={o.attributes.name}
                                artist={o.attributes.artistName}
                                linkpagealbume={o.id}
                                covermusic={o.attributes.artwork.url}
                                widthforcovermusic={o.attributes.artwork.width}
                                heightforcovermusic={o.attributes.artwork.height}
                            ></Albumsbyartist>
                        </SwiperSlide>
                    ))} */}
                </Swiper>
            </div>
        </>
    )
}

export default Mapalbumbyartist