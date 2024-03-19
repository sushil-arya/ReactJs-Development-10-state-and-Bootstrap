import React from 'react'
import { Header } from './Header'
import Aside from './Aside'
import Footer from './Footer'

export default function Layout(props) {
    return (
                <>
                    <Header />
                        <main>
                            <div className="container h-100 a_cont">
                                <div className="row h-100">
                                    <Aside cls="leftAside">LeftAside</Aside>
                                    {props.children}
                                    <Aside cls="rightAside">RightAside</Aside>
                                </div>
                            </div>
                        </main>
                    <Footer />
                </>
    )
}
