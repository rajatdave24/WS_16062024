import React from "react";

const Video =({src}) => {

    const style={
        position: 'relative',
        justifySelf:'centre',
        alignItems:'centre',
        height:'30vh',
        width: '75vw'
    }

    return(
        <>
        <iframe
        allowFullScreen
        frameborder="0"
        height="30vh"
        width='75vw'
        style={style}
        src={src}
      />

      </>
    )
}

export default Video;