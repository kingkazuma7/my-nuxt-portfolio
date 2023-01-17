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
            <dd>株式会社オートバックスセブン</dd>
            <dt>期間</dt>
            <dd>2021年4月～2022年7月</dd>
          </div>
          <div class="carrer__box">
            <dt>会社名</dt>
            <dd>株式会社ウェブスタッフ（Yahoo! JAPANに出向）</dd>
            <dt>期間</dt>
            <dd>2020年7月～2021年3月</dd>
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
              <v-container class="fill-height" fluid>
                <v-fade-transition mode="out-in">
                  <v-row>
                    <v-col
                      v-for="(item, key) in items" :key="key"
                      sm="6" cols="12" >
                      <v-card>
                        <v-img
                          :src="item.imgPath"
                          max-height="125"
                          class="grey darken-4" />
                        <v-card-title class="title">
                          <ul class="gallery__list">
                              <li class="gallery__item">{{ item.title }}</li>
                              <li class="gallery__item">期間：{{ item.term }}日</li>
                              <li class="gallery__item">ページ数：{{ item.pageNumber }}ページ</li>
                              <li class="gallery__item">担当：{{ item.person }}</li>
                              <li class="gallery__item">言語：{{ item.langage }}</li>
                              <li class="gallery__item">
                                <a :href="item.url" target="_blank" >サイトはこちら</a>
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
              <v-contsainer class="fill-height" fluid>
                <v-fade-transition mode="out-in">
                  <v-row>
                    <v-col
                      v-for="(myItem, key) in myItems" :key="key"
                      sm="6" cols="12" >
                      <v-card>
                        <v-img
                          :src="myItem.imgPath"
                          max-height="125"
                          class="grey darken-4" />
                        <v-card-title class="title">
                          <ul class="gallery__list">
                              <li class="gallery__item">{{ myItem.title ? myItem.title : "?" }}</li>
                              <li class="gallery__item">期間：{{ myItem.term ? myItem.term : "?" }}日</li>
                              <li class="gallery__item">ページ数：{{ myItem.pageNumber ? myItem.pageNumber : "?" }}ページ</li>
                              <li class="gallery__item">担当：{{ myItem.person ? myItem.person : "?" }}</li>
                              <li class="gallery__item">言語：{{ myItem.langage ? myItem.langage : "?" }}</li>
                              <li class="gallery__item">
                                <a :href="myItem.url ? myItem.url : null" target="_blank" >サイトはこちら</a>
                              </li>
                          </ul>
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-fade-transition>
              </v-contsainer>
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
import itemJsons from "../static/json/projects"
import myJsonItems from "../static/json/myworks.json"

export default {
  data() {
    return {
      model: "tab-1",
      items: itemJsons,
      myItems: myJsonItems
    };
  },
};
</script>

<style scoped lang="scss" scoped>
</style>
