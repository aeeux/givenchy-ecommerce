import React from 'react';
import { DataType } from '../../containers/Home';
import { motion, Variants } from 'framer-motion'
import './style.scss'
import { defaultTransition } from '../../utils/transition';
import HomeButton from './HomeButton';

type Props = {
    pageContext: DataType
}

const variants:Variants = {

    initial: {
        
        opacity: 0,
        y: 100,

    },

    animate: {
        opacity: 1,
        y: 0,
    }
}

export default function Model({pageContext}: Props) {
    return (
        <>
        <HomeButton />
        <div className='model-container'>
            <div className='image-wrapper'>
                <motion.img
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                src={pageContext.cover}
                transition={defaultTransition}
                />
            </div>
        </div>
        </>
    )
}