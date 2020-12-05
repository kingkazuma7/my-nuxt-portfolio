import ArticleProfile from "~/components/common/ArticleProfile";
import ArticleGallery from "~/components/common/ArticleGallery";

export default {
  name: "tabs",
  components: {
    ArticleProfile,
    ArticleGallery,
  },
  props: {},
  data() {
    return {
      currentTab: 0,
      id: 0,
      tabName: "",
      tabs: [
        { id: 1, tabName: "訓練校時代" },
        { id: 2, tabName: "Web制作会社" },
        { id: 3, tabName: "事業会社" },
      ],
    };
  },
};
