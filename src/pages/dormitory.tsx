import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import DormitoryCharacterCard from "../components/dormitoryCharacterCard"
import DormitoryEventContainer from "../components/dormitoryEventContainer"
import DormitoryTopIllustContainer from "../components/dormitoryTopIllustContainer"
import DormitoryTopIllustsContainer from "../components/dormitoryTopIllustsContainer"
import "../components/layout.scss"
import { Page } from "../components/page"
import Seo from "../components/seo"
import { useDetailedCharacterInfo } from "../hooks/useDetailedCharacterInfo"
import shareThumb from "../images/dormitory/top-illusts/top-illust-007.png"

type DormitoryProps = {
  setShowingHeader: (show: boolean) => void
}

// FIXME: ハッシュ付きURLに遷移してページ移動したあとブラウザバックするとそのハッシュ位置に戻ってしまうバグを防ぎたい
// https://github.com/VOICEVOX/voicevox_blog/issues/104
const Dormitory: React.FC<DormitoryProps> = ({ setShowingHeader }) => {
  const { characterInfos } = useDetailedCharacterInfo()

  // ボイボ寮デザイン用のヘッダーを超えたらホムペ用のヘッダーを表示する
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!headerRef.current) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setShowingHeader(!entry.isIntersecting)
      })
    })
    observer.observe(headerRef.current)
  }, [headerRef])

  return (
    <>
      <Seo
        title="ボイボ寮 | VOICEVOX"
        description="とある世界の不思議な建物、ボイボ寮。ここでは個性豊かな住民たちが暮らしています。"
        image={shareThumb}
      />

      <div className="dormitory">
        <header ref={headerRef} className="hero is-small">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-2">ボイボ寮の住民たち</h1>
            </div>
          </div>
        </header>

        <section className="section py-0">
          <DormitoryTopIllustContainer />
          <div className="container is-max-desktop has-text-centered is-size-5 py-6">
            <p>とある世界の不思議な建物、ボイボ寮。</p>
            <p>ここでは個性豊かな住民たちが暮らしています。</p>
          </div>
        </section>

        <main className="section pt-0 pb-5">
          <div className="container character-container is-max-desktop pt-1 pb-6">
            <div className="columns is-multiline">
              <div
                id="7th"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#7th" className="has-text-black">
                    7 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard
                characterInfo={characterInfos.聖騎士紅桜}
              />
              <DormitoryCharacterCard characterInfo={characterInfos.雀松朱司} />
              <DormitoryCharacterCard
                characterInfo={characterInfos.麒ヶ島宗麟}
              />
              <DormitoryCharacterCard
                characterInfo={characterInfos.春歌ナナ}
                className="is-offset-2"
              />
              <DormitoryCharacterCard characterInfo={characterInfos.猫使アル} />
              <DormitoryCharacterCard characterInfo={characterInfos.猫使ビィ} />
              <DormitoryCharacterCard
                characterInfo={characterInfos.中国うさぎ}
                className="is-offset-2"
              />
            </div>

            <hr />

            <div className="columns is-multiline">
              <div
                id="6th"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#6th" className="has-text-black">
                    6 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard
                characterInfo={characterInfos.ちび式じい}
              />
              <DormitoryCharacterCard characterInfo={characterInfos.櫻歌ミコ} />
              <DormitoryCharacterCard
                characterInfo={characterInfos.小夜_SAYO}
              />
              <DormitoryCharacterCard
                characterInfo={characterInfos.ナースロボ＿タイプＴ}
                className="is-offset-2"
              />
            </div>

            <hr />

            <div className="columns is-multiline">
              <div
                id="5th"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#5th" className="has-text-black">
                    5 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard characterInfo={characterInfos.WhiteCUL} />
              <DormitoryCharacterCard characterInfo={characterInfos.後鬼} />
              <DormitoryCharacterCard characterInfo={characterInfos.No7} />
            </div>

            <hr />

            <div className="columns is-multiline">
              <div
                id="4th"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#4th" className="has-text-black">
                    4 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard
                characterInfo={characterInfos.モチノキョウコ}
              />
              <DormitoryCharacterCard characterInfo={characterInfos.剣崎雌雄} />
            </div>

            <hr />

            <div className="columns is-multiline">
              <div
                id="3rd"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#3rd" className="has-text-black">
                    3 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard characterInfo={characterInfos.玄野武宏} />
              <DormitoryCharacterCard
                characterInfo={characterInfos.白上虎太郎}
              />
              <DormitoryCharacterCard characterInfo={characterInfos.青山龍星} />
              <DormitoryCharacterCard
                characterInfo={characterInfos.冥鳴ひまり}
                className="is-offset-2"
              />
              <DormitoryCharacterCard characterInfo={characterInfos.九州そら} />
            </div>

            <hr />

            <div className="columns is-multiline">
              <div
                id="2nd"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#2nd" className="has-text-black">
                    2 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard
                characterInfo={characterInfos.春日部つむぎ}
              />
              <DormitoryCharacterCard characterInfo={characterInfos.雨晴はう} />
              <DormitoryCharacterCard characterInfo={characterInfos.波音リツ} />
            </div>

            <hr />

            <div className="columns is-multiline">
              <div
                id="1st"
                className="jump-anchor-header-padding column is-2 generation-label"
              >
                <h2 className="title is-3">
                  <Link to="#1st" className="has-text-black">
                    1 期 生
                  </Link>
                </h2>
              </div>

              <DormitoryCharacterCard
                characterInfo={characterInfos.四国めたん}
              />
              <DormitoryCharacterCard
                characterInfo={characterInfos.ずんだもん}
              />

              <div className="tile is-parent is-3 tohoku">
                <div className="tile is-child">
                  <h3 className="title is-4">仲良し</h3>
                  <a href="https://zunko.jp/" target="_blank" rel="noreferrer">
                    <div className="is-flex">
                      <StaticImage
                        className="tile is-child"
                        src="../images/icon-kiritan.png"
                        alt="東北きりたん"
                        width={128}
                      />
                      <StaticImage
                        className="tile is-child"
                        src="../images/icon-zunko.png"
                        alt="東北ずん子"
                        width={128}
                      />
                      <StaticImage
                        className="tile is-child"
                        src="../images/icon-itako.png"
                        alt="東北イタコ"
                        width={128}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <hr />

            <div className="has-text-centered pt-2 pb-0">
              <h2 className="title is-4">関連コンテンツ</h2>
              <Link
                to="/dormitory/call-names/"
                className="button is-normal is-rounded"
                type="button"
                role={"button"}
              >
                <span>キャラクターの呼称表</span>
              </Link>
            </div>
          </div>
        </main>

        <DormitoryExplainComponent />

        <section className="section py-5">
          <DormitoryEventContainer id="events" />
        </section>

        <section className="section py-5">
          <DormitoryTopIllustsContainer id="top_illusts" />
        </section>
      </div>
    </>
  )
}

