import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [count, setCount] = useState(0)
  const [content, setContent] = useState('')

  //
  //  
  //
  const markdown = "# Test Markdown dsjgasdfkjgh jk sadfgjdsf l; | ||| gjsdalgk f - - - -- -";


  // /blog/:postname
  useEffect(() => {
    fetch(`/markdown/markdown.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# Post not found"));
  });

  return (
    <>
      <Markdown remarkPlugins={[remarkGfm]} components={{
        h1: ({children}) => <h1 className="test-header">{children}</h1>,
        a: ({ href, children}) => <a href={href} className='test-a'>
          {children}
        </a>
      }}>{content}</Markdown>
    </>
  )
}

export default App
