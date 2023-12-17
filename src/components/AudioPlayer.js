import React, { useState, useEffect } from "react";
import iwannagrowoldwithyou from "../audio/iwannagrowoldwithyou.mp3";

const AudioPlayer = ({ src }) => {
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const audioElement = new Audio(src);

    audioElement.autoplay = autoplay;

    return () => {
      audioElement.pause();
      audioElement.src = '';
    };
  }, [autoplay, src]);

  const toggleAutoplay = () => {
    setAutoplay((prevAutoplay) => !prevAutoplay);
 };

 return (
  <audio className="object-center mx-auto mt-1 mb-7" controls autoPlay onCompositionStart={toggleAutoplay}>
    <source src={iwannagrowoldwithyou} type="audio/mp3"/>
  </audio>
 );
};

// class AudioPlayer extends React.Component {
//   componentDidMount() {
//     // this.audioPlayer.play();
//   }

//   render() {
//     return (
//       // <iframe className="object-center mx-auto mt-1 mb-7" src={iwannagrowoldwithyou} allow="autoplay"></iframe>
      // <audio
      //   className="object-center mx-auto mt-1 mb-7"
      //   ref={(ref) => (this.audioPlayer = ref)}
      //   src={iwannagrowoldwithyou}
      //   preload="auto"
      //   autobuffer="true"
      //   controls
      // >
      //   <p>
      //     If you are reading this, it is because your browser does not support
      //     the audio element.
      //   </p>
      // </audio>
//     );
//   }
// }

export default AudioPlayer;
