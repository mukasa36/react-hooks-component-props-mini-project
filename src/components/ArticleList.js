import React from "react";
import Article from "./Article";

export default function ArticleList({post}) {

  let container = post.map((element,index) => {
    <Article key={index} title={element.title} date={element.date} preview={element.preview} emoji={element.emoji}/>});
  return (
    <main>
        {container}
    </main>
  );
}


