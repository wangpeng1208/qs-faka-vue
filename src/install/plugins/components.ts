import type { App } from 'vue';

import WpEditor from '@/components/editor/index.vue';
import WpImage from '@/components/image/index.vue';
import WpCheckTag from '@/components/tag/checkTag.vue';
import WpUpload from '@/components/upload/index.vue';

export default (app: App<Element>) => {
  app.component('WpImage', WpImage);
  app.component('WpEditor', WpEditor);
  app.component('WpCheckTag', WpCheckTag);
  app.component('WpUpload', WpUpload);
};
