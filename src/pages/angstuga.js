import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Block from '~/src/components/Block';
import Figure from '~/src/components/Figure';
import SEO from '~/src/components/SEO';
import clients from '~/static/clients.svg';
import PhotoGrid from '~/src/components/PhotoGrid';

const angstugaphotos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

export default ({ posts, transition, data }) => (
  <div style={transition ? transition.style : { opacity: 0 }}>
    <Helmet title="Störberg | Ängstugan" />
    <SEO
      postPath="/angstuga"
      postNode={{
        subtitle: 'Ängstugan',
        excerpt: `Ängstugan! Löksås ipsum varit räv rännil så icke tidigare dimma, genom är samtidigt av blev inom groda stora, fram smultron kan som år stig annan.`,
        cover: data.cover,
      }}
      pageSEO
    />
    <Header cover={data.cover}>
      <div className="title">
        <h1>Ängstugan</h1>
      </div>
      <div className="intro">
      <h2>Fakta hus:</h2>
        <ul>
          <li>Byggt 2019</li>
          <li>100.</li>
          <li>4 rum och kök.</li>
          <li>6 sängar.</li>
        </ul>
      </div>
    </Header>
    <article id="content">
      <div>
        <Block pull mobilePull>
          <PhotoGrid photos={angstugaphotos}
          />
        </Block>
        <Block align="right" pull mobilePull>
          <p>
            <h2>Allrum</h2>
            Det öppna allrummet har braskamin, 3sitssoffa, 2 fotöljer, soffbord, tvbänk, 50 tums tv, baspaket av kanaler (1,2,4,6) samt cromecast för regniga dagar. 
          </p>
          <p>
            <h2>Kök</h2>
            Ett komplett kök med kyl och frys, induktionshällsspis, ugn, kaffebryggare, vattenkokare och allt annat du kan tänkas behöva. Mindre köksbord med 3 stolar. + 2 barstolar intill köksskänken.
          </p>
          <p>
            <h2>Sovrum</h2>
            1: En dubbelsäng (180cm), 2 sängbord och byrå
            2: En våningssäng (2 x 80cm)
            3: En bäddsoffa med plats för 2 gäster samt byrå
          </p>
          <p>
            <h2>Badrum</h2>
            Rymligt badrum med toa, dusch, handfat och spegel.          </p>
          <p>
            <h2>Utomhus</h2>
            Då stugan är helt nybyggd är tomten inte färdigställd ännu och är därför helt täckt i singelsten. Grill finns.          </p>
          <p>
            <h2>Övrigt</h2>
            Fibernät finns, lösenord tilldelas er vid ankomst. Boendet är rökfritt. 
          </p>
          <p>
            Incheckning: Sker enligt överenskommelse då nyckel överlämnas och ni hälsas välkomna. 
            Utcheckning: Sker enligt överenskommelse då stugans skick och slutstädning granskas.
          </p>
          <p>
            <h2>Pris</h2>
            Lågsäsong 7 000:-/vecka
            Högsäsong 9 000:-/vecka
            Sweden Rock Festival 25 000:-/vecka 
          </p>
          <p>
            <h2>Tillägg:</h2>
            Om önskas kan lån av sängkläder och handdukar köpas till för 150:-/person per vecka.
          </p>
        </Block>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query GatsbyImageHeroAngstugaQuery {
    cover: file(relativePath: { eq: "angstuga-1.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
