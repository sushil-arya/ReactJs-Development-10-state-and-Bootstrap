import React, { Component } from "react";

import Nav from "./Nav";

export class Header extends Component {
  //1. Properties Area

  //2. Constructor Area

  //3. Method Area

  //render method must be there to return something
    render() {
        return (
        //Every method returns something
            <>
                <header>
                    <div className="container">
                        <Nav/>
                    </div>
                </header>
            </>
        );
    }
}
