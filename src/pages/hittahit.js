import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Block from '~/src/components/Block';
import Figure from '~/src/components/Figure';
import SEO from '~/src/components/SEO';
import clients from '~/static/clients.svg';
import GoogleMapReact from 'google-map-react';
import pin from '~/src/pages/pin.svg'

const Marker = ({ text }) => <div><img src={pin}></img></div>;
const html = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Slupv%C3%A4gen%202873%20S%C3%B6lvesborg&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>`
export default ({ posts, transition, data }) => (
  <div style={transition ? transition.style : { opacity: 0 }}>
    <Helmet title="Störberg | Hitta Hit" />
    <SEO
      postPath="/hittahit"
      postNode={{
        subtitle: 'Hitta Hit',
        excerpt: `Hitta Hit! Löksås ipsum varit räv rännil så icke tidigare dimma, genom är samtidigt av blev inom groda stora, fram smultron kan som år stig annan.`,
        cover: data.cover,
      }}
      pageSEO
    />
    <article id="content">
      <div>
        <Block pull mobilePull>
          <br></br>
          <br></br>
          <h1>Strandhuset</h1>
        </Block>
        <Block align="right" pull mobilePull>
          <div className="google-maps">
            <iframe src="https://maps.google.com/maps?q=Slupv%C3%A4gen%202873%20S%C3%B6lvesborg&t=&z=14&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" ></iframe>
          </div>
        </Block>
      </div>
    </article>
    <article id="content">
      <div>
        <Block pull mobilePull>
          <h1>Ängstuga</h1>
        </Block>
        <Block align="right" pull mobilePull>
          <div className="google-maps">
          <iframe src="https://maps.google.com/maps?q=Lodv%C3%A4gen%202803%20S%C3%B6lvesborg&t=&z=14&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" ></iframe>
          </div>
        </Block>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query GatsbyImageHeroHittaHitQuery {
    cover: file(relativePath: { eq: "norje.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
