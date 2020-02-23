<template>
  <div class="success">
    <div class="sidebar">
      <a class="active" href="/">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    <div class="content">
      <div><button @click="goToHomePage">Start Again</button></div>
      <h2>Details.......</h2>
      <div class="success__excert" v-html="getBlogDetail.excerpt"></div>
      <div class="success__content" v-html="getBlogDetail.content">{{ getBlogDetail }}</div>
    </div>
  </div>
</template>
<script src="./js/blog-detail.js"></script>
<style lang="scss" scoped>
.success {
  &__excert {
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
  }

  &__content {
    margin-top: 30px;
    text-align: left;

    /deep/ img {
      width: 100%;
    }
  }

  .sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
  }

  .sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }

  .sidebar a.active {
    background-color: #4CAF50;
    color: white;
  }

  .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
  }

  div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
  }

  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
  }

  @media screen and (max-width: 400px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }
}
</style>
