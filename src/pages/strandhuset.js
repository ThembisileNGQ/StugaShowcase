import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Block from '~/src/components/Block';
import Figure from '~/src/components/Figure';
import SEO from '~/src/components/SEO';
import clients from '~/static/clients.svg';
import PhotoGrid from '~/src/components/PhotoGrid';

const strandstugaphotos = [
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
    <Helmet title="Störberg | Strandhuset" />
    <SEO
      postPath="/strandhuset"
      postNode={{
        subtitle: 'Strandhuset',
        excerpt: `Strandhuset! Löksås ipsum varit räv rännil så icke tidigare dimma, genom är samtidigt av blev inom groda stora, fram smultron kan som år stig annan.`,
        cover: data.cover,
      }}
      pageSEO
    />
    <Header cover={data.cover}>
      <div className="title">
        <h1>Strandhuset</h1>
      </div>
      <div className="intro">
        <ul>
          <li>Professional early adopter.</li>
          <li>Open Source on default.</li>
          <li>Indecisive about his job title.</li>
        </ul>
      </div>
    </Header>
    <article id="content">
      <div>
        <Block pull mobilePull>
          <PhotoGrid photos={strandstugaphotos}
          />
        </Block>
        <Block align="right" pull mobilePull>
          <p>
            Tid flera björnbär! Göras där år helt träutensilierna söka och samtidigt, 
            kunde därmed åker stora i där när, gamla om lax ännu äng ser. 
            Sig bäckasiner björnbär och för att dock för har, tre när söka brunsås vi vad bäckasiner
          </p>
          <p>
            verkligen kom åker smultron sjö tre bäckasiner.Hav del kunde hwila se varit därmed år att redan, 
            samtidigt upprätthållande sin i blev vad kom händer dock, omfångsrik söka samtidigt enligt dock dimmhöljd för enligt.
          </p>
          <p>
            Icke sjö se vemod ordningens ska flera samma del bland, både dunge bra sig helt stora söka händer. 
            Fram bra ordningens har tre sig när ordningens varit, jäst miljoner trevnadens mot och precis inom gör,
          </p>
        </Block>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query GatsbyImageHeroStrandhusetQuery {
    cover: file(relativePath: { eq: "strandhuset-1.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
