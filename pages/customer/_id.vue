<template>
    <div class="page-customer-info" id="content">
        <div class="customer-info-head">
            <div class="customer-info-head-box">
                <div class="customer-info-head-content">
                    <div class="media-list">
                        <div class="item-content">
                            <div class="item-media">
                                <img :src="getImgHead" alt="头像">
                            </div>
                            <div class="item-inner">
                                <div class="title"><b>{{customersInfo.nickname || '匿名用户'}}</b><span class="iconfont" :class="customersInfo.level ? 'icon-v' + customersInfo.level : ''"></span></div>
                                <p>加入时间：{{getYMD(customersInfo.createTime)}}</p>
                            </div>
                        </div>
                    </div>

                    <p class="customer-info-item-list" v-hide="!customersInfo.provinceName && !customersInfo.cityName">
                        <i class="iconfont icon-weizhi"></i>
                        <span>{{customersInfo.provinceName + customersInfo.cityName}}</span>
                    </p>
                    <p class="customer-info-item-list">
                        <i class="iconfont icon-phone"></i>
                        <span>{{customersInfo.phone}}</span>
                    </p>
                    <p class="customer-info-item-list" v-if="customersInfo.name">
                        <i class="iconfont icon-user-name"></i>
                        <span>{{customersInfo.name}}</span>
                    </p>
                    <p class="customer-info-item-list" v-if="customersInfo.enterpriseName">
                        <i class="iconfont icon-company"></i>
                        <span>{{customersInfo.enterpriseName}}</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="customer-info-content">
            <div class="customer-info-content-top">
                <div class="col-33">
                    <p class="title">{{customersInfo.tradeCount}}笔</p>
                    <p>成交</p>
                </div>
                <div class="col-33">
                    <p class="title">{{customersInfo.recentShopViews}}次</p>
                    <p>30天店铺浏览量</p>
                </div>
                <div class="col-33">
                    <p class="title">{{customersInfo.invitedUsersCount}}位</p>
                    <p>已邀请好友</p>
                </div>
            </div>
 
            <div class="customer-info-list-box sale-info-list">
                <div class="title">发布的出售信息（<span>{{customersInfo.saleDemandsCount}}</span>条）</div>
                <div class="customer-info-list-conttent">
                    <Item v-for="item in customersInfo.saleDemands" :isAuth="isAuth" :item="item" :key="new Date().getTime()"/>
                </div>
            </div>

            <div class="customer-info-list-box">
                <div class="title">发布的求购信息（<span>{{customersInfo.buyDemandsCount}}</span>条）</div>
                <div class="customer-info-list-conttent">
                    <Item 
                        v-for="item in customersInfo.buyDemands" 
                        :isAuth="isAuth" 
                        :item="item" 
                        :key="new Date().getTime()"
                        :enterprise-name="customersInfo.enterpriseName || ''"/>
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
  import {getYMD} from '~utils/dateFormat'

  export default {
      name: 'user-info',
      validate({ params }) {
          return (!!params.id && !Object.is(Number(params.id), NaN))
      },
      fetch({ store, params }) {
          return store.dispatch('loadCustomersInfo', params)
      },
      components: {
          Item
      },
      head() {
          return {
              title: '客户信息',
              meta: [
                  {
                      hid: 'keywords',
                      name: 'keywords',
                      content: ''
                  },
                  { hid: 'description', name: 'description', content: '' }
              ]
          }
      },
      // created() {
      //     this.$store.dispatch('loadCustomersInfo', this.$route.params)
      // },
      updated() {
          // 初始化魔窗事件
          // eslint-disable-next-line
          new window.Mlink({
              mlink: 'AajQ',
              button: document.querySelector('span#btnOpenApp')
          })
      },
      data() {
          return {}
      },
      computed: {
          fetching() {
              return this.$store.state.customer.fetching
          },

          customersInfo() {
              return this.$store.state.customer.customerInfo
          },
          isAuth() {
              const res = this.$store.state.customer.customerInfo
              let auth = false
              if (res && (res.enterpriseAuthenticationState === 1) || res.personalAuthenticationState === 1) {
                  auth = true
              }
              return auth
          },
          getImgHead() {
              let src = ''
              const res = this.$store.state.customer.customerInfo
              src = res.imgUrl ? (res.imgUrl + '?x-oss-process=image/resize,m_fill,h_100,w_100/circle,r_100/format,png') : '../img/head.png'
              return src
          }

      },
      methods: {
          loadcustomersInfo() {
              // this.$store.dispatch('loadArticles', this.nextPageParams)
          },
          downloadApp() {
              downloadApp('', 'dwonloadApp')
          },
          getYMD: getYMD
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
    .sale-info-list{
        margin-bottom: 1rem;
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
