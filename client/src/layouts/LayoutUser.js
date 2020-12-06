import React from 'react'
import { AbouUser } from '../components/AbouUser'
import { BlogUser } from '../components/BlogUser'
import { Footer } from '../components/Footer'
import { IntroductionCard } from '../components/IntroductionCard'
import { NavUser } from '../components/NavUser'
import { PromoUser } from '../components/PromoUser'
import { SlideUser } from '../components/SlideUser'

export const LayoutUser = () => {
    return (
        <>
            <header className="header">
                <NavUser/>
                <SlideUser/>
            </header>
            <main>
                <AbouUser/>
                <IntroductionCard/>
                <PromoUser/>
                <BlogUser/>
            </main>
            <Footer/>            
        </>
    )
}
