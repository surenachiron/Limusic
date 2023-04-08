import { combineReducers } from "redux";
import { widthplayermusic } from "./another";
import { albumsartist, artistdetails, latestreleaseartist, topsongsartist } from "./artist";
import { isplayorispause, forclosemusiccontrol, volumemusic, currenttimemusic, durationtimemusic, numberretweet, numberplaysonginplaylist, howpageplayedmusic, activerandom } from "./forplayermusic";
import { countplaysong, littlesimilarsong, playlistpagesongorginalyfake, playlistpagesongorginalyorginaly, savesongselected, showsimilatsongorno, showtopsongorno, similarsong, topsongbyartist } from "./song";
import { mouseDownOnSlider, musicended, randomeplaymusic, volumeallmusic, headermobileshow, forloading, overvieworlyricsforsong, showlittleorgreatsimilarsong, focusinputsearch, forloadingsearch, showsongorartistinsearching } from "./truefalse";
import { chartsspecificsong, loadinghomepage, plylistcharttopmusic, plylisttrendmusic, songtrendhomepage } from "./homepage";
import { detailssearched } from "./search";

export const reducers = combineReducers({
    /// home
    loadinghomepage: loadinghomepage,
    songtrendhomepage: songtrendhomepage,
    plylisttrendmusic: plylisttrendmusic,
    chartsspecificsong: chartsspecificsong,
    plylistcharttopmusic: plylistcharttopmusic,
    /// song
    songselected: savesongselected,
    countplaysong: countplaysong,
    topsongbyartist: topsongbyartist,
    showtopsongorno: showtopsongorno,
    similarsong: similarsong,
    showsimilatsongorno: showsimilatsongorno,
    littlesimilarsong: littlesimilarsong,
    playlistpagesongorginalyorginaly: playlistpagesongorginalyorginaly,
    playlistpagesongorginalyfake: playlistpagesongorginalyfake,
    /// artist
    artistdetails: artistdetails,
    topsongsartist: topsongsartist,
    latestreleaseartist: latestreleaseartist,
    albumsartist: albumsartist,
    /// playmusic
    isplayorispause: isplayorispause,
    forclosemusiccontrol: forclosemusiccontrol,
    volumemusic: volumemusic,
    currenttimemusic: currenttimemusic,
    durationtimemusic: durationtimemusic,
    activerandom: activerandom,
    numberretweet: numberretweet,
    numberplaysonginplaylist: numberplaysonginplaylist,
    howpageplayedmusic: howpageplayedmusic,
    /// search
    detailssearch: detailssearched,
    focusinputsearch: focusinputsearch,
    forloadingsearch: forloadingsearch,
    showsongorartistinsearching: showsongorartistinsearching,
    //// truefalse
    mouseDownOnSlider: mouseDownOnSlider,
    randomeplaymusic: randomeplaymusic,
    musicended: musicended,
    volumeallmusic: volumeallmusic,
    headermobileshow: headermobileshow,
    forloading: forloading,
    overvieworlyrics: overvieworlyricsforsong,
    showsimilarsong: showlittleorgreatsimilarsong,
    /// amother
    widthplayermusic: widthplayermusic,
});