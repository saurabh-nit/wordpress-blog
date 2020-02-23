import { mapGetters } from "vuex";
// eslint-disable-next-line no-unused-vars
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Loader from "@/components/Loader";

export default {
  name: "home",
  data() {
    return {
      formatDistanceToNow,
      isLoadingBlogs: false
    };
  },
  components: {
    Loader
  },
  created() {
    this.isLoadingBlogs = true;
    let parameters = {
      number: 25
    };
    this.$store.dispatch("blogStore/GET_BLOGS", {
      success: () => {
        this.isLoadingBlogs = false;
      },
      fail: () => {
        this.isLoadingBlogs = false;
      },
      params: Object.assign(parameters, this.$route.query)
    });
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
