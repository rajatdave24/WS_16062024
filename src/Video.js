import React from "react";

const Video =({src}) => {

    const style={
        position: 'relative',
        justifySelf:'centre',
        left:'10%' 
    }

    return(
        <>
        <iframe
        allowFullScreen
        frameborder="0"
        height="60%"
        width='35%'
        style={style}
        src={'//www.youtube.com/embed/AzS_BqFefGQ'}
      />

      </>
    )
}

export default Video;