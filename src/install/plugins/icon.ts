// https://github.com/element-plus/element-plus/issues/7293

import * as Icons from 'tdesign-icons-vue-next';
import type { App } from 'vue';

export default (app: App<Element>) => {
  // 全局注册图标
  for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component);
  }
};
