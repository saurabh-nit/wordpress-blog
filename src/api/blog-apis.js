import apiUrls from "./api-paths";
import apiCall from "./apiUtils/make-api-calls";

export default {
  getAllBlogs(callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(apiUrls.api.getAllPlanets, callback, fail, params);
  },
  getCategory(callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(apiUrls.api.getCategories, callback, fail, params);
  },
  getTags(callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(apiUrls.api.getTags, callback, fail, params);
  },
  getRelatedPost(callback, fail, pathVariables, params) {
    apiCall.makePostRequest(
      apiUrls.api.relatedPosts(pathVariables.postId),
      callback,
      fail,
      params
    );
  },
  getBlogById(callback, fail, pathVariables, params) {
    apiCall.makeGetRequest(
      apiUrls.api.getPostById(pathVariables.postId),
      callback,
      fail,
      params
    );
  }
};
