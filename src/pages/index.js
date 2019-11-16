import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Bio from '../components/Bio';
import Posts from '../components/Posts';
import SEO from '../components/SEO';

class Index extends React.Component {
  render() {
    const { transition, data } = this.props;
    const { site, allJavascriptFrontmatter } = data;
    const articles = allJavascriptFrontmatter.edges;

    return (
      <div style={transition ? transition.style : { opacity: 0 }}>
        <Helmet
          title={`${site.siteMetadata.title} | Stuga i Solvesborg`}
        />
        <SEO postEdges={articles} />
        <Header cover={this.props.data.hero}>
          <div className="title">
            <h1>
              Regn söka därmed, faktor &mdash; Löksås ipsum att tid tiden icke när verkligen lax enligt genom hav.
            </h1>
          </div>
          <div className="summary">
            <p>
            Åker äng plats och sin ingalunda ska omfångsrik fram helt sax och, 
            inom trevnadens jäst dimmhöljd sax blev björnbär verkligen redan denna, 
            vidsträckt på samma denna om lax och smultron ordningens varit. 
            Ska som strand på för om vid mot brunsås ta åker precis, helt att miljoner sig helt miljoner dimmhöljd räv bäckasiner brunsås bra, 
            sjö ta smultron groda kunde både därmed tid sista strand.
            </p>
            <p>
            Kanske på blivit dunge vemod mot söka gör och denna lax mot vidsträckt har dimmhöljd har, 
            händer annat enligt sin dock år fram färdväg rot smultron omfångsrik samtidigt vid.
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

export default Index;

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
    hero: file(relativePath: { eq: "norje.jpeg" }) {
      childImageSharp {
        sizes(maxWidth: 1400, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
