import React from 'react'
import './Style.css';

//import someNamedImport from SomeLocation/SomeLibrary

import { Section } from './components/layout/Section';



//import someDefaultImport from SomeLocation/SomeLibrary

import Layout from './components/layout/Layout';
import Page1 from './pages/Page1';




export default function App() {
    return (
        <Layout>
            <Section>
                <Page1></Page1>
            </Section>
        </Layout>
    )
}
