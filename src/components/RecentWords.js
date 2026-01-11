function RecentWords({ words, title = 'Recent Words' }) {
  return (
    <div className="recent-words">
      {title && <h3 className="words-title">{title}</h3>}
      <div className="words-grid">
        {words.map((item, index) => (
          <div key={index} className="word-pair">
            <span className="word-original">{item.word}</span>
            <span className="word-translation">{item.translation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentWords;
