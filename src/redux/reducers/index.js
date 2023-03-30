import { combineReducers } from "redux";
import { widthplayermusic } from "./another";
import { albumsartist, artistdetails, latestreleaseartist, topsongsartist } from "./artist";
import { lastmusicplayed, minutecurrenttime, minuteduration, musicplaying, numeberloop, secondcurrenttime, secondduration, updateallstateplayermusic } from "./forplayermusic";
import { countplaysong, littlesimilarsong, savesongselected, similarsong, topsongbyartist } from "./song";
import { mouseDownOnSlider, musicended, randomeplaymusic, volumeallmusic, headermobileshow, forloading, overvieworlyricsforsong, showlittleorgreatsimilarsong, focusinputsearch, forloadingsearch, showsongorartistinsearching } from "./truefalse";
import { chartsspecificsong } from "./chartshome";
import { detailssearched } from "./search";

export const reducers = combineReducers({
    updatecopmonent: updateallstateplayermusic,
    mouseDownOnSlider: mouseDownOnSlider,
    musicplaying: musicplaying,
    lastmusicplayed: lastmusicplayed,
    durationminute: minuteduration,
    durationsecond: secondduration,
    currenTimeminute: minutecurrenttime,
    currenTimesecond: secondcurrenttime,
    numeberloop: numeberloop,
    randomeplaymusic: randomeplaymusic,
    musicended: musicended,
    volumeallmusic: volumeallmusic,
    widthplayermusic: widthplayermusic,
    headermobileshow: headermobileshow,
    songselected: savesongselected,
    countplaysong: countplaysong,
    topsongbyartist: topsongbyartist,
    similarsong: similarsong,
    littlesimilarsong: littlesimilarsong,
    forloading: forloading,
    overvieworlyrics: overvieworlyricsforsong,
    showsimilarsong: showlittleorgreatsimilarsong,
    artistdetails: artistdetails,
    topsongsartist: topsongsartist,
    latestreleaseartist: latestreleaseartist,
    albumsartist: albumsartist,
    chartsspecificsong: chartsspecificsong,
    detailssearch: detailssearched,
    focusinputsearch: focusinputsearch,
    forloadingsearch: forloadingsearch,
    showsongorartistinsearching: showsongorartistinsearching
});