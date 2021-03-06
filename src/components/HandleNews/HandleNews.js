import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HandleSearchedNews from "./HandleSearchedNews";

class HandleNews extends React.Component {
  newsSection() {
    if (!this.props.isSignedIn) {
      return <div className="signIn">Please Sign in with Google</div>;
    } else {
      return (
        <div className="countryWrapper">
          <h1 className="mainTitle">Todays's World Top 20 Headlines</h1>
          <div className="ui three item menu">
            <Link to="/news/us" className="item">
              US
            </Link>
            <Link to="/news/kr" className="item">
              KOREA
            </Link>
            <Link to="/news/jp" className="item">
              JAPAN
            </Link>
          </div>
          <HandleSearchedNews />
        </div>
      );
    }
  }

  render() {
    return <div>{this.newsSection()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(HandleNews);
