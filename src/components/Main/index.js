import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as S from './style'

export function Main(){

const data = useStaticQuery(graphql`
query {
    alldata {
    mains {
      titleabout
      titlelatest
      titlesubscribe
      paragraphnews
      paragraphfood3
      paragraphfood2
      paragraphfood1
      paragraphabout
      inputemail
      imgfood1 {
        url
      }
      imgfood2 {
        url
      }
      imgfood3 {
        url
      }
      imgspoon {
        url
      }
    }
    }
  }   
`)

const {titleabout, titlelatest, titlesubscribe, paragraphnews, paragraphfood3,paragraphfood2, paragraphfood1, paragraphabout, 
    inputemail, imgfood1, imgfood2, imgfood3, imgspoon} = data.alldata.mains[0]
    return(
        <>
            <S.ContainerLatestTitle>
                <S.Title>{titlelatest}</S.Title>
            </S.ContainerLatestTitle>
            <S.ContainerLatest>
                <S.Box>
                    <figure>
                        <S.Image src={imgfood1.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphfood1}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgfood2.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphfood2}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgfood3.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphfood3}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
            </S.ContainerLatest>
            <S.ContainerAbout>
                <S.BoxImage>
                    <S.ImageSpoon src={imgspoon.url} alt="" />
                </S.BoxImage>
                <S.BoxAbout>
                    <S.AboutTitle>{titleabout}</S.AboutTitle>
                    <S.Lorem>{paragraphabout}</S.Lorem>
                </S.BoxAbout>
            </S.ContainerAbout>
            <S.ContainerSignup>
                <S.SubTitle>{titlesubscribe}</S.SubTitle>
                <S.ParagraphSing>{paragraphnews}</S.ParagraphSing>
                <S.Ipt type="email" placeholder="Your Email" />
                <S.BtnSub>submit</S.BtnSub>
            </S.ContainerSignup>
        </>
    )
}