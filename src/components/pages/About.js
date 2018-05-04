import * as React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fetchArticleWithRedux: PropTypes.func.isRequired,
  listArticle: PropTypes.shape({}).isRequired,
};

class About extends React.Component {
  componentDidMount() {
    this.props.fetchArticleWithRedux();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.listArticle.listArticle &&
          this.props.listArticle.listArticle.map((article) => {
            return (
              <li>{article.title}</li>
            );
          })
        }
      </div>
    );
  }
}

About.propTypes = propTypes;

export default About;
