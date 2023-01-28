import { combineReducers } from "redux";
import { widthplayermusic } from "./another";
import { lastmusicplayed, minutecurrenttime, minuteduration, musicplaying, numeberloop, secondcurrenttime, secondduration, updateallstateplayermusic } from "./forplayermusic";
import { mouseDownOnSlider, musicended, randomeplaymusic, volumeallmusic, headermobileshow } from "./truefalse";

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
    headermobileshow: headermobileshow
});