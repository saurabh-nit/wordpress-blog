import { mapGetters } from "vuex";
// eslint-disable-next-line no-unused-vars
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default {
  name: "home",
  data() {
    return {
      formatDistanceToNow
    };
  },
  created() {
    this.$store.dispatch("blogStore/GET_BLOGS");
  },
  computed: {
    ...mapGetters("blogStore", ["getBlogs"]),
    blogList() {
      return this.getBlogs.posts;
    }
  },
  methods: {
    showBlogDetails(blog) {
      this.$router.push(`/details/${blog.ID}`);
    }
  }
};
