import React from 'react'

export default function Aside(props) {
    return (
        <>
            <aside className={`col-2 ${props.cls} tbdr`}>{props.children}</aside>
        </>
    )
}

