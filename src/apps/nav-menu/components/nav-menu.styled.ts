import styled from 'styled-components'
// import breakpoint from 'styled-components-breakpoint'
import { createBreakpoint, createMap } from 'styled-components-breakpoint'
import myImage from '../../../root-app/static/images/background.png'

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

const breakpoint = createBreakpoint(breakpoints);
const map = createMap(breakpoints);

export const HeaderContainer = styled.header({
    backgroundImage: `url(${myImage})`,
    width: '1400px',
    height: '940px',
    backgroundSize: '200%',
    backgroundPositionX: '-216px',
    backgroundPositionY: '-106px',
    backgroundRepeat: 'no-repeat',
    [`${breakpoint('md', 'lg')}`]: {
        background: 'green',
    }
})

export const NavContainer = styled.nav({
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 100px',
    borderBottom: '1px solid',
})

export const UlNavLeft = styled.ul({
    display: 'flex',
    justifyContent: 'flex-start',
    listStyleType: 'none',
    flex: 1,
    alignItems: 'center',
    padding: 0,
})

export const UlNavRight = styled.ul({
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'flex-end',
    textDecoration: 'none',
})

export const LiItem = styled.li({
    fontSize: 16,
    marginTop: '15px',
    whiteSpace: 'nowrap',
    '&.toggle': {
        // to do
        textDecoration: 'underline',
    },
})

export const Logo = styled.li({
    ['&.toggle']: {
        // to do
        textDecoration: 'none',
    },
})

export const AnchorLogo = styled.a({
    color: 'black',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '28px',
    '&.hover': {
        transform: `scale(1.5)`,
    },
})

export const LiItemMenuHeader = styled.li({
    fontSize: 16,
    padding: '15 5',
    whiteSpace: 'nowrap',
})

export const LiItemMenu = styled.li({
    fontSize: 16,
    whiteSpace: 'nowrap',
})

export const AnchorMenu = styled.a({
    width: '30px',
    height: '32px',
    cursor: 'pointer',
    marginRight: '13px',
    fontFamily: 'Teko',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.78,
    letterSpacing: 'normal',
    color: '#0e0e0e',
    ['&:hover']: {
        color: '#0e0e0e',
    },
})

export const MenuIcon = styled.a({
    cursor: 'pointer',
    fontFamily: 'Teko',
    fontSize: '38px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.78,
    letterSpacing: 'normal',
    color: '#0e0e0e',
    marginLeft: '13px',
    ['&:hover']: {
        textDecoration: 'none',
    },
})

export const AnchorWork = styled.div({
    position: 'relative',
    top: '79px',
    left: '96px',
    width: '798px',
    height: '400px',
    fontFamily: 'Teko',
    fontSize: '400px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: 'normal',
    color: '#0e0e0e',
    textDecoration: 'none',
})

export const Case = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '330px',
    marginRight: '100px',
})
export const CaseAnchor = styled.a({
    width: '170px',
    height: '50px',
    backgroundColor: '#0e0e0e',

})
export const CaseSpan = styled.span({
    display: 'block',
    color: 'white',
    cursor: 'pointer',
    paddingTop: '10px',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 2,
    letterSpacing: 'normal',
})

// Menu Modal

export const MenuContainer = styled.div({
    display: 'flex',
    width: '100%',
})

export const TriangleIcon = styled.a({
    display: 'none',
    width: 0,
    height: 0,
    marginBottom: 10,
    marginRight: 40,
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    borderLeft: '20px solid white',
    lineHeight: 0,
    transform: 'rotate(-360deg)',
})

//................. Side Menu Left style Start...........................//

export const SideMenuLeft = styled.nav({
    boxOrient: 'vertical',
    boxDirection: 'normal',
    flexDirection: 'column',
    borderTopWidth: 0,
    top: '130px',
    marginLeft: '63px',
    backgroundColor: '#0e0e0e',
    position: 'absolute',
    paddingTop: 5,
    paddingBottom: 0,
    marginTop: 0,
    zIndex: 1,
    boxAlign: "center",
    alignItems: 'flex-start',
})

export const UlSideMenuLeft = styled.ul({
    display: 'inline-block',
    listStyle: 'none',
    boxFlex: 1,
    flex: 1,
    color: 'white',

})

export const UlSideMenuLeftSocial = styled.ul({
    display: 'inline-block',
    listStyle: 'none',
    boxFlex: 1,
    flex: 1,
    color: 'white',
    marginLeft: '55px',

})

export const LiItemSide = styled.li({
    cursor: 'pointer',
    [LiItem]: {
        fontSize: '12px',
        marginTop: '0',
    },
    [`&:hover ${TriangleIcon}`]: {
        display: 'inline-block',
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderLeft: '5px solid white',
        marginBottom: 0,
        marginRight: '5px',

    },
})

//................. Side Menu Left style END ...........................//

//................. Menu right style ...........................//

export const NavMenuRight = styled.nav({
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 100px',
})

export const UlNavRightMenu = styled.ul({
    width: '1200px',
    marginLeft: '-50px',
    color: 'white',
    textAlign: 'right',
    lineHeight: 1,
    listStyleType: 'none',
})



export const AnchorMenuModal = styled.a({
    cursor: 'pointer',
    fontFamily: 'Teko',
    fontSize: '110px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: 'normal',
    color: '#ffffff',
    textAlign: 'right',
    ['&:hover']: {
        textDecoration: 'none',
        color: '#ffffff',
    },
    [`&:hover ${TriangleIcon}`]: {
        display: 'inline-block',
    },
})

export const HorizontalLine = styled.hr({
    height: '1px',
    opacity: 0.5,
    backgroundColor: '#a3a3a3',
    margin: 0,
})

export const HorizontalLastLine = styled.hr({
    display: "none",
})

//................. Menu right style END...........................//


export const SocialSites = styled.nav({
    width: '106px',
    height: '100px',
    marginTop: 'auto',

})