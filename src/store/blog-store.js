import api from "@/api/blog-apis";
import errorHandler from "@/api/apiUtils/error-handler";

export default {
  state: {
    blogs: [],
    blogDetail: {},
    categories: [],
    tags: [],
    relatedPost: []
  },
  getters: {
    getBlogs(state) {
      return state.blogs;
    },
    getBlogDetail(state) {
      return state.blogDetail;
    },
    getCategory(state) {
      return state.categories;
    },
    getTags(state) {
      return state.tags;
    },
    getRelatedPosts(state) {
      return state.relatedPost;
    }
  },
  mutations: {
    setBlogs(state, value) {
      state.blogs = value;
    },
    setBlogDetail(state, value) {
      state.blogDetail = value;
    },
    setCategory(state, value) {
      state.categories = value;
    },
    setTags(state, value) {
      state.tags = value;
    },
    setRelatedPosts(state, value) {
      state.relatedPost = value;
    }
  },
  actions: {
    GET_BLOGS({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getAllBlogs(
        response => {
          commit("setBlogs", response.data);
        },
        error => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params
      );
    },
    GET_CATEGORY({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getCategory(
        response => {
          commit("setCategory", response.data);
        },
        error => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params
      );
    },
    GET_TAGS({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getTags(
        response => {
          commit("setTags", response.data);
        },
        error => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params
      );
    },
    GET_RELATED_POST({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getRelatedPost(
        response => {
          console.log("GET_RELATED_POST:", response);
          commit("setRelatedPosts", response.data);
        },
        error => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params
      );
    },
    GET_BLOG_BY_ID({ commit, dispatch }, { params, pathVariables } = {}) {
      api.getBlogById(
        response => {
          console.log("GET_BLOG_BY_ID:", response);
          commit("setBlogDetail", response.data);
        },
        error => {
          errorHandler.handleErrors(dispatch, error);
        },
        pathVariables,
        params
      );
    }
  },
  namespaced: true
};
