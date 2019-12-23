import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Bio from '../components/Bio';
import Posts from '../components/Posts';
import SEO from '../components/SEO';
import { translate, withTranslation } from "react-i18next"

class Index extends React.Component {
  render() {
    const { transition, data } = this.props;
    const { site, allJavascriptFrontmatter } = data;
    const articles = allJavascriptFrontmatter.edges;
    const { t } = this.props
    return (
      <div style={transition ? transition.style : { opacity: 0 }}>
        <Helmet
          title={`${site.siteMetadata.title} | Stuga i Solvesborg`}
        />
        <SEO postEdges={articles} />
        <Header cover={this.props.data.hero}>
          <div className="title">
            <h1>
              Hyr stuga i blekinge och bo granne med havet
            </h1>
          </div>
          <div className="summary">
            {console.log(t("heading"))}
            <p>
              Här hittar du två nybyggda, moderna, natur- och havsnära semesterboenden med alla bekvämligheter. 
            </p>
            <p>
              Stugorna är belägna intill Norje Boke Camping utanför Sölvesborg. För mer information om Norje Boke camping klicka <a href="http://www.norjebokecamping.com/en/" target="_blank">här</a>.
            </p>
          </div>
        </Header>
         {/*<Posts posts={articles} /> */}
      </div>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object,
};

export default withTranslation("PageHeader")(Index);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allJavascriptFrontmatter(
      filter: { frontmatter: { isWork: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            devOnly
            background
            subtitle
            cover {
              childImageSharp {
                sizes(maxWidth: 1100, quality: 100) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
    hero: file(relativePath: { eq: "norje.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
