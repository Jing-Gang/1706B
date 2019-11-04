<template>
  <div class="wrap">
    <div>
      <router-view></router-view>
    </div>
    <footer>
      <router-link to="/home/timeline" tag="span">
        <i class="iconfont iconwangluo"></i>
        <span>圈子</span>
      </router-link>
      <router-link to="/home/my" tag="span">
        <i class="iconfont iconnanhai"></i>
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>

<style lang="scss">
.wrap {
  display: flex;
  height: 100%;
  flex-direction: column;
  & > div {
    flex: 1;
  }
  footer {
    height: 1rem;
    font-size: 0.32rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  i {
    font-size: 0.4rem;
  }
  span {
    flex: 1;
    text-align: center;
  }
}
span {
  color: #4f4d4d;
}
.router-link-active,
.router-link-active span {
  color: #f76968;
}
</style>
