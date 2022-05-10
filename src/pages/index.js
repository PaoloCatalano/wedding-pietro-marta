import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PietroWedding from "../components/PietroWedding"
import MartaWedding from "../components/MartaWedding"
import useOnScreen from "../hooks/useOnScreen"
import PietroWeddingSmile from "../components/PietroWeddingSmile"

const IndexPage = () => {
  const refDate = React.useRef()
  const dateOnScreen = useOnScreen(refDate, "-70px")
  const refText = React.useRef()
  const textOnScreen = useOnScreen(refText, "-100px")
  return (
    <Layout>
      <Seo title="Matrimonio" />
      <div className="container ">
        <div className="pic-container appear">
          <PietroWedding width={400} className="moving" />
          <MartaWedding width={400} className="moving" />
        </div>
        <div className="title appear" style={{ "--delay": "1s" }}>
          <h1>
            Pietro
            <span style={{ margin: "0 2rem" }}>e</span> Marta
          </h1>
          <h1>
            <b>OGGI SPOSI!</b>
          </h1>
        </div>
        <div
          className="date "
          ref={refDate}
          style={{
            height: 180,
          }}
        >
          {dateOnScreen && (
            <div className="jump">
              <i className="appear">19 Giugno 2022</i>
            </div>
          )}
        </div>
        <section
          className="text"
          ref={refText}
          style={{
            height: 590,
          }}
        >
          {textOnScreen && (
            <article className="jump">
              <p className="appear">
                Oggi finalmente si celebra il matrimonio tra Marta e Pietro! Un
                evento atteso da anni ormai!...troppi anni, così tanti che
                eravamo giá pronti a celebrare le loro nozze d'argento!! Potete
                crederci?
              </p>
              <p className="appear">Ebbene si!</p>
              <p className="appear">
                I nostri cari amici finalmente sono riusciti ad allineare i
                pianeti, annullare le macumbe, radunare le fattucchiere piú
                potenti di tra tutte le tribù africane conosciute fino ad ora e
                le hanno pregate ti rendere possibile l'organizzazione di tale
                evento!
              </p>
            </article>
          )}
        </section>
        <section style={{ position: "relative", height: 480 }}>
          <PietroWeddingSmile className="alternate-A" />
          <PietroWedding className="alternate-B" />
        </section>
      </div>
    </Layout>
  )
}
export default IndexPage
