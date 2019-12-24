import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Block from '~/src/components/Block';
import SEO from '~/src/components/SEO';
import PhotoGrid from '~/src/components/PhotoGrid';

const strandstugaphotos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 2
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
        <p>
          Det moderna, fräscha strandhuset passar dig som vill bo bekvämt och lyxigt. 
          Strandtomten har ett lite avskilt och perfekt läge med havet precis intill.
        </p>
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
          <b>Fakta hus</b>
          <br />
          Byggt 2015
          <br/>
          120kvm
          <br/>
          3 rum och kök
          <br/>
          6 sängar
        </p>
        <p>
          <b>Allrum</b>
          <br/>
          Det stora öppna allrummet har 3sitssoffa, 4 fotöljer, soffbord, tvbänk, 50 tums tv och cromecast för regniga dagar. 
          I hallen finner ni en stor garderob för förvaring. 
        </p>
        <p>
          <b>Kök</b>
          <br/>
          Ett komplett kök med stor frys, kyl med dispenser, induktionshällsspis, ugn, kaffebryggare, vattenkokare och allt annat du kan tänkas behöva.
          Stort köksbord med 8 stolar. 
        </p>
        <p>
          <b>Sovrum</b>
          <br/>
          1: 180cm dubbelsäng och 2 sängbord
            <br/>
          2: 180cm dubbelsäng, 2 sängbord och en våningssäng. 
        </p>
        <p>
          <b>Badrum</b>
          <br/>
          Rymligt badrum med toa, vattenfallsdusch, handduksvärmare, spegel och designhandfat från kosta boda. 
        </p>
        <p>
          <b>Utomhus</b>
          <br/>
          Stort (30kvm), härligt och soligt trädäck med 6 solsängar + dynor, bord och 6 stolar perfekt för utomhusfrukost.
          Stor tomt med gräsmatta som sträcker sig hela vägen ner till vattnet (ca 50 meter).
          Grill finns.
        </p>
        <p>
          <b>Övrigt</b>
          <br/>
          Fibernät finns, lösenord tilldelas er vid ankomst. Boendet är rökfritt.
        </p>
        <p>
          Incheckning: Kan ske vilken tid på dygnet som önskas då stugan har elektroniskt kodlås och ni ej behöver mötas upp för överlämning av nyckel. 
          Utcheckning: Sker enligt överenskommelse då stugans skick och slutstädning granskas.
        </p>
        <p>
          <b>Pris</b>
          <br />
          Lågsäsong 8 000:-/vecka
          <br/>
          Högsäsong 11 000:-/vecka
          <br/>
          Sweden Rock Festival 35 000:-/vecka
        </p>
        <p>
          <b>Tillägg</b>
          <br/>
            Om önskas kan lån av sängkläder och handdukar köpas till för 150:-/person per vecka. 
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
