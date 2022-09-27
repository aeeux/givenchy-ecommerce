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
  const [isHover, setIsHover] = useState();

  const navigateTo = () => {
    navigate(element.slug)
  }


  return (
    <>
    <motion.img
    onClick={navigateTo}
    style={{ backgroundColor: isHover ? 'lightblue' : 'yellow' }}
    className='image-link-item'
    layoutId={`container-${index} transition-all delay-50 hover:border-8 border-yellow-500`}
    transition={defaultTransition}
    src={element.cover}
    />
    </>
  )
}
