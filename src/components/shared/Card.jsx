function Card({children, cardBgColor, cardTextColor}) {
    const cardStyles = {
      backgroundColor: cardBgColor,
      color: cardTextColor
    };
    return (
        <div className="card"
        style = {cardStyles}>
            {children}
        </div>
    )
}
Card.defaultProps = {
  cardBgColor: "#34495e",
  cardTextColor: "#fff",
};

export default Card
