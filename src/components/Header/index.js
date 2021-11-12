import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./style"

export function Header(){

const data = useStaticQuery(graphql`
query {
    alldata {
    headers {
      btnsubscribe
      btnrecipes
      btnabout
      backgroundimg {
        url
      }
      headertitle
      logoheader { 
        url
      }
    }
  }
}
  
`)

const {btnsubscribe, btnrecipes, btnabout, backgroundimg, headertitle, logoheader} = data.alldata.headers[0]

   return(
       <>
        <S.Header backgroundImage={backgroundimg.url}>
        <S.ContainerHeader>
        <S.ImageLogo src={logoheader.url} alt=""/>
        <S.BoxHeader>
        <S.ParagraphsOptions>{btnabout}</S.ParagraphsOptions>
        <S.ParagraphsOptions>{btnrecipes}</S.ParagraphsOptions>
        <S.ParagraphsOptions>{btnsubscribe}</S.ParagraphsOptions>
        </S.BoxHeader>
        </S.ContainerHeader>
        <S.BoxTitle>
        <S.HeaderTitle>{headertitle}</S.HeaderTitle>
        </S.BoxTitle>
        </S.Header>
       </>
   )  
}