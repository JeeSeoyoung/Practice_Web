import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Link,Routes,Route,useParams, useNavigate} from 'react-router-dom';

function Header() {
  return <header>
    <h1><a href='/'>WEB</a></h1>
  </header>;
}

function Nav() {
  return <nav>
    <ol>
      <li><a href=''>HTML</a></li>
      <li><a href=''>CSS</a></li>
      <li><a href=''>JAVASCRIPT</a></li>
    </ol>
  </nav>;
}

function Article() {
  return <article>
    <h2>WEB</h2>
    <p>Hello, WEB~~~!!!!</p>
  </article>;
}

function App(){
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;



