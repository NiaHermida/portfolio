import "./PromoCard.scss";

const PromoCard = ({ icon = null, text = "", subtitle = "" }) => {
  return (
    <div className="PortfolioPromoCard">
      <div className="PortfolioPromoCard__Icon">{icon}</div>
      <h1 className="PortfolioPromoCard__Title">{text}</h1>
      <h2 className="PortfolioPromoCard__Subtitle">{subtitle}</h2>
    </div>
  );
};
export default PromoCard;
