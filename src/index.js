import React from "react";
import ReactDOM from "react-dom/client";

import './Style.css';

const root = ReactDOM.createRoot(document.querySelector(".container-fluid"));
root.render(
  <>
    <header>Header</header>
    <main>
      <div className="container h-100 a_cont">
        <div className="row h-100">
          <aside className="col-2 s_leftaside tbdr">LeftAside</aside>
          <section className="col-8 tbdr">Section</section>
          <aside className="col-2 s_rightaside tbdr">RightAside</aside>

        </div>
        

      </div>
    </main>
    <footer>Footer</footer>
  </>
);
