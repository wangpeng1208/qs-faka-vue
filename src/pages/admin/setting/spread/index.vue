<template>
  <t-card title="推广设置" class="basic-container" :bordered="false">
    <t-form ref="formRef" label-align="left" :data="formData" :rules="FORM_RULES" :label-width="300">
      <t-form-item label="邀请码模式" name="spread_invite_code" tips="">
        <!-- radio -->
        <t-radio-group v-model="formData.spread_invite_code" :options="options" />
      </t-form-item>
      <t-form-item label="邀请码必填" name="is_need_invite_code" tips="">
        <t-radio-group v-model="formData.is_need_invite_code" :options="options" />
      </t-form-item>
      <t-form-item label="邀请码获取（购买）链接" name="invite_code_get_url" tips="邀请码模式开启且不为空，注册的时候会显示">
        <t-input v-model="formData.invite_code_get_url" clearable placeholder="请输入链接" />
      </t-form-item>
      <!-- 邀请注册奖励 -->
      <t-form-item label="邀请注册奖励" name="spread_reward" tips="邀请注册奖励，0表示不奖励">
        <t-radio-group v-model="formData.spread_reward" :options="options" />
      </t-form-item>
      <!-- 邀请注册奖励金额 -->
      <t-form-item label="邀请注册奖励金额" name="spread_reward_money" tips="邀请注册奖励金额，0表示不奖励">
        <t-input-number v-model="formData.spread_reward_money" theme="normal" :min="0" clearable placeholder="请输入邀请注册奖励金额" suffix="元" />
      </t-form-item>
      <!-- 推广返佣比例 -->
      <t-form-item label="推广返佣比例" name="spread_rebate_rate" tips="推广返佣比例，0表示不返佣">
        <t-input-number v-model="formData.spread_rebate_rate" theme="normal" :min="0" :max="100" clearable placeholder="请输入推广返佣比例" suffix="%" />
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

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { reactive } from 'vue';

import { editConfig, getConfig } from '@/api/admin/config/config';

const formData = reactive({
  spread_invite_code: '',
  is_need_invite_code: '',
  invite_code_get_url: '',
  spread_reward: '',
  spread_reward_money: '',
  spread_rebate_rate: '',
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
const submit = async () => {
  const res = await editConfig({
    data: formData,
  });
  if (res.code === 1) {
    MessagePlugin.success('操作成功');
  } else {
    MessagePlugin.error(res.msg);
  }
};
// 开启 关闭 options
const options = [
  { label: '开启', value: 1 },
  { label: '关闭', value: 0 },
];
</script>
