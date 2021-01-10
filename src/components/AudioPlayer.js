import React, {useState, useRef, useEffect} from 'react'
import {FaPlay, FaPause} from 'react-icons/fa'

function AudioPlayer({
    src,
    className,
    playCallback,
}) {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioTag = useRef(null);
    useEffect(() => {
        audioTag.current.ontimeupdate = (e) => {
            setProgress(e.target.currentTime / e.target.duration);
        }
    },[]);
    const pause = () => {
        audioTag.current.pause();
        playCallback(false);
        setPlaying(false);
    }
    const play = () => {
        audioTag.current.play();
        playCallback(true);
        setPlaying(true);
    }
    const handleClick = (e) => {
        const boundingClientRect = e.target.getBoundingClientRect();
        const x = e.pageX - boundingClientRect.left;
        const newValue = x * e.target.max / e.target.offsetWidth
        audioTag.current.currentTime = newValue * audioTag.current.duration;
    }
    return (
        <div className={className}>
            <audio src={src} ref={audioTag}/>
            {playing ? <FaPause onClick={pause}/> : <FaPlay onClick={play}/>}
            <progress value={progress} max="1" onClick={handleClick}/>
        </div>
    )
}

export default AudioPlayer
