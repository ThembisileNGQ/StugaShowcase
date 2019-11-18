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
        excerpt: `Hello! I’m a designer & developer focused on turning ideas into delightful, practical software. I’m doing my best work when collaborating closely with founders, designers, and developers.`,
        cover: data.cover,
      }}
      pageSEO
    />
    <article id="content">
      <div>
        <Block pull mobilePull>
          <div className="google-maps">
            <iframe src="https://maps.google.com/maps?q=Slupv%C3%A4gen%202873%20S%C3%B6lvesborg&t=&z=17&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" ></iframe>
          </div>
        </Block>
        <Block align="right" pull mobilePull>
          <h1>Strandhuset</h1>
          <p>
            Tid flera björnbär! Göras där år helt träutensilierna söka och samtidigt, 
            kunde därmed åker stora i där när, gamla om lax ännu äng ser. 
            Sig bäckasiner björnbär och för att dock för har, tre när söka brunsås vi vad bäckasiner
          </p>
          <p>
            verkligen kom åker smultron sjö tre bäckasiner.Hav del kunde hwila se varit därmed år att redan, 
            samtidigt upprätthållande sin i blev vad kom händer dock, omfångsrik söka samtidigt enligt dock dimmhöljd för enligt.
          </p>
        </Block>
      </div>
    </article>
    <article id="content">
      <div>
        <Block pull mobilePull>
          <div className="google-maps">
          <iframe src="https://maps.google.com/maps?q=Lodv%C3%A4gen%202803%20S%C3%B6lvesborg&t=&z=17&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" ></iframe>
          </div>
        </Block>
        <Block align="right" pull mobilePull>
          <h1>Ängstuga</h1>
          <p>
            Tid flera björnbär! Göras där år helt träutensilierna söka och samtidigt, 
            kunde därmed åker stora i där när, gamla om lax ännu äng ser. 
            Sig bäckasiner björnbär och för att dock för har, tre när söka brunsås vi vad bäckasiner
          </p>
          <p>
            verkligen kom åker smultron sjö tre bäckasiner.Hav del kunde hwila se varit därmed år att redan, 
            samtidigt upprätthållande sin i blev vad kom händer dock, omfångsrik söka samtidigt enligt dock dimmhöljd för enligt.
          </p>
        </Block>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query GatsbyImageHeroHittaHitQuery {
    cover: file(relativePath: { eq: "fabian-schultz.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
