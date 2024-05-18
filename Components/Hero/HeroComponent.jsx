import React from 'react'
import style from './hero.module.scss'
import Image from 'next/image'
import HeroImg from '@/public/images/heroimg.svg'
import { Flex, Text } from '@chakra-ui/react'

export default function HeroComponent() {
  return (
    <section className={style.wrapper}>
        <div className={`container ${style.hero}`}>
            <Flex alignContent={'center'} className={style.hero__infos}>
                <div className={style.hero__infos__main}>
                    <Text color='blue.400' fontSize="50px">Find a job that suits your interest & skills.</Text>
                    <p>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                </div>
                <div className={style.hero__infos__pic}>
                    <Image src={HeroImg} alt="hero" width={300} height={300} />
                </div>
            </Flex>
            <div className={style.hero__cards}>

            </div>
        </div>
    </section>
  )
}
