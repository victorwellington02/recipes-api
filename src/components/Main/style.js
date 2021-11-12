import styled from 'styled-components'

export const ContainerLatest = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #F2F4F1;
    width: 100%;
    height: 914px;
    padding-right: 2%;
    padding-left: 2%;
`

export const Title = styled.h2`
text-align: center;
font: normal normal 600 40px/50px Hurme Geometric Sans 1;
letter-spacing: 1.72px;
color: #373737;
text-transform: uppercase;
opacity: 1;
&:after {
    content: "";
    width: 60px;
    height: 5px;
    background: #000;
    display: block;
    position: relative;
    top: 20px;
    left: 80px;
}
`

export const Image = styled.img`
    width: 350px;
    margin-bottom: 160px;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    margin-top: 100px;
    box-shadow: 0px 7px 6px #00000029;
    height: 529px;
`

export const BoxParagraph = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 15vh;
`

export const Paragraph = styled.p`
    font-size: 30px;
    &:before {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        display: block;
        position: relative;
        bottom: 30px;
        left: 75px;
    }
`

export const ContainerAbout = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Lorem = styled.p`
    text-align: justify;
    margin-top: 100px;
    width: 100%
    font-size: 20px;
`

export const AboutTitle = styled.h2`
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 10px;
    &:after {
        content: "";
        width: 50px;
        height: 5px;
        margin-top: 20px;
        background: #000;
        display: block;
        position: relative;
        left: 3rem;
    }
`

export const BoxAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 7%;
    width: 60%;
`

export const ContainerSignup = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DFE4DE;
    height: 464px;
`

export const SubTitle = styled.h2`
    margin-top: 50px;
    text-transform: uppercase;
    text-align: left;
    font-size: 25px;
    font: normal normal 600 40px/32px Hurme Geometric Sans 1;
    letter-spacing: 4.2px;
    color: #373737;
    opacity: 1;
`

export const Ipt = styled.input`
    margin-top: 40px;
    width: 700px;
    height: 80px;
    padding-left: 20px;
    border: 0;
`

export const BtnSub = styled.button`
    margin-top: 40px;
    margin-bottom: 70px;
    width: 200px;
    height: 60px;
    text-transform: uppercase;
    background: transparent;
    border: solid 4px #000;
    font-size: 20px;
`

export const ImageSpoon = styled.img`
width: 87.5%;
`

export const ParagraphSing = styled.p`
margin-top: 15px;
text-align: left;
font-size: 20px;
font: normal normal normal 32px/32px Hurme Geometric Sans 1;
letter-spacing: 2.05px;
color: #373737;
opacity: 1;
`

export const BoxImage = styled.div`
width: 100%;
`

export const ContainerLatestTitle = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
background-color: #F2F4F1;
width: 100%;
height: 250px;
`