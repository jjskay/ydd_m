<template>
  	<a class="media-list customer-list-item">
	    <div class="item-content">
	        <div class="item-media col-27">
	            <img src="http://img.yudada.com/img/user_head/20170807/1502097001364_7387.png?x-oss-process=image/resize,m_fill,h_100,w_100/format,png" alt="头像">
	        </div>
	        <div class="item-inner col-73">
	            <p class="title">
	                <span>黑鱼</span>
                  <i>x.xx元/斤</i>
	            </p>

              <p class="address"><span>辽宁省大连市</span>  |  <span>1斤以上</span></p>
              <p class="auth"><span>我们家的特产</span><span>实名</span></p>
              <p class="name"><span>蔡思雨<i class="iconfont icon-v2"></i></span><span>昨天发布</span></p>
              <p class="sell-time"><i class="iconfont icon-selltime"></i>预售产品，2017年10月上旬开卖</p>

              <p v-for="item in [1,2,3]" :key="new Date().getTime()" class="cert">具备“苗种生产许可证”</p>
	        </div>
	    </div>
	</a>
</template>

<script>
  export default {
      name: 'customer-list-item',
      props: {
          item: Object
      },
      methods: {

      },
      computed: {

      }
  }
</script>

<style lang="less" scoped>
@import '~assets/less/mixins';
.customer-list-item{
    -webkit-align-items: baseline;
    align-items: baseline;
    display: block;
    border-bottom: 1px solid #dbdbdb;
    padding: 1rem;

    .item-media{
        align-items: baseline;
    }
    .item-inner{
        p{
            position: relative;
            overflow: hidden;
            line-height: 1.5;
            .text-hide;
            &.title{
                color: #101013;
                font-size: 1.8rem;
                padding-right: 7rem;
                i{
                    position: absolute;
                    right: 0;
                    top:0;
                    font-style: normal;
                    font-size: 1.6rem;
                    color: #DF4048;
                }
            }

            &.address{
                line-height: 1.6;
            }

            &.auth{
                font-size: 1.2rem;
                padding-right: 4rem;
                margin-top: 0.2rem;
                span{
                    &:first-child{
                        display: inline-block;
                        max-width: 100%;
                        .text-hide;
                        position: relative;
                        border: 1px solid #47B913;
                        border-radius: 0.3rem;
                        overflow: hidden;
                        padding: 0 0.3rem 0 1.9rem;
                        &:before{
                            content: '特';
                            position: absolute;
                            height: 100%;
                            padding: 0 0.2rem;
                            background: #47B913;
                            color: #fff;
                            left: 0;
                        }
                    }

                    &:last-child{
                        display: inline-block;
                        position: absolute;
                        right: 0;
                        top: 0;
                        padding:0.1rem 0.3rem;
                        border-radius: 0.3rem;
                        background: #F78F1F;
                        color: #fff;
                    }
                }
            }

            &.name{
                padding-right: 5rem;
                span{
                    &:first-child{
                        display: inline-block;
                        max-width: 100%;
                        i{
                            color: #47B913;
                            font-size: 1.8rem;
                            position: relative;
                            top: 0.2rem;
                            margin-left: 0.2rem;
                        }
                    }
                    &:last-child{
                        display: inline-block;
                        position: absolute;
                        right: 0;
                        top: 0.4rem;
                        font-size: 1.2rem;
                    }
                }
            }
        
            &.sell-time{
                font-size: 1.2rem;
                line-height: 2.5rem;
                padding: 0 0.3rem;
                background: fade(#DF4048, 20%);
                color: #DF4048;
                margin-top: 0.4rem;
                i{
                    position: relative;
                    font-size: 1.4rem;
                    top: 0.1rem;
                    margin-right: 0.5rem;
                }
            }
            &.cert{
                color: #a9a9a9;
                height: 2rem;
                margin-top: 0.6rem;
                &:before{
                    content: '苗';
                    position: relative;
                    display: inline-block;
                    padding: 0rem 0.3rem;
                    background: #47B913;
                    color: #fff;
                    margin-right: 0.5rem;
                }
            }
        }
    }
}
</style>
