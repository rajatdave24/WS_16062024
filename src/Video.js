import React from "react";

const Video =({src}) => {

    const style={
        position: 'relative',
        justifySelf:'centre',
        alignItems:'centre',
        height:'30vh',
        width: '30vw'
    }

    return(
        <>
        <iframe
        allowFullScreen
        frameborder="0"
        height="80%"
        width='85%'
        style={style}
        src={src}
      />

      </>
    )
}

export default Video;