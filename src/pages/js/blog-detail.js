import { mapGetters } from "vuex";

export default {
  name: "Details",
  computed: {
    ...mapGetters("blogStore", ["getBlogDetail", "getCategory", "getTags"]),
    topTenTags() {
      console.log("TAGS:", this.getTags.tags);
      return this.getTags.tags
        .sort((a, b) => {
          return b.post_count - a.post_count;
        })
        .slice(0, 10);
    }
  },
  created() {
    window.scrollTo(0, 0);
    console.log("******:", this.$route.params.postId);
    this.$store.dispatch("blogStore/GET_BLOG_BY_ID", {
      pathVariables: {
        postId: this.$route.params.postId
      }
    });

    this.$store.dispatch("blogStore/GET_CATEGORY");
    this.$store.dispatch("blogStore/GET_TAGS");
    this.$store.dispatch("blogStore/GET_RELATED_POST", {
      pathVariables: {
        postId: this.getBlogDetail.ID
      }
    });
  },
  methods: {
    goToHomePage() {
      this.$router.push("/");
    }
  }
};
