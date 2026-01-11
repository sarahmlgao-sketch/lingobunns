import titleHeader from '../assets/images/home/title header.png';
import taglineContainer from '../assets/images/home/tagline container.png';
import interactionTimeImg from '../assets/images/home/interaction time.png';
import bunBunStars from '../assets/images/home/BunBun - 5 stars.png';

function Home() {
  const recentWords = [
    { word: 'lapin', translation: 'bunny' },
    { word: 'étoile', translation: 'star' },
    { word: 'bleu', translation: 'blue' },
    { word: 'coeur', translation: 'heart' },
    { word: 'nuit', translation: 'night' },
    { word: 'fraise', translation: 'strawberry' },
    { word: 'papillon', translation: 'butterfly' },
  ];

  return (
    <div className="page pageContainer">
      {/* Hero section */}
      <section className="homeHero">
        <img src={titleHeader} alt="Title Header" className="homeHeroImg" />
      </section>

      {/* Tagline section */}
      <section className="homeTagline">
        <img src={taglineContainer} alt="Tagline" className="homeTaglineImg" />
      </section>

      {/* Interaction Time section */}
      <section className="homeInteraction">
        <h2 className="section-title">Interaction Time</h2>
        <img src={interactionTimeImg} alt="Interaction Time Chart" className="homeChartImg" />
      </section>

      {/* Bottom section: Language Level and Recent Words */}
      <section className="homeBottomGrid">
        {/* Left: Language Level */}
        <div className="homeLevelSection">
          <h2 className="section-title">Language Level</h2>
          <img src={bunBunStars} alt="BunBun 5 Stars" className="homeLevelImg" />
          <div className="softCard">
            <p className="subtext">Conversationally Fluent</p>
            <p className="subtext">At this level, kids can maintain grade-level conversation</p>
          </div>
        </div>

        {/* Right: Recent Words */}
        <div className="homeWordsSection">
          <h2 className="section-title">Recent Words</h2>
          <div className="softCard">
            <div className="words-grid">
              {recentWords.map((item, index) => (
                <div key={index} className="word-pair">
                  <span className="word-original">{item.word}</span>
                  <span className="word-translation">— {item.translation}</span>
                </div>
              ))}
            </div>
            <div className="subtext-container">
              <p className="subtext">increasing vocabulary organically each day</p>
              <p className="subtext">i.e. kids will be able to implement into daily conversations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
