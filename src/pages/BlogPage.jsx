import { useState,useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import { PagesContainer } from "../components/utils/PagesContainer";

function BlogPage(){
    const [content, setContent] = useState("")

    useEffect(() => {
        fetch("./src/assets/entries/caida.md")
          .then((res) => res.text())
          .then((text) => setContent(text));
      }, []);
    return(
        <PagesContainer>
            <h1>Caida</h1>
            <p className="whitespace-pre-line">
                <ReactMarkdown children={content} skipHtml='true'  />
            </p>            
        </PagesContainer>
    )
}

export default BlogPage