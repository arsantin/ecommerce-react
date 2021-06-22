/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
 
 import Home from '../components/layout/Home';
 
 test("renderiza o componente correto", ()=> {
   //Render a react component to the DOM
   const root = document.createElement("div");
   ReactDOM.render(<Home/>, root);

  expect(root.querySelector("h5").textContent).toBe("home");

})