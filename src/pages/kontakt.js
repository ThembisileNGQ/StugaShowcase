import React from 'react';
import Helmet from 'react-helmet';
import Block from '~/src/components/Block';
import SEO from '~/src/components/SEO';
import pin from '~/src/pages/pin.svg'

const Marker = ({ text }) => <div><img src={pin}></img></div>;
const html = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Slupv%C3%A4gen%202873%20S%C3%B6lvesborg&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>`
export default ({ posts, transition, data }) => (
  <div style={transition ? transition.style : { opacity: 0 }}>
    <Helmet title="Störberg | Kontakt" />
    <SEO
      postPath="/kontakt"
      postNode={{
        subtitle: 'Kontakt/Bockar',
        excerpt: `Kontakt! Löksås ipsum varit räv rännil så icke tidigare dimma, genom är samtidigt av blev inom groda stora, fram smultron kan som år stig annan.`,
        cover: data.cover,
      }}
      pageSEO
    />
    <article id="content">
      <div>
        <Block align="right" pull mobilePull>
          <h1>Kontakt</h1>
          <p>
            För bokning eller frågor är ni välkomna att kontakta mig, Peter Håkansson, på 
          </p>
          <p>
          <div>
            <a href="tel:+46708231506">070 823 15 06</a>
          </div>
          </p>
          <p>
            eller maila mig via kontaktormuläret.
          </p>
        </Block>
        <Block pull mobilePull>
          <h1>Kontakt</h1>
          <p>
            <div className="contact-form">
              <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="bot-field" />
                  <div>
                    <label>Name: <input type="text" name="name" /></label>   
                  </div>
                  <div>
                    <label>Email: <input type="email" name="email" /></label>
                  </div>
                  <div>
                    <label>Message: <textarea name="message"></textarea></label>
                  </div>
                    <Block align="right" className="no-padding">

                      <button type="submit"><strong>Send</strong></button>
                    </Block>
                </form>
            </div>
          </p>
        </Block>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query GatsbyImageHeroKontaktQuery {
    cover: file(relativePath: { eq: "norje.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
