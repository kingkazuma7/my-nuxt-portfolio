<template>
  <div class="page-index">
    <section class="profile" id="profile">
      <h2 class="section-title">Profile</h2>
      <ArticleProfile>
        <img
          class="profile__img"
          src="~/assets/images/portrait.png"
          alt="夏目漱石"
        />
        <p class="profile__lead">
          東京都江戸川区出身。27歳。<br />Web業界に興味をもち、半年間スクールに通い、その後就職。<br />
          業界歴は約2年間ほどになります。<br />
        </p>
        <p>
          <a class="link" href="/profile/">プロフィール詳細はこちら</a>
        </p>
      </ArticleProfile>
    </section>

    <section class="history" id="history">
      <h2 class="section-title">Carrer</h2>
      <ArticleHistory>
        <dl class="history__list">
          <div class="history__box">
            <dt>会社名</dt>
            <dd>株式会社ウェブスタッフ</dd>
            <dt>期間</dt>
            <dd>2020年7月～</dd>
            <dt>事業内容</dt>
            <dd>受託Web製作会社</dd>
            <dt>雇用形態</dt>
            <dd>契約社員</dd>
            <dt>業務内容</dt>
            <dd>Vueを用いた社内デザインシステム制作</dd>
          </div>
          <div class="history__box">
            <dt>会社名</dt>
            <dd>株式会社フライング・ハイ・ワークス</dd>
            <dt>期間</dt>
            <dd>2018年2月～2019年12月</dd>
            <dt>事業内容</dt>
            <dd>受託Web製作会社</dd>
            <dt>雇用形態</dt>
            <dd>正社員</dd>
            <dt>業務内容</dt>
            <dd>
              <ul class="history__list__child">
                <li>Webサイト更新業務</li>
                <li>LP制作</li>
                <li>小規模コーポレートサイト制作</li>
              </ul>
            </dd>
          </div>
          <div class="history__box">
            <dt>会社名</dt>
            <dd>株式会社アウルキャンプ</dd>
            <dt>期間</dt>
            <dd>2017年6月～11月</dd>
            <dt>事業内容</dt>
            <dd>証券会社からの依頼業務</dd>
            <dt>雇用形態</dt>
            <dd>契約社員</dd>
            <dt>業務内容</dt>
            <dd>
              <ul class="history__list__child">
                <li>NAS移行に伴うログファイルの確認、Excel記載</li>
                <li>JobCenterツールの操作</li>
              </ul>
            </dd>
          </div>
          <div class="history__box">
            <dt>会社名</dt>
            <dd>フェリカテクニカルアカデミー Webサイト制作科</dd>
            <dt>期間</dt>
            <dd>2016年10月～2017年 4月</dd>
            <dt>事業内容</dt>
            <dd>求職者支援訓練校</dd>
            <dt>雇用形態</dt>
            <dd>受講生</dd>
            <dt>業務内容</dt>
            <dd>
              <ul class="history__list__child">
                <li>Webサイト制作にまつわる基礎理解（半年間のカリキュラム）</li>
                <li>クライアントワーク</li>
                <li>ポートフォリオの作成</li>
              </ul>
            </dd>
          </div>
          <div class="history__box">
            <dt>会社名</dt>
            <dd>株式会社サミット</dd>
            <dt>期間</dt>
            <dd>2016年4月～2016年 9月</dd>
            <dt>事業内容</dt>
            <dd>食品小売業</dd>
            <dt>雇用形態</dt>
            <dd>正社員</dd>
            <dt>業務内容</dt>
            <dd>店舗接客・販売</dd>
          </div>
        </dl>
        <p>
          <a class="link" href="/history/">経歴の詳細はこちら</a>
        </p>
      </ArticleHistory>
    </section>

    <section class="gallery" id="gallery">
      <h2 class="section-title">Gallery</h2>
      <ArticleGallery>
        <div class="btn-wrapper">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="currentTab = index"
          >
            {{ tab.tabName }}
          </button>
        </div>
        <ul class="tab-content">
          <li v-show="currentTab === 0">hoge</li>
          <li v-show="currentTab === 1">fuga</li>
          <li v-show="currentTab === 2">soge</li>
        </ul>
        <a class="link" href="/gallery/">gallery</a>
      </ArticleGallery>
    </section>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="scss" rel="">
/* ----- common ----- */
body {
  color: $color-black;
  background-color: $color-lightgray;
  font-size: 14px;
  letter-spacing: 0.05em;
}
.link {
  color: $color-blue;
}

/* ----- profile ----- */
.profile {
  &__img {
    display: block;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
}

/* ----- history ----- */
.history {
  &__box {
    border-bottom: 1px dashed $color-gray;
    margin-bottom: 30px;
    padding-bottom: 10px;
    &:last-of-type {
      padding-bottom: 0;
      border-bottom: inherit;
    }
  }
  &__list__child {
    padding-top: 8px;
    margin-bottom: 0;
    li {
      text-indent: 1.5em;
      padding-left: 0.5em;
    }
  }
}

/* ----- profile ----- */
/* ----- profile ----- */
</style>
