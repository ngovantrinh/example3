<template>
  <div class="company">
    <div v-if="title" class="title">
      <p>{{ title }}</p>
    </div>
    <select v-model="contry" class="input-line">
      <option
        v-for="(contrys, index) in contryOption"
        :key="index"
        :value="contrys"
      >
        {{ contrys }}
      </option>
      <!-- <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
      <option value="Bắc Ninh">Bắc Ninh</option> -->
    </select>
    <img
      v-if="removeForm"
      class="icon-remove"
      :src="image"
      @click="handleFormId"
    />
  </div>
</template>

<script>
import RemoveIcon from "@/assets/images/Trash.png";
export default {
  props: {
    title: {
      type: String,
    },
    contryOption: {
      type: Array,
    },
    removeForm: {
      type: Boolean,
    },
  },
  data() {
    return {
      contry: "",
      image: RemoveIcon,
    };
  },
  methods: {
    handleFormId() {
      this.$emit("onRemoveForm");
    },
  },
  watch: {
    contry(value) {
      this.$emit("select", value);
    },
  },
};
</script>

<style>
</style>