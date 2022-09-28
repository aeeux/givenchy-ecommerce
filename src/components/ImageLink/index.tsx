import React, {useState} from 'react'
import { DataType } from '../../containers/Home'
import './style.scss'
import { motion } from 'framer-motion'
import {defaultTransition} from '../../utils/transition'
import { navigate } from 'gatsby'

type Props = {
    element: DataType,
    index: number;
}

export default function ImageLink({index, element}: Props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const navigateTo = () => {
    navigate(element.slug)
  }


  return (
    <>
    <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    style={{ color: isHovering ? 'lightblue' : 'yellow', border: isHovering ? '8px solid' : '0px', }}
    className='m-12 transition-all delay-100 ease-in-out'
    >
    <motion.img
    onClick={navigateTo}    
    className='image-link-item'
    layoutId={`container-${index} transition-all delay-50 hover:border-8 border-yellow-500`}
    transition={defaultTransition}
    src={element.cover}
    />
    </div>
    </>
  )
}
