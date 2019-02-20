import React from "react";
import styles from "../index.css";
import { connect } from "react-redux";
import { countryNews } from "../../actions/index";
import { Link } from "react-router-dom";
import history from "../../history";

class HandleUS extends React.Component {
  state = { countryCode: "us" };
  componentDidMount() {
    this.props.countryNews(this.state.countryCode);
  }

  HandleContent = () => {
    if (!this.props.news) {
      return (
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui active inverted dimmer">Loading...</div>
          </div>
        </div>
      );
    }

    return this.props.news.articles.map((nw, index) => (
      <div className="newsTitleList" key={nw.title}>
        <h2 className="ui header">
          <span className="newsListOrder">
            {`${index + 1}.`} <span> </span>
          </span>

          <Link
            to={{
              pathname: `/news/${nw.title}`,
              state: { countryCode: this.state.countryCode }
            }}
            className="header newsList"
          >
            {nw.title}
          </Link>
        </h2>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h1 className="sectionTitle">US Top 20 Headlines</h1>
        {this.HandleContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.newsList
  };
};

export default connect(
  mapStateToProps,
  { countryNews }
)(HandleUS);
