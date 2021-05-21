import "./leaderboard.css";

function Test() {
    const LeaderboardHeader = () => {
        return (
          <div className="leadheader">
              <h2>Leaderboard</h2>
          </div>
        )
      }

      const ColumnHeader = () => {
        return (
        <div className="colheader">
            <div className="col1">Rank</div>
            <div className="col2">Name</div>
            <div className="col3">Points</div>
          </div>
      );
      }

    return (
        <div className = 'leader-mainmenu'>
            <div className = 'leader-header'>
                <h1>Vocab War</h1>
            </div>
            <div className="leader-container">
        <LeaderboardHeader />
        <ColumnHeader/>
        <div className = 'list'>Testing</div>
        <div className = 'list'>Eyedrops</div>
        <div className = 'list'>Meow Meow</div>
        <div className = 'list'>Dog Dog</div>
        <div className = 'list'>1 Boki 25</div>
        <div className = 'list'>1 Boki 25</div>
        <div className = 'list'>1 Boki 25</div>
        <div className = 'list'>1 Boki 25</div>
        <div className = 'list'>1 Boki 25</div>
        </div>
        </div>
    );
}
export default Test;