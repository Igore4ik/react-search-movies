
import "../App.css"

const Header = (props) => {
    return (
        <header className="App-header">
            {
                props.text
            }
        </header>
    )
}

export default Header;