<template>
  	<a :href="href" class="media-list customer-list-item" :class="{'buy-item': item && item.type && item.type == 1}">
	    <div class="item-content" v-if="item.type == 2">
	        <div class="item-media col-27">
	            <img :src="item.imgePath + '?x-oss-process=image/resize,m_fill,h_100,w_100/format,png'" alt="头像">
	        </div>
	        <div class="item-inner col-73">
	            <p class="title">
	                <span>{{item.fishTypeName}}</span>
                  <i>{{getPrice}}</i>
	            </p>

              <p class="address"><span>{{item.address}}</span>  <span v-if="item.address && item.quantityTagList && item.quantityTagList.length">|</span>  <span v-if="item.quantityTagList && item.quantityTagList.length">{{item.quantityTagList.tagName}}</span></p>
              <p class="auth">
                  <span v-show="item.title">{{item.title}}</span>
                  <span v-show="isAuth">实名</span>
              </p>
              <p class="name"><span>{{item.contactName || '匿名用户'}}<i v-if="item.level" class="iconfont icon-v2" :class="item.level ? 'icon-v' + item.level : ''"></i>
                    </span>
                    <span>{{releaseInfoDate(item.sort)}}</span>
              </p>
              <p class="sell-time" v-if="isSellTime"><i class="iconfont icon-selltime"></i>{{getMarketTimeStr(item.demandInfoSale.marketTime)}}</p>

              <p :key="new Date().getTime()" v-for="cert in item.fishCertificateList" class="cert seedling" :class="getCertType(cert.type)"></p>
	        </div>
	    </div>
        <div class="item-detail" v-else>
            <div class="list-block recomment-info">
                <div class="item-content">
                    <div class="item-media">
                        <img :src="getImgHead" alt="">
                    </div>
                    <div class="item-inner">
                        <div class="col-70">
                            <div class="rec-user-name">
                                <span>{{item.contactName || '匿名用户'}}</span>
                                <i v-if="item.level" class="iconfont icon-v2" :class="item.level ? 'icon-v' + item.level : ''"></i>
                            </div>
                            <div class="rec-user-memo">
                                <span class="rec-user-text">{{releaseInfoDate(item.sort)}}</span>
                                <span class="rec-user-text" v-if="enterpriseName"> | {{enterpriseName}}</span>
                            </div>
                        </div>
                        <div class="identify-vertification" v-if="isAuth">实名认证</div>
                    </div>
                </div>
            </div>
            <div class="recomment-footer">
                <div class="rec-footer-title">{{item.fishTypeName}}</div>
                <div class="rec-footer-tip">
                    <span class="tip-one specifications" v-if="item.specifications">{{item.specifications}}</span>
                    <span class="tip-one stock" v-if="item.stock">{{item.stock}}</span>
                    <span class="tip-one address" v-if="item.provinceName || item.cityName">{{`我在${item.provinceName}${item.cityName}`}}</span>
                    <span class="tip-one buy-time" v-if="getBuyTagText">{{getBuyTagText}}</span>
                </div>
                <div class="rec-footer-text" v-if="item.description">{{item.description}}</div>

            </div>
        </div>
	</a>
</template>

