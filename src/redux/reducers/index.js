import { combineReducers } from "redux";
import { widthplayermusic } from "./another";
import { albumsartist, artistdetails, latestreleaseartist, playlisttopsongartist, showalbumartist, showlatestrelaseorno, showtopsongornoartist, topsongsartist } from "./artist";
import { isplayorispause, forclosemusiccontrol, volumemusic, currenttimemusic, durationtimemusic, numberretweet, numberplaysonginplaylist, howpageplayedmusic, activerandom, ismusicwaiting } from "./forplayermusic";
import { countplaysong, littlesimilarsong, playlistpagesongorginalyfake, playlistpagesongorginalyorginaly, savesongselected, showsimilatsongorno, showtopsongorno, similarsong, topsongbyartist } from "./song";
import { mouseDownOnSlider, musicended, randomeplaymusic, volumeallmusic, headermobileshow, forloading, overvieworlyricsforsong, showlittleorgreatsimilarsong, focusinputsearch, forloadingsearch, showsongorartistinsearching } from "./truefalse";
import { chartsspecificsong, loadinghomepage, plylistcharttopmusic, plylisttrendmusic, songtrendhomepage } from "./homepage";
import { detailssearched } from "./search";
import { backupdetailsalbumsforplaylist, detailsalbums, loadingalbums, playlistalbumpage } from "./albums";
import { disableorallowtop100, listcountrieforcharts, listtopmusicforcountriecahrts, loadinglistchart, loadingtracktopcountrie, playlisttrackschartforcountrie } from "./charts";

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
    showtopsongornoartist: showtopsongornoartist,
    latestreleaseartist: latestreleaseartist,
    showlatestrelaseorno: showlatestrelaseorno,
    albumsartist: albumsartist,
    showalbumartist: showalbumartist,
    playlisttopsongartist: playlisttopsongartist,
    /// Albums
    detailsalbums: detailsalbums,
    backupdetailsalbumsforplaylist: backupdetailsalbumsforplaylist,
    loadingalbums: loadingalbums,
    playlistalbumpage: playlistalbumpage,
    /// charts
    listcountrieforcharts: listcountrieforcharts,
    loadinglistchart: loadinglistchart,
    disableorallowtop100: disableorallowtop100,
    listtopmusicforcountriecahrts: listtopmusicforcountriecahrts,
    playlisttrackschartforcountrie: playlisttrackschartforcountrie,
    loadingtracktopcountrie: loadingtracktopcountrie,
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
    ismusicwaiting: ismusicwaiting,
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
    /// another
    widthplayermusic: widthplayermusic,
});