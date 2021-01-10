import React, {useEffect, useState, useRef} from 'react'
import {Image, Transformation} from 'cloudinary-react'

function CImage({cloudName, photoId, className, crop, aspectRatio=null, gravity=null, effect=null}) {
    const container = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [w, setW] = useState(0);
    const handleLoad = () => {
        setLoaded(true);
    }
    useEffect(() => {
        const rect = container.current.getBoundingClientRect();
        const currentWidth = parseInt(rect.width * 2);
        setW(currentWidth);
    }, [])
    return (
        <div ref={container} className={className}>
            {!loaded && 
                <Image secure="true" cloudName={cloudName} publicId={photoId} style={{width: "100%", display: "block"}}>
                    <Transformation effect="blur:1000" quality="10" width="100" crop={crop} aspectRatio={aspectRatio} gravity={gravity}/>
                </Image>
            }
            {w > 0 && <Image secure="true" cloudName={cloudName} publicId={photoId} onLoad={handleLoad} style={{width: "100%", display: "block"}}>
                <Transformation width={w} crop={crop} aspectRatio={aspectRatio} gravity={gravity} effect={effect}/>
            </Image>}
        </div>
    )
}

export default CImage
