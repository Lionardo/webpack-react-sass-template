import React, { PropTypes } from 'react'

const Header = React.createClass({
  render () {
    return (
      <header class="intro">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#"><img src="../images/swiss-nutrify-logo.png" width="100" alt="swiss nutrify logo" title="swiss nutrify logo"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li><a data-scroll href="#essential">Essential</a></li>
                <li><a data-scroll href="#composition">Composition</a></li>
                <li><a data-scroll href="#contact">Contact</a></li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
        </nav>
        <video autoplay poster="/images/fruit-basket-header.jpg" id="bgvid" loop>
          <source src="videos/nutrify.mp4" type="video/mp4">
        </video>
        <div class="welcome center-block">
          <h1>Welcome to nutrify</h1>
          <p>Our mission is to raise varieties about a fundamental need.</p>
          <p><strong>Subsistence.</strong></p>
          <p>The need of having food.</p>
        </div>
      </header>

    )
  }
})

export default Header
