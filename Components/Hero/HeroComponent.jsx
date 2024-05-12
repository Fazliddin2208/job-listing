import React from 'react'
import style from './hero.module.scss'

export default function HeroComponent() {
  return (
    <div className={style.wrapper}>
        <div className={`container ${style.hero}`}>
            <div className={style.hero__infos}>
                <div className={style.hero__infos__main}>

                </div>
                <div className={style.hero__infos__pic}>
                    
                </div>
            </div>
            <div className={style.hero__cards}>

            </div>
        </div>
    </div>
  )
}
