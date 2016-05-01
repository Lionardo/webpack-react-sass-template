import React from 'react'
import styles from './styles/footer.sass'

const Footer = React.createClass({
  render () {
    return (
      <footer className="responsive section">
        <div className="container center-align">
          <div className="row">
            <div className="col s12 m4">
              <h5>Social</h5>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              &nbsp;
              <a href="#">
                <i className="fa fa-twitter" />
              </a>&nbsp;
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <div className="col s12 m4">
              <h5>Company</h5>
                street name<br />
                some number 42<br />
                some city
            </div>
            <div className="col s12 m4">
              <h5>Newsletter</h5>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s12 m8">
                      <input
                        id="newsletter-email"
                        type="email"
                        className="validate" />
                      <label
                        htmlFor="newsletter-email"
                        data-error="wrong"
                        data-success="right">Email</label>
                    </div>
                    <div className="col s12 m4 send">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action">
                        <i className="material-icons">send</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="divider" />
          <br />
          <small>
            Copyright © 2016 some company.
          </small>
        </div>
      </footer>
    )
  }
})

export default Footer
