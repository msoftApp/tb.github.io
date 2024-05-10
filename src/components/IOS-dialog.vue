<template>
  <div class="IOS-bg">
    <div class="mark">

      <div class="dialog">
        <div class="content">
          本网站的某些功能可能ios系统上无法使用，建议在浏览器中访问。网址:{{ url }}
        </div>
        <!-- 按钮组 -->
        <div class="btns">
          <div class="line" />
          <div class="btn copy-btn" @click="copy">复制网址</div>
          <div class="line" />
          <div class="btn go-btn" @click="go">继续访问</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      url: 'http://116.62.214.202:8081/tbc/index/home'
    }
  },
  methods: {
    copy() {
      var aux = document.createElement('input')
      aux.setAttribute('value', this.url)
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      document.body.removeChild(aux)
      Toast.success('复制成功：')
    },
    go() {
      window.location.href = this.url
    }
  }

}
</script>

<style lang="scss">
    .IOS-bg{
      background: url('~@/assets/IOS-BG.jpg');
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: 100% 100%;
      .mark{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        .dialog{
          width: 70%;
          // height: 75%;
          // margin-top: 10vh;
          border-radius: 12px;
          overflow: hidden;
          .content{
            background: rgba(255, 255, 255, 0.95);
            padding: 20px 25px;
            word-break: break-all;
            font-weight: bolder;
          }
          .btns{
            .line{
              height: 1.5px;
            }
            .btn{
              padding: 12px;
              color: #077fff;
              font-weight: bolder;
              text-align: center;
            }
            .copy-btn{
                background: rgba(255, 255, 255, 0.95);
            }
            .go-btn{
                background: rgba(255, 255, 255, 0.95);
            }

          }
        }

      }
    }
</style>
