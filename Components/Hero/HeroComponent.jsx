import React from "react";
import style from "./hero.module.scss";
import Image from "next/image";
import HeroImg from "@/public/images/heroimg.svg";
import { Flex, Grid, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
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
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </Text>
            <Flex border={'1px solid'}>
              <InputGroup
                style={{
                  alignItems: "center",
                  paddingLeft: "20px",
                //   borderLeft: "1px solid #E4E5E8",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  style={{ top: "auto", left: 15 }}
                >
                  <FontAwesomeIcon icon={faSearch} color="#0066FF" />
                </InputLeftElement>
                <Input type="tel" placeholder="Job title, keyword, company" />
              </InputGroup>
              <InputGroup
                style={{
                  alignItems: "center",
                  paddingLeft: "20px",
                //   borderLeft: "1px solid #E4E5E8",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  style={{ top: "auto", left: 15 }}
                >
                  <FontAwesomeIcon icon={faSearch} color="#0066FF" />
                </InputLeftElement>
                <Input type="tel" placeholder="Job title, keyword, company" />
              </InputGroup>
              <button className="btn-primary">Find Job</button>
            </Flex>
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
