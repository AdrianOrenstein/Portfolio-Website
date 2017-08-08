import React from 'react'

import { Image } from 'semantic-ui-react'

import 'semantic-ui-css/components/image.css'

import greyBackground from './GreyBackground2.svg'

const Hero = () => (
    <div>
        <Image src={greyBackground} width='100%' height='screen.height' alt='background'/>
    </div>
)

export default Hero