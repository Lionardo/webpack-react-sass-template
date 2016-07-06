import React from 'react'
import styles from './styles/footer.sass'

const Footer = React.createClass({
  render () {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              Twitter
            </div>
            <div className="col-sm-4">
              Facebook
            </div>
            <div className="col-sm-4">
              Instagram
            </div>
          </div>
        </div>
      </footer>
    )
  }
})

export default Footer
