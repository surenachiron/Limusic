import React from "react";
import { useSelector } from "react-redux";

const Lyricssong = () => {

    const songalldetails = useSelector(state => state.songselected)

    return (
        <>
            <div>
                <h2 className="text-2xl lg:block zero:hidden">Lyrics</h2>
                <p className="mt-3 text-textlyrics">
                    {songalldetails.sections[1].text.map(o => (
                        <p className={`${o === "" ? "mt-6" : ""} lg:text-sm zero:text-base mb-1`}>
                            {o}
                        </p>
                    ))}
                    <p className="mt-10">
                        {songalldetails.sections[1].footer}
                    </p>
                </p>
            </div>
        </>
    )
}

export default Lyricssong