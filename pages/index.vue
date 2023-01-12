<template>
  <div class="page-index">
    <section class="profile" id="profile">
      <h2 class="section-title">Profile</h2>
      <ArticleProfile>
        <img
          class="profile__img"
          src="~/assets/images/nasi.png"
          alt="夏目漱石"
        />
        <p class="profile__lead">
          東京都江戸川区出身。29歳。<br />Web業界に興味をもち、半年間スクールに通い、その後就職。<br />
          業界歴は約3年間ほどになります。<br />
        </p>
        <p><a class="link" href="/profile/">プロフィール詳細はこちら</a></p>
      </ArticleProfile>
    </section>

    <section class="carrer" id="carrer">
      <h2 class="section-title">Carrer</h2>
      <Articlecarrer>
        <dl class="carrer__list">
          <div class="carrer__box">
            <dt>会社名</dt>
            <dd>株式会社ウェブスタッフ</dd>
            <dt>期間</dt>
            <dd>2020年7月～</dd>
          </div>
          <div class="carrer__box">
            <dt>会社名</dt>
            <dd>株式会社フライング・ハイ・ワークス</dd>
            <dt>期間</dt>
            <dd>2018年2月～2019年12月</dd>
          </div>
          <div class="carrer__box">
            <dt>会社名</dt>
            <dd>株式会社アウルキャンプ</dd>
            <dt>期間</dt>
            <dd>2017年6月～11月</dd>
          </div>
          <div class="carrer__box">
            <dt>会社名</dt>
            <dd>フェリカテクニカルアカデミー Webサイト制作科</dd>
            <dt>期間</dt>
            <dd>2016年10月～2017年 4月</dd>
          </div>
          <div class="carrer__box">
            <dt>会社名</dt>
            <dd>株式会社サミット</dd>
            <dt>期間</dt>
            <dd>2016年4月～2016年 9月</dd>
          </div>
        </dl>
        <p>
          <a class="link" href="/carrer/">経歴の詳細はこちら</a>
        </p>
      </Articlecarrer>
    </section>

    <section class="gallery" id="gallery">
      <h2 class="section-title">Gallery</h2>
      <ArticleGallery>
        <div>
          <v-tabs v-model="model">
            <v-tab href="#tab-1">制作会社勤務</v-tab>
            <v-tab href="#tab-2">個人制作</v-tab>
          </v-tabs>
          <v-tabs-items v-model="model">
            <v-tab-item value="tab-1">
              制作会社勤務で表示するコンテンツ
              <v-container class="fill-height" fluid>
                <v-fade-transition mode="out-in">
                  <v-row>
                    <v-col sm="6" cols="12">
                      <v-card>
                        <v-img
                          src="http://portfolio.nasio7.com/portfolio/wp-content/uploads/2020/01/five_thum.jpg"
                          max-height="125"
                          class="grey darken-4"
                        ></v-img>
                        <v-card-title class="title">
                          <ul class="gallery__list">
                            <li class="gallery__item">投資系</li>
                            <li class="gallery__item">期間：2日</li>
                            <li class="gallery__item">ページ数：1ページ</li>
                            <li class="gallery__item">担当：コーディング</li>
                            <li class="gallery__item">
                              言語：HTML / CSS / Scss / jQuery
                            </li>
                            <li class="gallery__item">
                              <a
                                href="https://drive.google.com/drive/u/1/folders/1prp-rulmHRc1e2l4WSrsl2TKHsCdBRHA"
                                target="_blank"
                                >サイトはこちら</a
                              >
                            </li>
                          </ul>
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col sm="6" cols="12">
                      <v-card>
                        <v-img
                          src="http://portfolio.nasio7.com/portfolio/wp-content/uploads/2020/01/soshisha_thum.jpg"
                          max-height="125"
                          class="grey darken-4"
                        ></v-img>
                        <v-card-title class="title">
                          <ul class="gallery__list">
                            <li class="gallery__item">広告代理店</li>
                            <li class="gallery__item">期間：2週間</li>
                            <li class="gallery__item">ページ数：3ページ弱</li>
                            <li class="gallery__item">
                              担当：コーディング、WPの組み込み
                            </li>
                            <li class="gallery__item">
                              言語：HTML / CSS / Scss / WordPress / PHP / jQuery
                            </li>
                            <li class="gallery__item">
                              <a
                                href="https://drive.google.com/drive/u/1/folders/1Oc58Ej-PXVHzBxuDQd5Rv4sou6eGuQjs"
                                target="_blank"
                                >サイトはこちら</a
                              >
                            </li>
                          </ul>
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col sm="6" cols="12">
                      <v-card>
                        <v-img
                          src="http://portfolio.nasio7.com/portfolio/wp-content/uploads/2020/01/piquant_thum-1.jpg"
                          max-height="125"
                          class="grey darken-4"
                        ></v-img>
                        <v-card-title class="title">
                          <ul class="gallery__list">
                            <li class="gallery__item">ゲーム</li>
                            <li class="gallery__item">期間：6ページ</li>
                            <li class="gallery__item">ページ数：10ページ弱</li>
                            <li class="gallery__item">担当：コーディング</li>
                            <li class="gallery__item">
                              言語：HTML / CSS / Scss / jQuery
                            </li>
                            <li class="gallery__item">
                              <a
                                href="https://drive.google.com/drive/u/1/folders/1J-nITjkvNJHv1cBUPCh0BMbU_nBxwa95"
                                target="_blank"
                                >サイトはこちら</a
                              >
                            </li>
                          </ul>
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col sm="6" cols="12">
                      <v-card>
                        <v-img
                          src="http://portfolio.nasio7.com/portfolio/wp-content/uploads/2020/01/ala_thum.jpg"
                          max-height="125"
                          class="grey darken-4"
                        ></v-img>
                        <v-card-title class="title">
                          <ul class="gallery__list">
                            <li class="gallery__item">英会話学校</li>
                            <li class="gallery__item">期間：2週間</li>
                            <li class="gallery__item">ページ数：10ページ弱</li>
                            <li class="gallery__item">担当：コーディング</li>
                            <li class="gallery__item">
                              言語：HTML / CSS / Scss / jQuery / PHP
                            </li>
                            <li class="gallery__item">
                              <a
                                href="https://drive.google.com/drive/u/1/folders/178AVqBGH18MeshoORncCXZWfGBkvhQST"
                                target="_blank"
                                >サイトはこちら</a
                              >
                            </li>
                          </ul>
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-fade-transition>
              </v-container>
            </v-tab-item>
            <v-tab-item value="tab-2">
              個人制作で表示するコンテンツ
              <v-container class="fill-height" fluid>
                <v-fade-transition mode="out-in">
                  <v-row>
                    <v-col sm="6" cols="12">
                      <v-card>
                        <v-img
                          src="http://placehold.jp/16/aaaaaa/ffffff/150x100.png?text=comming soon"
                          max-height="125"
                          class="grey darken-4"
                        ></v-img>
                        <v-card-title class="title"> test </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col sm="6" cols="12">
                      <v-card>
                        <v-img
                          src="http://placehold.jp/16/aaaaaa/ffffff/150x100.png?text=comming soon"
                          max-height="125"
                          class="grey darken-4"
                        ></v-img>
                        <v-card-title class="title"> test </v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-fade-transition>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
          <br /><br />
          <h3>ポートフォリオ</h3>
          <p>▷<a class="link" href="/">新ポートフォリオ</a>※ベータ版</p>
          <p>
            ▷<a class="link" target="_blank" href="http://portfolio.nasio7.com/"
              >旧ポートフォリオ</a
            >
          </p>
          <p>
            ▷<a
              class="link"
              href="https://kingkazuma7.github.io/felica-portfolio.github.io/felica/"
              target="_blank"
              >訓練校ポートフォリオ</a
            >
          </p>
        </div>
      </ArticleGallery>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: "tab-1",
    };
  },
};
</script>

<style scoped lang="scss" scoped>
</style>
