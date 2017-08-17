<template>
  	<a class="media-list customer-list-item" :class="{'buy-item': item && item.type && item.type == 1}">
	    <div class="item-content" v-if="item.type == 2">
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
        <div class="item-detail" v-else>
            <div class="list-block recomment-info">
                <div class="item-content">
                    <div class="item-media">
                        <img src="http://img.yudada.com/img//20170510/1494407846823_6738.png@1e_1c_2o_0l_110h_110w_90q.src" alt="">
                    </div>
                    <div class="item-inner">
                        <div class="col-70">
                            <div class="rec-user-name">
                                <span>接口测试</span>
                                <i class="iconfont icon-v2"></i>
                            </div>
                            <div class="rec-user-memo">
                                <span class="rec-user-text">昨天发布</span>
                                <span class="rec-user-text"> | xxx合作社</span>
                            </div>
                        </div>
                        <div class="identify-vertification">实名认证</div>
                    </div>
                </div>
            </div>
            <div class="recomment-footer">
                <div class="rec-footer-title">鲤鱼苗</div>
                <div class="rec-footer-tip">
                    <span class="tip-one">150-200尾/斤</span>
                    <span class="tip-one">我在湖南省xx市</span>
                </div>
                <div class="rec-footer-text">
                    广州五龙岗水产，专注于鱼苗的保种，育种，繁育各种淡水鱼苗，公司模式，信誉有保证，是您养殖的首选☺️☺️
                </div>

            </div>
        </div>
	</a>
</template>

<script>
    /**
     *  出售/求购列表的item
     */
    export default {
        name: 'customer-list-item',
        props: {
            item: {
                type: Object,
                default: {
                    type: 1
                }
            }
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

    &.buy-item{
        .item-content{
            padding-bottom: 0.2rem;
            margin-left: 0;
            border-bottom: 1px solid #eaeaea;
            align-items:center;
            .item-media{
                display: inline-block;
                padding-top: 0;
                padding-bottom: 0;
                width: 4rem;
                height: 4rem;
                overflow: hidden;
                img{
                    width: 100%;
                    display: block;
                }
            }
            .item-inner{
                padding: 0 1rem;
                margin-left: 0;
                display: flex;
                .col-70{
                    width: 73%;
                    vertical-align: middle;
                    height: 5rem;
                    .rec-user-name{
                            padding-top: .6rem;
                            color: #101013;
                            font-size: 1.6rem;
                            line-height: 2rem;
                            letter-spacing: .034rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: keep-all; 
                        i{
                            color: #47B913;
                            font-size: 1.8rem;
                            position: relative;
                            top: 0.2rem;
                            margin-left: 0.2rem;
                        }
                    }
                    .rec-user-refresh{
                            margin-top: -.4rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            .rec-user-text{
                                    font-size: 1.2rem;
                                    color: #747474;
                            }
                    }
                }
                .identify-vertification{
                        display: inline-block;
                        height: 1.9rem;
                        line-height: 1.9rem;
                        text-align: center;
                        font-size: 1.2rem;
                        color: #fff;
                        background: #F78F1F;
                        border-radius: .3rem;
                        padding: 0 .5rem;
                        margin-top: -0.4rem;
                        text-shadow: 1px -1px 1px #F78F1F;
                }

            }
        }
        .recomment-footer{
            .rec-footer-title{
                    font-size: 1.8rem;
                    color: #101013;
                    letter-spacing: .038rem;
                    line-height: 2.5rem;
                    padding: 1rem 1rem 1rem 0;
            }
            .rec-footer-tip{
                span{
                        display: inline-block;
                        background: #fff;
                        border-radius: .3rem;
                        font-size: 1.4rem;
                        letter-spacing: .03rem;
                        padding: 0 .5rem;
                        line-height: 2.2rem;
                        margin: 0 .25rem .5rem 0;
                        &.tip-one{
                            border: 1px solid #ED5B20;
                            color: #ED5B20;
                        }
                }
            }
            .rec-footer-text{
                    font-size: 1.4rem;
                    color: #747474;
                    letter-spacing: .03rem;
                    padding-right: 1rem;
                    padding-top: .8rem;
                    word-break: break-all;
                    white-space: normal;
            }
        }

    }

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
                        padding: 0 0.3rem 0 2.3rem;
                        &:before{
                            content: '特';
                            position: absolute;
                            height: 100%;
                            padding: 0 0.4rem;
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
