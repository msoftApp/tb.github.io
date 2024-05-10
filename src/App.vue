<template>
  <div id="app">
    <div v-if="!isLoaded&&!isiOS()" class="fakeloader" />
    <!-- 壳子部署到哪里都无所谓 -->
    <!-- 修改成为vue核心地址 -->
    <!-- <iframe v-if="!isiOS()" src="http://116.62.214.202:8081/tbc/index/home" frameborder="0" @load="onload" /> -->
    <IOSDialog v-if="isiOS()" />
  </div>
</template>

<script>
import IOSDialog from '@/components/IOS-dialog.vue'
export default {
  components: { IOSDialog },
  data() {
    return {
      isLoaded: false
    }
  },
  watch: {
    // '$route': { //
    //   handler(to, from) {
    //     this.init()
    //   },
    //   immediate: true
    // }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    isiOS() {
      const u = navigator.userAgent
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
      return isiOS
      // // return true || isiOS
      // return false && isiOS
    },
    init() {
      // eslint-disable-next-line
      $('.fakeloader').fakeLoader({
        timeToHide: 400000,
        bgColor: '#CC66FF',
        spinner: 'spinner6'
      })
    },
    onload() {
      document.querySelector('.fakeloader').style.opacity = 0
      document.querySelector('.fakeloader').style.transform = 'scale(5)'
      window.setTimeout(() => {
        this.isLoaded = true
      }, 1000)
    }

  }
}
</script>

<style lang="scss">
#app{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-size: 100%;
  // padding: 30px 25px;
  box-sizing: border-box;
  .fakeloader{
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    // transform-origin: center;
  }
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>
