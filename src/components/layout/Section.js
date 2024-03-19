import React, { Component } from 'react'

export class Section extends Component {
    render() {
        return (
            <>
                <section className="col-8 tbdr">{this.props.children}</section>
            </>
        )
    }
}

