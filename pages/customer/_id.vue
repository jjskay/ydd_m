<template>
    <div class="page-customer-info" id="content">
        <div class="customer-info-head">
            <div class="customer-info-head-box">
                <div class="customer-info-head-content">
                    <div class="media-list">
                        <div class="item-content">
                            <div class="item-media">
                                <img src="http://img.yudada.com/img/user_head/20170807/1502097001364_7387.png?x-oss-process=image/resize,m_fill,h_100,w_100/circle,r_100/format,png" alt="头像">
                            </div>
                            <div class="item-inner">
                                <div class="title"><b>路人甲</b><span class="iconfont icon-v2"></span></div>
                                <p>加入时间：2017年7月28日</p>
                            </div>
                        </div>
                    </div>

                    <p class="customer-info-item-list">
                        <i class="iconfont icon-weizhi"></i>
                        <span>江苏省无锡市</span>
                    </p>
                    <p class="customer-info-item-list">
                        <i class="iconfont icon-phone"></i>
                        <span>13000000000</span>
                    </p>
                    <p class="customer-info-item-list">
                        <i class="iconfont icon-user-name"></i>
                        <span>张三</span>
                    </p>
                    <p class="customer-info-item-list">
                        <i class="iconfont icon-company"></i>
                        <span>XXXX有限公司</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="customer-info-content">
            <div class="customer-info-content-top">
                <div class="col-33">
                    <p class="title">1笔</p>
                    <p>成交</p>
                </div>
                <div class="col-33">
                    <p class="title">101次</p>
                    <p>30天店铺浏览量</p>
                </div>
                <div class="col-33">
                    <p class="title">2位</p>
                    <p>已邀请好友</p>
                </div>
            </div>

            <div class="customer-info-list-box">
                <div class="title">发布的出售信息（<span>5</span>条）</div>
                <div class="customer-info-list-conttent">
                    <Item v-for="item in [1,2,3]" item="{}" :key="new Date().getTime()"/>
                </div>
            </div>
        </div>

        <div class="customer-info-footer">
            <a href="tel:13764567708" class="btn">打电话</a>
            <span @click="downloadApp" id="btnOpenApp">打开APP查看信息</span>
        </div>
    </div>
</template>

<script>
  import Item from '~components/common/customer/item'
  import downloadApp from '~utils/downloadApp'

  export default {
      name: 'user-info',
      validate({ params }) {
          return !!params.id
      },
      fetch({ store, params }) {
          // return store.dispatch('loadArticles', params)
      },
      components: {
          Item
      },
      head() {
          return {
              title: '客户信息'
          }
      },
      created() {

      },
      updated() {
          // 初始化魔窗事件
          // eslint-disable-next-line
          new window.Mlink({
              mlink: 'AajQ',
              button: document.querySelector('span#btnOpenApp')
          })
      },
      computed: {

      },
      methods: {
          loadmoreArticle() {
              // this.$store.dispatch('loadArticles', this.nextPageParams)
          },
          downloadApp() {
              downloadApp('', 'dwonloadApp')
          }
      }
  }
</script>

<style scoped lang="less">
    .page-customer-info{
        color: #727272;
        padding-bottom: 6rem;
    }
    .customer-info-head{
        background: #47B913;
        padding: 1.5rem;
        height: 18rem;
        position: relative;
    }
    .customer-info-head-box{
        padding: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
    .media-list{
        padding-bottom: 0.5rem;
        overflow: hidden;
    }
    .customer-info-head-content{
        border-radius: 0.3rem;
        background: #fff;
        padding: 2rem;
        box-shadow: 0 4px 14px 0 rgba(71,184,19,0.20);
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        word-break: keep-all;
    }
    .customer-info-head-content .item-media img{
        display: block;
        width: 5.4rem;
    }
    .item-inner .title{
        font-size: 1.8rem;
        color: #47B913;
    }
    .item-inner .title span{
        padding-left: 0.7rem;
        font-size: 2.2rem;
        position: relative;
        top: 0.3rem;
    }
    .item-inner .title b{
        display: inline-block;
        font-weight: normal;
        max-width: 15rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        word-break: keep-all;
        vertical-align: middle;
    }
    .customer-info-item-list{
        line-height: 1.5;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        word-break: keep-all;
        overflow: hidden;
    }
    .customer-info-item-list .iconfont{
        padding-right: 0.8rem;
        color: #a9a9a9;
        font-size: 1.8rem;
    }
    .customer-info-footer{
        position: fixed;
        transform: translate3d(0,0,0);
        width: 100%;
        height: 5rem;
        bottom: 0;
        left: 0;
        z-index: 100;
        background: #fff;
        box-shadow: 0 -4px 12px 0 #EAEAEA;
        text-align: center;
    }
    .customer-info-footer {
        a, span{
            display: inline-block;
            padding: 0 3rem;
            background: #47B913;
            color: #fff;
            height: 3rem;
            line-height: 3rem;
            margin-top: 1rem;
            border-radius: 0.3rem;
        }

        span{
            margin-left: 2rem;
            padding: 0 1rem;
        }
        
    }
    .customer-info-content{
        padding-top: 7rem;
    }
    .customer-info-content-top{
        overflow: hidden;
        padding-bottom: 2rem;
    }
    .customer-info-content-top .col-33{
        width: 33%;
        float: left;
        text-align: center;
    }
    .customer-info-content-top .col-33 p.title{
        font-size: 1.8rem;
        color: #47B913;
    }
    .customer-info-list-box .title{
        text-align: center;
        line-height: 4rem;
        border-bottom: 1px solid #dbdbdb;
        color: #212121;
    }
    @media screen and (max-width: 375px) and (min-width: 321px){
        .item-inner .title b{
            max-width: 20rem;
        }
    }

    @media screen and (min-width: 376px){
        .item-inner .title b{
            max-width: 25rem;
        }
    }
</style>
