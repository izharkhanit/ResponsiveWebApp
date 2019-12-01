import React from 'react'
import {
    Logo,
    AnchorLogo,
    AnchorMenu,
    LiItem,
    LiItemMenu,
    NavContainer,
    UlNavLeft,
    UlNavRight,
    HeaderContainer,
    AnchorWork,
    Case,
    CaseAnchor,
    CaseSpan,
    MenuIcon,
    MenuContainer,
    SocialSites,
    UlNavRightMenu,
    SideMenuLeft,
    HorizontalLine,
    AnchorMenuModal,
    LiItemMenuHeader,
    HorizontalLastLine,
    TriangleIcon,
    UlSideMenuLeft,
    LiItemSide,
    UlSideMenuLeftSocial
} from './nav-menu.styled'


export class NavMenuBar extends React.Component {

    public state = {
        hideCrossMenu: false,
        menuIcon: '\u{003D}',
    }

    private onMenuClick = () => {
        this.setState({
            hideCrossMenu: !this.state.hideCrossMenu,
            menuIcon: this.state.hideCrossMenu == true ? '\u{003D}' : '\u{2613}',
        });
    }

    public render() {
        const { hideCrossMenu } = this.state
        return (

            <HeaderContainer style={{ background: hideCrossMenu ? '#0e0e0e' : undefined, transition: `background 1s` }}>
                <NavContainer style={{ borderBottom: hideCrossMenu ? 'unset' : '1px solid' }}>
                    <UlNavLeft>
                        <Logo ><AnchorLogo style={{ color: hideCrossMenu ? 'white' : undefined }}>DEPT</AnchorLogo></Logo>

                    </UlNavLeft>
                    <UlNavRight>
                        <LiItem ><AnchorMenu >MENU</AnchorMenu>
                        </LiItem>
                        <LiItemMenuHeader onClick={this.onMenuClick.bind(this)} >
                            <MenuIcon style={{ color: hideCrossMenu ? 'white' : undefined }}>{this.state.menuIcon} </MenuIcon>
                        </LiItemMenuHeader>
                    </UlNavRight>

                </NavContainer>
                {!hideCrossMenu && (
                    <AnchorWork>WORK</AnchorWork>
                )}

                {hideCrossMenu && (

                    <MenuContainer >
                        <SideMenuLeft >
                            <UlSideMenuLeft>
                                <LiItemSide style={{ opacity: '0.5' }}>LANDEN</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>GLOBAL</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>NEDERLAND</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>UNITED STATES</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>IRELAND</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>UNITED KINGDOM</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>DEUTSCHLAND</LiItemSide>
                                <LiItemSide><TriangleIcon></TriangleIcon>SCHWEIZ</LiItemSide>
                            </UlSideMenuLeft>
                        </SideMenuLeft>

                        <SocialSites>
                            <UlSideMenuLeftSocial>
                                <LiItemSide>FACEBOOK</LiItemSide>
                                <LiItemSide>TWITTER</LiItemSide>
                                <LiItemSide>INSTAGRAM</LiItemSide>
                                <LiItemSide>LINKEDIN</LiItemSide>
                            </UlSideMenuLeftSocial>
                        </SocialSites>

                        <UlNavRightMenu>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>HOME</AnchorMenuModal></LiItemMenu>
                            <HorizontalLine></HorizontalLine>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>WERK</AnchorMenuModal></LiItemMenu>
                            <HorizontalLine></HorizontalLine>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>OVER</AnchorMenuModal></LiItemMenu>
                            <HorizontalLine></HorizontalLine>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>DIENSTEN</AnchorMenuModal></LiItemMenu>
                            <HorizontalLine></HorizontalLine>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>PARTNERS</AnchorMenuModal></LiItemMenu>
                            <HorizontalLine></HorizontalLine>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>STORIES</AnchorMenuModal></LiItemMenu>
                            <HorizontalLine></HorizontalLine>
                            <LiItemMenu><AnchorMenuModal><TriangleIcon></TriangleIcon>VACATURES</AnchorMenuModal></LiItemMenu>
                            <HorizontalLastLine></HorizontalLastLine>
                        </UlNavRightMenu>


                    </MenuContainer>
                )}

                {!hideCrossMenu && (
                    <Case>
                        <CaseAnchor><CaseSpan style={{ color: hideCrossMenu ? '#0e0e0e' : undefined }}>VIEW CASE</CaseSpan></CaseAnchor>
                    </Case>)}
            </HeaderContainer>



        )
    }

}
