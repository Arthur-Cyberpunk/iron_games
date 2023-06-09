import "./styles.scss";

const CardBox = (data) => {
  
  return (
    <>
      {data.data[data.gameID].map((game, id) => (
        <div key={id} className="boxGames">
          <div className="boxDescription">
            <div className="boxPrice">
              <span>Price: ${game.price}</span>
            </div>
            <div className="boxDescriptionTable">
              <div className="boxDescriptionColumn">
                <span>Model</span>
                <span>{game.model}</span>
              </div>
              <div className="boxDescriptionColumn">
                <span>Mark</span>
                <span>{game.mark}</span>
              </div>
              <div className="boxDescriptionColumn">
                <span>HD/SSD</span>
                <span>{game.hd_ssd}</span>
              </div>
              <div className="boxDescriptionColumn">
                <span>Teraflops</span>
                <span>{game.teraflops}</span>
              </div>
              <div className="boxDescriptionColumn">
                <span>Video</span>
                <span>{game.video}</span>
              </div>
              <div className="boxDescriptionColumn">
                <span>Audio</span>
                <span>{game.audio}</span>
              </div>
            </div>
            <a href="#booking-section" className="buyNow">Buy Now</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBox;
