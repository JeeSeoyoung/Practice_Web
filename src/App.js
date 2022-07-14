import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Link,Routes,Route,useParams, useNavigate} from 'react-router-dom';

function Header(props) {
  return <header>
    <h1><a href='/' onClick={(event)=>{
      event.preventDefault();
      props.onChange();
    }}>{props.title}</a></h1>
  </header>;
}

function Nav(props) {

  const callback = (el)=>
  <li key={el.id}>
    <a href={'/read/'+el.id} onClick={(event)=>{
      event.preventDefault();
      props.onChange(el.id);
    }}>{el.title}</a>
    </li>
  const tag = props.topics.map(callback)
  return <nav>
    <ol>
      {tag}
    </ol>
  </nav>;
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>;
}
function App(){
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics=[
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."},
  ]
  let content = null;
  if(mode==='WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode ==='READ'){
    const topic = topics.filter(el=>el.id ===id)[0]
    content = <Article title={topic.title} body={topic.body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChange={()=>{
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChange={(id)=>{
        setId(id);
        setMode("READ");
      }}></Nav>
      {content}
    </div>
  );
}

export default App;

