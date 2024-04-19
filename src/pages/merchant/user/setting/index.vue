<template>
  <t-tabs v-model="defaultActive" placement="top" :default-value="defaultActive">
    <t-tab-panel :value="1" label="商户资料">
      <user-setting @success="changeDefault" />
    </t-tab-panel>
  </t-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import UserSetting from './components/userSetting.vue';

const defaultActive = ref(1);
const changeDefault = (val: number) => {
  defaultActive.value = val;
};
</script>
