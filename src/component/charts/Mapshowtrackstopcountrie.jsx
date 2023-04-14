import React from "react";
import Showtrackstopcountrie from "./Showtrackstopcountrie";
import { useSelector } from "react-redux";

const Mapshowtrackstopcountrie = () => {

    const listtopmusicforcountriecahrts = useSelector(state => state.listtopmusicforcountriecahrts[0])

    return (
        <>
            {listtopmusicforcountriecahrts !== undefined ? listtopmusicforcountriecahrts.map(o => (
                <Showtrackstopcountrie
                    covermusic={o.imagesong !== undefined ? o.imagesong : ""}
                    titlemusic={o.namesong}
                    linkpagetitlemusic={o.linkpagesong}
                    artistmusic={o.nameartist}
                    linkpageartistmusic={o.linkpageartist !== undefined ? o.linkpageartist : ""}
                    numberinalbum={o.numberinalbum}
                >
                </Showtrackstopcountrie>
            )) : <h2 className="text-grayprolight font-bold p-2 my-3">sory we cant coldnt with server</h2>
            }
        </>
    )
}

export default Mapshowtrackstopcountrie