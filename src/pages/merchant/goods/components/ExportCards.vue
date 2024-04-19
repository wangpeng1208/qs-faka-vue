<template>
  <t-dialog v-model:visible="visible" :close-btn="false" header="导出卡密" :on-confirm="onSubmit">
    <t-form ref="form" :data="cardFormData" label-width="auto">
      <t-form-item label="选择商品" name="goods_id">
        <t-select v-model="cardFormData.goods_id" :style="{ width: '550px' }" placeholder="请选择商品" clearable :options="goodsListOptions" :keys="{ value: 'id', label: 'name' }" />
      </t-form-item>
      <t-form-item label="使用状态" name="status">
        <wp-check-tag
          v-model="cardFormData.status"
          :items="[
            {
              label: '未使用',
              value: 1,
            },
            {
              label: '已使用',
              value: 2,
            },
          ]"
        />
      </t-form-item>
      <t-form-item label="导出范围" name="range">
        <wp-check-tag
          v-model="cardFormData.range"
          :items="[
            {
              label: '全部库存',
              value: 0,
            },
            {
              label: '指定数量',
              value: 1,
            },
          ]"
        />
      </t-form-item>
      <t-form-item v-if="cardFormData.range == 1" label="导出数量" name="number">
        <t-input-number v-model="cardFormData.number" />
      </t-form-item>
      <t-form-item label="是否删除" name="del">
        <wp-check-tag
          v-model="cardFormData.del"
          :items="[
            {
              label: '仅导出不做删除',
              value: 0,
            },
            {
              label: '导出并删除卡密',
              value: 1,
            },
          ]"
        />
      </t-form-item>
      <t-form-item label="导出名称" name="need_goods_name">
        <wp-check-tag
          v-model="cardFormData.need_goods_name"
          :items="[
            {
              label: '不导出商品名',
              value: 0,
            },
            {
              label: '导出商品名',
              value: 1,
            },
          ]"
        />
      </t-form-item>
      <t-form-item label="导出格式" name="file_type">
        <wp-check-tag
          v-model="cardFormData.file_type"
          :items="[
            {
              label: 'EXCEL',
              value: 0,
            },
            {
              label: 'TXT',
              value: 1,
            },
          ]"
        />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script lang="ts">
export default {
  name: 'ExportCards',
};
</script>

<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { reactive, ref } from 'vue';

import { dumpcards } from '@/api/merchant/goods/card';
import { goodList } from '@/api/merchant/goods/good';
import { downloadFile } from '@/utils/common';

// 导出卡密表单数据
const cardFormData = reactive({
  goods_id: null,
  good_name: '',
  range: 0,
  number: 0,
  del: 0,
  need_goods_name: 0,
  file_type: 0,
  status: 1,
});

const visible = ref(false);
const init = (row: any, status: number) => {
  visible.value = true;
  cardFormData.goods_id = row?.id;
  cardFormData.good_name = row?.name;
  cardFormData.status = status;
  initGoodsListOptions();
};

const onSubmit = async () => {
  const data = {
    ...cardFormData,
  };
  featchDumpCards(data);
};

// 导出卡密
const featchDumpCards = async (data: any) => {
  const res = await dumpcards(data);
  if (res.code === 1) {
    MessagePlugin.success(res.msg);
    visible.value = false;
    downloadFile(res.data.url);
  } else {
    MessagePlugin.error(res.msg);
  }
};
const goodsListOptions = ref([]);

const initGoodsListOptions = async () => {
  const { data } = await goodList();
  goodsListOptions.value = data;
};

defineExpose({
  init,
});
</script>
