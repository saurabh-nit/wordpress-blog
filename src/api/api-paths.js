const API_BASE_PATH =
  "https://public-api.wordpress.com/rest/v1.1/sites/107403796";

export default {
  api: {
    getAllPlanets: `${API_BASE_PATH}/posts`,
    getCategories: `${API_BASE_PATH}/categories`,
    getTags: `${API_BASE_PATH}/tags`,
    relatedPosts(postId) {
      return `${API_BASE_PATH}/posts/${postId}/related`;
    },
    getPostById(postId) {
      return `${API_BASE_PATH}/posts/${postId}`;
    }
  }
};
