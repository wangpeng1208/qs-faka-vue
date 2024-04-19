<template>
  <div id="index" class="index-wrapper">
    <c-header />

    <div class="home-experience">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="img d-none d-sm-block"><img src="./css/img/bg_index2.png" alt="" /></div>
          </div>
          <div class="col-md-7">
            <div class="h">
              <h2 class="wow fadeInUp">{{ siteConfig?.site_name }}支付平台</h2>
              <h2 class="wow fadeInUp" data-wow-delay=".3s">24小时监控订单，资金无忧</h2>
              <p class="d-none d-sm-block wow fadeInUp" data-wow-delay=".6s">致力于解决虚拟商品的快捷寄售服务，功能齐全、安全稳定</p>
            </div>
            <div class="row list">
              <div class="col-md-4">
                <dl>
                  <dt>
                    <div class="icon"><img src="./css/img/icon_index3.png" alt="" /></div>
                  </dt>
                  <dd>高防服务器，安全稳定</dd>
                </dl>
              </div>
              <div class="col-md-4">
                <dl>
                  <dt>
                    <div class="icon"><img src="./css/img/icon_index4.png" alt="" /></div>
                  </dt>
                  <dd>次日结账，资金保障</dd>
                </dl>
              </div>
              <div class="col-md-4">
                <dl>
                  <dt>
                    <div class="icon"><img src="./css/img/icon_index5.png" alt="" /></div>
                  </dt>
                  <dd>全天候10秒响应服务</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="btnbox">
            <p class="d-none d-sm-block">数万用户的信赖之选，提供便捷、绿色、安全、快速的销售和购买体验</p>
            <p class="btn btn-experience" @click="goPage('login', {})">立即体验</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home-pay">
      <div class="container">
        <div class="hd">
          <dl>
            <dt class="wow fadeInUp">支付渠道丰富</dt>
            <dd class="wow fadeInUp" data-wow-delay=".3s">对接行业内最优质的多家家支付通道，通道优质稳定，全力保障业务流畅</dd>
          </dl>
        </div>

        <div class="bd">
          <div class="swiper-pay swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px)">
              <div class="swiper-slide swiper-slide-active" style="width: 190px; margin-right: 100px">
                <div class="item">
                  <img src="./css/img/index_01.png" alt="" />
                  <span>支付宝支付</span>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-next" style="width: 190px; margin-right: 100px">
                <div class="item">
                  <img src="./css/img/index_02.png" alt="" />
                  <span>微信支付</span>
                </div>
              </div>
              <div class="swiper-slide" style="width: 190px; margin-right: 100px">
                <div class="item">
                  <img src="./css/img/index_03.png" alt="" />
                  <span>QQ钱包</span>
                </div>
              </div>
              <div class="swiper-slide" style="width: 190px; margin-right: 100px">
                <div class="item">
                  <img src="./css/img/index_04.png" alt="" />
                  <span>京东支付</span>
                </div>
              </div>
              <div class="swiper-slide" style="width: 190px; margin-right: 100px">
                <div class="item">
                  <img src="./css/img/index_05.png" alt="" />
                  <span>蚂蚁花呗</span>
                </div>
              </div>
              <div class="swiper-slide" style="width: 190px; margin-right: 100px">
                <div class="item">
                  <img src="./css/img/index_06.png" alt="" />
                  <span>银联支付</span>
                </div>
              </div>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
          <div class="swiper-arrow d-none d-sm-block">
            <div class="swiper-button-prev arrow-prev arrow-prev1 swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
            <div class="swiper-button-next arrow-next arrow-next1" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-jion">
      <div class="container">
        <div class="hd">
          <dl>
            <dt class="wow fadeInUp">入驻流程</dt>
            <dd class="wow fadeInUp" data-wow-delay=".3s">快速成为商户，只需6步，享受全新自动寄售</dd>
          </dl>
        </div>
        <div class="row">
          <div class="col-md-7">
            <div class="bd">
              <div class="list">
                <div class="item">
                  <dl>
                    <dt><img src="./css/img/bg_jion1.png" alt="" /></dt>
                    <dd>注册商户</dd>
                  </dl>
                </div>
                <div class="item">
                  <dl>
                    <dt><img src="./css/img/bg_jion2.png" alt="" /></dt>
                    <dd>绑定资料</dd>
                  </dl>
                </div>
                <div class="item">
                  <dl>
                    <dt><img src="./css/img/bg_jion3.png" alt="" /></dt>
                    <dd>发布商品</dd>
                  </dl>
                </div>
              </div>
              <div class="list">
                <div class="item">
                  <dl>
                    <dt><img src="./css/img/bg_jion4.png" alt="" /></dt>
                    <dd>自助下单</dd>
                  </dl>
                </div>
                <div class="item">
                  <dl>
                    <dt><img src="./css/img/bg_jion5.png" alt="" /></dt>
                    <dd>自动发货</dd>
                  </dl>
                </div>
                <div class="item">
                  <dl>
                    <dt><img src="./css/img/bg_jion6.png" alt="" /></dt>
                    <dd>自动结算</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="img d-none d-sm-block"><img src="./css/img/bg_index3.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-case d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="bg"></div>
          </div>
          <div class="col-md-6">
            <div class="list">
              <div class="item">
                <div class="line"></div>
                <dl>
                  <dt>添加商品卡密</dt>
                  <dd>维护您的卡密信息</dd>
                </dl>
              </div>
              <div class="item">
                <div class="line"></div>
                <dl>
                  <dt>购买页面丰富</dt>
                  <dd>有效提升转化量</dd>
                </dl>
              </div>
              <div class="item">
                <div class="line"></div>
                <dl>
                  <dt>轻松购买，即买即发</dt>
                  <dd>轻松购买，即买即发</dd>
                </dl>
              </div>
            </div>
            <div class="btnbox">
              <p class="d-none d-sm-block">数万用户的信赖之选，提供便捷、绿色、安全、快速的销售和购买体验</p>
              <p class="btn btn-experience" @click="goPage('login', {})">立即体验</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tongji_box d-none d-lg-block">
      <img src="./css/img/tu_zuo.35365c2.png" class="touts" /> <img src="./css/img/tu_you.1cfc770.png" class="touts" />
      <div class="tongji container">
        <div class="tongji_hide">
          <span>{{ siteConfig?.site_name }}致力打造做最稳定的寄售平台</span> <span></span>
        </div>
        <div class="daojis_box">
          <div class="hidex">
            <div>
              <img src="./css/img/down.png" />
              <span>
                <p>稳定运营</p>
                <p>Robust operation</p>
              </span>
            </div>
            <div>
              <img src="./css/img/card.png" />
              <span>
                <p>成功发卡</p>
                <p>Quantity of card issuing</p>
              </span>
            </div>
            <div>
              <img src="./css/img/message.png" />
              <span>
                <p>服务商户</p>
                <p>Service business</p>
              </span>
            </div>
          </div>
          <div class="daojis_body">
            <div class="fw_time_box">
              <span>1</span>
              <p>年</p>
              <span>1</span>
              <p>月</p>
              <span>1</span><span>2</span>
              <p>日</p>
              <span>1</span><span>3</span>
              <p>时</p>
              <span>3</span><span>2</span>
              <p>秒</p>
            </div>
            <div id="num_card" class="cg">
              <span>{{ indexUserCount.CardsSum }}</span> <span>张</span>
            </div>
            <div id="num_user" class="cg">
              <span>{{ indexUserCount.userCount }}</span> <span>户</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-join">
      <div class="container">
        <dl>
          <dt class="wow fadeInUp" style="visibility: visible; animation-name: fadeInUp">入驻我们，即刻赚钱</dt>
          <dd class="wow fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp">为虚拟寄售量身打造的服务平台 24小时监控订单资金无忧</dd>
        </dl>
        <p class="btn btn-join" @click="goPage('login', {})">
          <span>立即入驻，成为商户</span>
          <span class="arrow">&gt;</span>
        </p>
      </div>
    </div>
    <c-footer />
  </div>
</template>
<script lang="ts">
export default {
  name: 'Index',
};
</script>
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { indexCount } from '@/api/home/index';
import { useSiteStore } from '@/store';

import CFooter from './components/Footer.vue';
import CHeader from './components/Header.vue';

const siteStore = useSiteStore();
const siteConfig = computed(() => siteStore.config);
const router = useRouter();
const indexUserCount = ref({
  CardsSum: 0,
  userCount: 0,
});
const getIndxCount = async () => {
  const res = await indexCount();
  indexUserCount.value = res.data;
};

// 每5s刷新一次
const jsq = setInterval(() => {
  getIndxCount();
}, 5000);

const currentTab = ref('index');
const goPage = (name: string, value: any) => {
  currentTab.value = name;
  router.push({
    name,
    params: {
      alias: value,
    },
  });
};
onMounted(() => {
  getIndxCount();
});
onBeforeUnmount(() => {
  clearInterval(jsq);
});
</script>

<style lang="less" scoped>
@import url('./css/style.less');
@import url('./css/tongji.less');

.btn {
  cursor: pointer;
}
</style>
