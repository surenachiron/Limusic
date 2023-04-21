import { combineReducers } from "redux";
import { chartsspecificsong, loadinghomepage, plylistcharttopmusic, plylisttrendmusic, songtrendhomepage, headermobileshow } from "./homepage";
import { countplaysong, littlesimilarsong, playlistpagesongorginalyfake, playlistpagesongorginalyorginaly, savesongselected, showsimilatsongorno, showtopsongorno, similarsong, topsongbyartist, overvieworlyricsforsong, showlittleorgreatsimilarsong } from "./song";
import { albumsartist, artistdetails, latestreleaseartist, playlisttopsongartist, showalbumartist, showlatestrelaseorno, showtopsongornoartist, topsongsartist, forloading } from "./artist";
import { backupdetailsalbumsforplaylist, detailsalbums, loadingalbums, playlistalbumpage } from "./albums";
import { disableorallowtop100, listcountrieforcharts, listtopmusicforcountriecahrts, loadinglistchart, loadingtracktopcountrie, playlisttrackschartforcountrie } from "./charts";
import { playlistfavouritetracks, tracksfavourite } from "./favourite";
import { detailssearched, focusinputsearch, forloadingsearch, showsongorartistinsearching } from "./search";
import { isplayorispause, forclosemusiccontrol, volumemusic, currenttimemusic, durationtimemusic, numberretweet, numberplaysonginplaylist, howpageplayedmusic, activerandom, ismusicwaiting, widthplayermusic, mouseDownOnSlider, currenttimelikedmusicformusicplayer } from "./forplayermusic";

export const reducers = combineReducers({
    /// home
    loadinghomepage: loadinghomepage,
    songtrendhomepage: songtrendhomepage,
    plylisttrendmusic: plylisttrendmusic,
    chartsspecificsong: chartsspecificsong,
    plylistcharttopmusic: plylistcharttopmusic,
    headermobileshow: headermobileshow,
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
    overvieworlyrics: overvieworlyricsforsong,
    showsimilarsong: showlittleorgreatsimilarsong,
    /// artist
    artistdetails: artistdetails,
    topsongsartist: topsongsartist,
    showtopsongornoartist: showtopsongornoartist,
    latestreleaseartist: latestreleaseartist,
    showlatestrelaseorno: showlatestrelaseorno,
    albumsartist: albumsartist,
    showalbumartist: showalbumartist,
    playlisttopsongartist: playlisttopsongartist,
    forloading: forloading,
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
    /// favourite
    tracksfavourite: tracksfavourite,
    playlistfavouritetracks: playlistfavouritetracks,
    /// search
    detailssearch: detailssearched,
    focusinputsearch: focusinputsearch,
    forloadingsearch: forloadingsearch,
    showsongorartistinsearching: showsongorartistinsearching,
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
    widthplayermusic: widthplayermusic,
    mouseDownOnSlider: mouseDownOnSlider,
    currenttimelikedmusicformusicplayer: currenttimelikedmusicformusicplayer
});