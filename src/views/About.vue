<template>
  <div class="about">
    <h1>This is an about page</h1>
    <jankos-button @click="btnClick">测试按钮</jankos-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "测试组件",
    };
  },
  methods: {
    btnClick() {
      console.log("按钮被点击了");
    },
  },
};
</script>
