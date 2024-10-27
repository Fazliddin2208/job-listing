import React from "react";
import style from "./hero.module.scss";
import Image from "next/image";
import HeroImg from "@/public/images/heroimg.svg";
import {
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HeroComponent() {
  return (
    <section className={style.wrapper}>
      <div className={`container ${style.hero}`}>
        <Grid alignContent={"center"} className={style.hero__infos}>
          <div className={style.hero__infos__main}>
            <Text
              fontSize="45px"
              lineHeight={"normal"}
              fontWeight={600}
              width={"70%"}
            >
              Find a job that suits your interest & skills.
            </Text>
            <Text width={"70%"} margin={"20px 0"}>
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin 
            </Text>
            <Grid alignItems={"center"} gridTemplateColumns={'40% 40% 20%'} gap={'0px'} style={{
              background: '#fff',
              padding: 10,
              borderRadius: 10
            }} className={style.hero__infos__inputGroup}>
              <InputGroup
                style={{
                  alignItems: "center",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  style={{ top: "auto", left: 5 }}
                >
                  <FontAwesomeIcon icon={faSearch} color="#0066FF" />
                </InputLeftElement>
                <Input type="tel" placeholder="Job title, keyword, company"  />
              </InputGroup>
              <InputGroup
                style={{
                  alignItems: "center",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  style={{ top: "auto", left: 5 }}
                >
                  <FontAwesomeIcon icon={faSearch} color="#0066FF" />
                </InputLeftElement>
                <Input type="tel" placeholder="Your location" style={{
                  paddingLeft: 45,
                  border: 'none',
                  outline: "none"
                }} />
              </InputGroup>
              <button className="btn-primary" style={{
                padding: '10px 20px'
              }}>Find a Job</button>
            </Grid>
          </div>
          <div className={style.hero__infos__pic}>
            <Image src={HeroImg} alt="hero" width={300} height={300} />
          </div>
        </Grid>
        <div className={style.hero__cards}></div>
      </div>
    </section>
  );
}
