<template>
  <div class="pageContainer">
    <TheHeader />
    <main class="contents">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/common/TheHeader.vue";
import TheFooter from "~/components/common/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped lang="scss">
.contents {
  max-width: 600px;
  padding: 40px 15px;
  margin: 0 auto;
}
</style>
