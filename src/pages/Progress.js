import interactionTimeImg from '../assets/images/progress/progress - interaction time.png';
import vocabularyGrowthImg from '../assets/images/progress/progress - vocabulary growth.png';
import goalsPiechartImg from '../assets/images/progress/progress - goals piechart.png';
import bunBunReading from '../assets/images/progress/progress - BunBun Reading.png';
import bunBun5Stars from '../assets/images/progress/BunBun - 5 stars.png';

function Progress() {
  // French recent words matching the design
  const recentWords = [
    { word: 'lapin', translation: 'rabbit' },
    { word: 'bleu', translation: 'blue' },
    { word: 'coeur', translation: 'heart' },
    { word: 'nuit', translation: 'night' },
    { word: 'fraise', translation: 'strawberry' },
  ];

  return (
    <div className="page progress-page">
      <div className="progress-header">
        <div className="progress-header-left">
          <div className="progress-title-row">
            <h1 className="page-title">Progress</h1>
          </div>
          <p className="progress-subtitle">See updates on your child here.</p>
          <p> Keep track of your child's progress and see how they are doing.</p>
          <p> The more you interact with your child, the more their vocabulary will grow.</p>
        </div>
        <div className="progress-header-right">
          <img src={bunBun5Stars} alt="BunBun 5 stars" className="progress-bunny-stars" />
        </div>
      </div>

      <div className="progress-content">
        <div className="progress-section">
          <h2 className="section-title">Interaction Time</h2>
          <div className="progress-chart-wrapper">
            <img src={interactionTimeImg} alt="Interaction Time Chart" className="progress-chart-img" />
          </div>
        </div>

        <div className="progress-section progress-recent-words-section">
          <h2 className="section-title">Recent Words</h2>
          <div className="progress-recent-words-content">
            <div className="progress-words-bunny">
              <img src={bunBunReading} alt="BunBun reading" className="progress-words-bunny-img" />
            </div>
            <div className="progress-words-list">
              {recentWords.map((item, index) => (
                <div key={index} className="progress-word-item">
                  <span className="progress-word-original">{item.word}</span>
                  <span className="progress-word-translation">{item.translation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h2 className="section-title">Vocabulary Growth</h2>
          <div className="progress-chart-wrapper">
            <img src={vocabularyGrowthImg} alt="Vocabulary Growth Chart" className="progress-chart-img" />
          </div>
        </div>

        <div className="progress-section progress-goals-section">
          <h2 className="section-title">Goals Metrics</h2>
          <div className="progress-goals-content">
            <div className="progress-goals-pie">
              <img src={goalsPiechartImg} alt="Goals Pie Chart" className="progress-piechart-img" />
            </div>
            <div className="progress-goals-legend">
              <div className="progress-legend-item">
                <div className="progress-legend-color progress-legend-color-1"></div>
                <span className="progress-legend-label">Conversation</span>
                <span className="progress-legend-value">33%</span>
              </div>
              <div className="progress-legend-item">
                <div className="progress-legend-color progress-legend-color-2"></div>
                <span className="progress-legend-label">Vocabulary</span>
                <span className="progress-legend-value">16%</span>
              </div>
              <div className="progress-legend-item">
                <div className="progress-legend-color progress-legend-color-3"></div>
                <span className="progress-legend-label">Story Listening</span>
                <span className="progress-legend-value">51%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
