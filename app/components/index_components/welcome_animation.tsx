import React from 'react'
import {DotLottiePlayer} from '@dotlottie/react-player';

const WelcomeAnimation = () => {
  return (
    <div>
        <DotLottiePlayer
        src={'/Animation - 1708964715195.lottie'}
        autoplay
        loop
        >
        </DotLottiePlayer>
    </div>
  )
}

export default WelcomeAnimation;