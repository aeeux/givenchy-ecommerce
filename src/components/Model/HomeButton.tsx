import React from 'react'
import { ArrowLeft } from 'react-feather'
import { Link } from 'gatsby'

export default function HomeButton() {
  return (
    <div className='home-button'>
        <Link to={"/"} replace className="custom-button">
        <ArrowLeft />
        </Link>
    </div>
  )
}