/**
 * ボイボ寮とVOICEVOXをちょっとだけ紹介するコンポーネント
 */
export const DormitoryExplainComponent: React.FC<{
  showingDormitoryPageButton?: boolean
}> = ({ showingDormitoryPageButton = false }) => {
  return (
    <section className="section py-5">
      <div className="container has-text-centered py-5 is-flex is-flex-direction-column">
        <h2 className="title is-4">ボイボ寮とは</h2>
        <p className="is-size-6">
          VOICEVOX
          のキャラたちの設定があると動画制作の参考になるかと思って用意した世界観です。
        </p>
        <p className="is-size-6">
          必ずしも遵守する必要はなく、自由に改変して頂いても問題ありません。
        </p>
        {showingDormitoryPageButton && (
          <Link
            to="/dormitory/"
            className="button is-align-self-center mt-5 is-normal is-rounded"
            type="button"
            role={"button"}
          >
            <span>ボイボ寮ページへ</span>
          </Link>
        )}
      </div>

      <div className="container has-text-centered py-5 is-flex is-flex-direction-column">
        <h2 className="title is-4">VOICEVOX とは</h2>
        <p className="is-size-6">
          無料で使える中品質なテキスト読み上げソフトウェアです。
        </p>
        <p className="is-size-6">
          商用・非商用問わず無料で、イントネーションの詳細な調整ができることが特徴です。
        </p>
        <Link
          to={"/"}
          className="button is-align-self-center mt-5 is-primary is-rounded"
          type="button"
          role={"button"}
        >
          <span className="has-text-weight-semibold">ダウンロード</span>
        </Link>
      </div>
    </section>
  )
}

export default () => {
  const [showingHeader, setShowingHeader] = useState(false)
  return (
    <Page showingHeader={showingHeader} showingHeaderOnTop={false}>
      <Dormitory setShowingHeader={setShowingHeader} />
    </Page>
  )
}
