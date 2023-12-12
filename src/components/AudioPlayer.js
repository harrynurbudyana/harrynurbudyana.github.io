import React from "react";
import iwannagrowoldwithyou from "../audio/iwannagrowoldwithyou.m4a";

class AudioPlayer extends React.Component {
  componentDidMount() {
    // this.audioPlayer.play();
  }

  render() {
    return (
      <audio
        className="object-center mx-auto mt-1 mb-7"
        ref={(ref) => (this.audioPlayer = ref)}
        src={iwannagrowoldwithyou}
        autoPlay
        controls
      >
        <p>
          If you are reading this, it is because your browser does not support
          the audio element.
        </p>
      </audio>
    );
  }
}

export default AudioPlayer;
