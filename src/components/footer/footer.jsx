import React from 'react'
import styles from './styles/footer.sass'

const Footer = React.createClass({
  render () {
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              Twitter
            </div>
            <div class="col-sm-4">
              Facebook
            </div>
            <div class="col-sm-4">
              Instagram
            </div>
          </div>
        </div>
      </footer>
    )
  }
})

export default Footer
