
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const HeaderStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header className="header" style={HeaderStyles}>
            <h1>{text}</h1>
        </header>
    )
}

Header.defaultProps = {
  text: "Get Work Done",
  bgColor: "#fff",
  textColor: "#27ae60",
};
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
