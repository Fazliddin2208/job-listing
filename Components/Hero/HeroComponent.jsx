import React from 'react'
import style from './hero.module.scss'
import Image from 'next/image'
import HeroImg from '@/public/images/heroimg.svg'
import { Grid, Text } from '@chakra-ui/react'

export default function HeroComponent() {
  return (
    <section className={style.wrapper}>
        <div className={`container ${style.hero}`}>
            <Grid alignContent={'center'} className={style.hero__infos}>
                <div className={style.hero__infos__main}>
                    <Text fontSize="45px" lineHeight={'normal'} fontWeight={600} width={'70%'}>Find a job that suits your interest & skills.</Text>
                    <Text width={'70%'} margin={'20px 0'}>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</Text>
                    <div></div>
                </div>
                <div className={style.hero__infos__pic}>
                    <Image src={HeroImg} alt="hero" width={300} height={300} />
                </div>
            </Grid>
            <div className={style.hero__cards}>

            </div>
        </div>
    </section>
  )
}
