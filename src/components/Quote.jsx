
function Quote({author, content, tags}) {
  return (
    <div className = "quote">
      <h2>{content}</h2>
      <h3>- {author}</h3>
      {tags != undefined ? <p className = "tag">Tags: {tags.join(", ")}</p> : ''}
      <button>Favorite</button>
    </div>
  );
}

export default Quote;

// pass down dispatch for comments and dispatch
