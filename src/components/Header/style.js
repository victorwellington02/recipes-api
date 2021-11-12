import styled  from 'styled-components'

export const Header = styled.div`
    top: 15px;
    width: 100%;
    background-image: url(${props => props.backgroundImage});
    background-position-y: -23rem;
    background-size: 100% 1303px;
    background-repeat: no-repeat;
    height: 903px;
`

export const ContainerHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%
    height: 100%;
`

export const ImageLogo = styled.img`
    width: 48px;
    margin-left: 4rem;
    margin-top: 25px;
`

export const ImageBackground = styled.img`
`

export const ParagraphsOptions = styled.p`
    text-align: left;
    font: normal normal normal 24px/32px Hurme Geometric Sans 1;
    letter-spacing: 2.52px;
    color: #373737;
    opacity: 1;
    margin-right: 4rem;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
        border: solid 2px;
        padding: 7px;
    }
`

export const BoxHeader = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderTitle = styled.h1`
    margin-top: 10px;
    letter-spacing: 15.75px;
    color: #373737;
    opacity: 1;
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-text: center;
    width: 100%;
    height: 191px;
    margin-top: 300px;
    font-size: 40px;
`