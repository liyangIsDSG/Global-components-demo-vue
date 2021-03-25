<template>
  <button
    :class="[
      'jankos-btn',
      type === 'default' ? 'default' : '',
      type === 'primary' ? 'primary' : '',
      disabled ? 'desabled' : '',
    ]"
    @click="onClick"
  >
    <span :class="['iconfont' + icon]"></span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "jankosButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      btnInfo: {
        name: "",
        code: "",
        operate: "",
        icon: "",
      },
    };
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.$emit("click");
    },
  },
};
</script>