<script>
    /**
     *  出售/求购列表的item
     */
    import {releaseInfoDate, getMarketTimeStr, getBuyTimeText} from '~utils/dateFormat'
    import baseUrl from '~config/server'

    export default {
        name: 'customer-list-item',
        props: {
            item: {
                type: Object,
                default: {
                    type: 2
                }
            },
            isAuth: {
                type: Boolean,
                default: false
            },
            enterpriseName: {
                type: String,
                default: ''
            }
        },
        methods: {
            releaseInfoDate: releaseInfoDate,
            getMarketTimeStr: getMarketTimeStr,
            getCertType(type) {
                let cert = ''
                type === 6 && (cert = 'identity')
                type === 1 && (cert = 'seedling')
                type === 5 && (cert = 'blue')
                type === 4 && (cert = 'agriculture')
                type === 3 && (cert = 'check')
                type === 2 && (cert = 'water')
                return cert
            }
        },
        computed: {
            isSellTime() {
                let res = false
                this.item.demandInfoSale && !this.item.demandInfoSale.hasSpotGoods && this.item.demandInfoSale.marketTime * 1000 > new Date().getTime() && (res = true)
                return res
            },
            getImgHead() {
                let src = ''
                const res = this.item
                src = res.headImg ? (res.headImg + '?x-oss-process=image/resize,m_fill,h_100,w_100/circle,r_100/format,png') : '../img/head.png'
                // @1e_1c_2o_0l_110h_110w_90q.src
                return src
            },
            getBuyTagText() {
                let res = ''
                if (this.item.demandInfoBuy && this.item.demandInfoBuy.endTime && this.item.demandInfoBuy.endTime > new Date().getTime()) {
                    res = getBuyTimeText(this.item.demandInfoBuy.endTime)
                }
                return res
            },
            getPrice() {
                let res = '价格面议'
                const sale = this.item.demandInfoSale
                if (sale && (sale.lowerPrice || sale.expectedPrice)) {
                    res = 'x.xx元/斤'
                }
                return res
            },
            href() {
                return `${baseUrl.baseMwebUrl}demandInfo/${this.item.id}`
            }
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
    color: #727272;

    &.buy-item{
        white-space: normal;
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
                padding-left: 1rem;
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
                    padding: 1rem 0;
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
                        &.stock{
                            border: 1px solid #21CEA0;
                            color: #21CEA0;
                        }
                        &.address{
                            border: 1px solid #008AF1;
                            color: #008AF1;
                        }
                        &.buy-time{
                            border: 1px solid #9d9d9d;
                            color: #9d9d9d;
                        }
                }
            }
            .rec-footer-text{
                    font-size: 1.4rem;
                    color: #747474;
                    letter-spacing: .03rem;
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
            line-height: 1.4;

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
                margin-bottom: 0.6rem;
                i{
                    position: relative;
                    font-size: 1.4rem;
                    top: 0.1rem;
                    margin-right: 0.5rem;
                }
            }
            &.cert{
                height: 2rem;
                margin-top: 0.2rem;
                color: #a9a9a9;
                font-size: 1.2rem;
                &:before{
                    position: relative;
                    display: inline-block;
                    padding: 0rem 0.3rem;
                    margin-right: 0.5rem;
                    border-radius: 0.1rem;
                }
                &.seedling{
                    &:before{
                        content: '苗';
                        border: 1px solid #47B913;
                        color: #47B913;
                    }
                    &:after{
                        content: '具备“苗种生产许可证”';
                    }
                }

                &.identity{
                    &:before{
                        content: '证';
                        background: #DF4048;
                        color: #fff;
                    }
                    &:after{
                        content: '具备“有机产品认证证书”';
                    }
                }
                &.blue{
                    &:before{
                        content: '证';
                        background: #DF4048;
                        color: #fff;
                    }
                    &:after{
                        content: '具备“绿色食品证书”';
                    }
                }
                &.agriculture{
                    &:before{
                        content: '证';
                        background: #DF4048;
                        color: #fff;
                    }
                    &:after{
                        content: '具备“无公害农产品产地认证证书”';
                    }
                }
                &.check{
                    &:before{
                        content: '检';
                        border: 1px solid #F68E1F;
                        color: #F68E1F;
                    }
                    &:after{
                        content: '具备“检验检疫合格证”';
                    }
                }
                &.water{
                    &:before{
                        content: '水';
                        border: 1px solid #008AF1;
                        color: #008AF1;
                    }
                    &:after{
                        content: '具备“水产养殖许可证”';
                    }
                }
            }
        }
        @media screen and (max-width: 321px){
            p{
                line-height: 1.2;
                &.name{
                    line-height: 1.1;
                }
            }
        }
        @media screen and (min-width: 376px) {
            p{
                line-height: 1.7;
                &.name{
                    line-height: 1.5;
                }
            }
        }

    }
}
</style>
