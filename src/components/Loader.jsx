
import "../App.css"

const Loader = () => {
    return (
      <div className="wrapper-loader">
          <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    )
}

export default Loader;