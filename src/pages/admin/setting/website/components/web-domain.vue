<template>
  <t-card style="padding-top: 20px" class="basic-container" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="150" style="width: 500px">
      <t-form-item label="主站域名" name="site_domain" tips="">
        <t-input v-model="formData.site_domain" clearable placeholder="请输入主站域名" />
      </t-form-item>
      <t-form-item label="链接域名" name="site_shop_domain" tips="短链接将会通过此处填写的域名生成对应的短链接。">
        <t-input v-model="formData.site_shop_domain" clearable placeholder="请输入链接域名" />
      </t-form-item>
      <t-form-item label="短网址功能" name="site_domain_short">
        <t-select
          v-model="formData.site_domain_short"
          :options="[
            // { label: '自己短网址', value: 'Site' },
            { label: '新浪短网址', value: 'Sina' },
            { label: '缩我短网址', value: 'Suo' },
            // { label: '百度短网址', value: 'Baidu' },
          ]"
          clearable
          placeholder="请选择短网址功能"
        />
      </t-form-item>
      <t-form-item v-if="formData.site_domain_short == 'Site'" label="短网址域名" name="sina_app_key">
        <t-input v-model="formData.site_shortlink_domain" clearable placeholder="请输入短网址域名" />
      </t-form-item>
      <t-form-item v-if="formData.site_domain_short == 'Sina'" label="新浪短网址配置（APP_KEY）" name="sina_app_key">
        <t-input v-model="formData.sina_app_key" clearable placeholder="请输入APP_KEY" />
      </t-form-item>
      <t-form-item v-if="formData.site_domain_short == 'Sina'" label="新浪短网址配置（APP_SECRET）" name="sina_app_secret">
        <t-input v-model="formData.sina_app_secret" clearable placeholder="请输入APP_SECRET" />
      </t-form-item>

      <t-form-item v-if="formData.site_domain_short == 'Suo'" label="缩我客短网址配置（KEY）" name="suo_app_key" tips="缩我短网址申请网址：https://suowo.cn/">
        <t-input v-model="formData.suo_app_key" clearable placeholder="请输入缩我key" />
      </t-form-item>

      <t-form-item>
        <t-space size="small">
          <t-button theme="primary" @click="submit">提交</t-button>
          <t-button theme="default" variant="base" type="reset">重置</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-card>
</template>
<script lang="ts">
export default {
  name: 'WebDomain',
};
</script>
<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { editConfig, getConfig } from '@/api/admin/config/config';

const formData = reactive({
  site_domain: '',
  site_shop_domain: '',
  site_domain_short: '',
  sina_app_key: '',
  sina_app_secret: '',
  suo_app_key: '',
  site_shortlink_domain: '',
});

// 获取邮箱配置

const fetchConfig = async () => {
  const { data } = await getConfig({
    field: Object.keys(formData),
  });
  for (const key in data) {
    // @ts-ignore
    formData[key] = data[key];
  }
};
fetchConfig();

const FORM_RULES: Record<string, FormRule[]> = {
  site_domain: [{ required: true, message: '请输入主站域名' }],
};
const formRef = ref();
const submit = async () => {
  const result = await formRef.value.validate();
  if (typeof result !== 'object' && result) {
    const res = await editConfig({
      data: formData,
    });
    if (res.code === 1) {
      MessagePlugin.success('操作成功');
    } else {
      MessagePlugin.error(res.msg);
    }
  }
};
</script>
