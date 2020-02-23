import { mapGetters } from "vuex";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Loader from "@/components/Loader";

export default {
  name: "Details",
  data() {
    return {
      formatDistanceToNow,
      loadingBlogDetails: false
    };
  },
  components: {
    Loader
  },
  computed: {
    ...mapGetters("blogStore", [
      "getBlogDetail",
      "getCategory",
      "getTags",
      "getRelatedPosts"
    ]),
    topTenTags() {
      console.log("TAGS:", this.getTags.tags);
      return this.getTags.tags
        ? this.getTags.tags
            .sort((a, b) => {
              return b.post_count - a.post_count;
            })
            .slice(0, 10)
        : [];
    },
    getCategories() {
      return this.getCategory.categories || [];
    },
    getRelatedPost() {
      return this.getRelatedPosts;
    }
  },
  watch: {
    getBlogDetail(newValue) {
      console.log("WATCH BLOG DETAILS:", newValue);
      if (newValue.ID) {
        this.$store.dispatch("blogStore/GET_RELATED_POST", {
          pathVariables: {
            postId: newValue.ID
          }
        });
      }
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.loadingBlogDetails = true;
    this.$store.dispatch("blogStore/GET_BLOG_BY_ID", {
      success: () => {
        this.loadingBlogDetails = false;
      },
      fail: () => {
        this.loadingBlogDetails = false;
      },
      pathVariables: {
        postId: this.$route.params.postId
      }
    });
    this.$store.dispatch("blogStore/GET_CATEGORY");
    this.$store.dispatch("blogStore/GET_TAGS");
  },
  methods: {
    getPostsByMe(type, item) {
      console.log("TYPE:", type);
      console.log("ITEM:", item);
      this.$router.push({ path: "/", query: { [type]: item.slug } });
    }
  }
};
