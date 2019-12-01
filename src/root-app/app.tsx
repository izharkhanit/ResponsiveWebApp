import React from 'react'
import { CSSObject } from 'styled-components'
// import { AllIndustries } from '../apps/all-industries/all-industries-page'
import { NavMenu } from '../apps/nav-menu/nav-menu-page';


const formStyle: CSSObject = {
    display: 'flex',
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 3,
    boxShadow: '0 1px 2px rgba(0,0,0,.05)',
    margin: 20,
    padding: 20,
}

export const App = () => {
    return (
        <div style={formStyle}>
            <NavMenu />
            {/* To DO */}
            {/* <AllIndustries /> */}
        </div>
    )
};
