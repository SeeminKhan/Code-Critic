import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

const exampleCodes = {
  javascript: `function sum(a, b) {
  return a + b;
}`,
  java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
  python: `def sum(a, b):
  return a + b`,
  c: `#include <stdio.h>
int main() {
  printf("Hello, World!\n");
  return 0;
}`,
  cpp: `#include <iostream>
using namespace std;
int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`
};

function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState("javascript")
  const [code, setCode] = useState(exampleCodes[language])
  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  useEffect(() => {
    setCode(exampleCodes[language]);
  }, [language]);

 async function reviewCode() {
  const backendURL = process.env.NODE_ENV === 'production' 
    ? 'https://code-critic-backend.onrender.com/ai/get-review' 
    : 'http://localhost:3000/ai/get-review';

  const response = await axios.post(backendURL, { code });
  setReview(response.data);
}


  return (
    <>
      <h1 className="title">Code Critic</h1>
      <main>
        <div className="left">
          <select className="select-language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
          </select>
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown
            rehypePlugins={[rehypeHighlight]}
          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
