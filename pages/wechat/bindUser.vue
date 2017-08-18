<template>
    <div class="page-user-bind" id="user_bind">
        <div class="mask-panel" v-if="!bind">
            <div class="content">
                <div class="title">绑定你的手机号</div>
                <input type="number" name="" placeholder="请输入手机号">
                <button type="" @click="bindUser">确认绑定</button>
            </div>
        </div>
        <div class="success-bind" v-if="bind">
            <img src="../../assets/image/ic_success.png" alt="">
            <div class="success-title">
                恭喜你，成功绑定账号
            </div>
        </div>
    </div>
</template>

<script>
  import baseUrl from '~config/server'

  export default {
      name: 'bind-user',
      fetch({ store, params }) {
          // return store.dispatch('loadBindUserState')
      },
      head() {
          return {
              title: '绑定手机号',
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
      data() {
          return {}
      },
      created() {
          this.$store.dispatch('loadBindUserState')
          if (this.$route.params && !this.$route.params.code) {
              this.$store.dispatch('load', {url: `${baseUrl.baseMwebUrl}` + this.$route.path})
          }
      },
      updated() {
          // 初始化魔窗事件
          // eslint-disable-next-line
          
      },
      computed: {
          bind() {
              return this.$store.state.bindUser.isBind
          }
      },
      methods: {
          bindUser() {
              this.success = true
          }

      }
  }
</script>

<style lang="less" scoped>
.page-user-bind{
	padding: 4rem 2.75rem 0;
	.content{
		padding: 4rem 2rem;
		text-align: center;
        background: #FFFFFF;
        box-shadow: 0 0 .4rem .3rem rgba(212,212,212,0.50);
        border-radius: 0.4rem;
        .title{
            font-size: 1.8rem;
            color: #4A4A4A;
            line-height: 1.85rem;
            padding-bottom: 2rem;
        }
        input{
            width: 100%;
            background: #F2F2F2;
            border: 1px solid #D1D1D1;
            border-radius: 0.4rem;
            padding: 1.05rem 1.4rem 1.27rem;
            font-size: 1.6rem;
            color: #A9A9A9;
        }
        button{
            width: 100%;
            margin-top: 2rem;
            background: #47B913;
            border-radius: 0.4rem;
            font-size: 1.6rem;
            color: #FFFFFF;
            padding: 1.15rem 0;
            border: none;
        }
	}
}
    .success-bind{
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0 0 .4rem .3rem rgba(212,212,212,0.50);
        border-radius: 0.4rem;
        img{
            width: 5rem;
            height: 4.97rem;
            margin-top: 3rem;
        }
        .success-title{
            font-size: 1.8rem;
            color: #4A4A4A;
            padding:2.88rem  3rem;
        }
    }
</style>

