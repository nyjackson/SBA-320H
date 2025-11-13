import { useEffect } from "react";

function Quote({author, content, tags}) {
  return (
    <div class = "quote">
      <h2>{content}</h2>
      <h3>- {author}</h3>
      {tags.length > 0 ? <p class = "tag">Tags: {tags.join(", ")}</p> : ''}
      <button>Favorite</button>
      <button>Comment</button>
    </div>
  );
}

export default Quote;

// pass down dispatch for comments and dispatch
