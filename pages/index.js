import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { updateScreenType } from 'slices/screenSlice'
import desktopImage from '../public/assets/home/desktop/image-hero.jpg'
import tabletImage from '../public/assets/home/tablet/image-hero.jpg'
import mobileImage from '../public/assets/home/mobile/image-hero.jpg'

export default function Home() {

  const screenType = useAppSelector(state => state.screen.screenType)
  
  return (
    <div className={`dark-view`}>
      <div className={`container ${styles.hero}`}>
        <Image src={screenType === 'desktop' ? desktopImage : screenType === 'tablet' ? tabletImage : mobileImage}
        alt='pic'
        objectFit=''
        />
        <div className={`flexed flex-col ${styles.hero_text}`}>
          <p className='new-product'>new product</p>
          <h1 className={`${styles.hero_header}`}>xx99 mark ii<br></br>headphones</h1>
          <p className={`${styles.hero_content}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
          <button className='btn default-btn-1'>see product</button>
        </div>
      </div>
    </div>
  )
}
