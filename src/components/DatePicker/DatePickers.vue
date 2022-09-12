<template>
  <div class="line-info">
    <label>
      <div class="title">
        <span class="required">Must</span>
        <span>{{ title }}</span>
      </div>
      <date-picker
        v-model="interval"
        range
        placeholder="Thời gian làm việc"
        value-type="DD/MM/YYYY"
        format="DD-MM-YYYY"
      ></date-picker>
    </label>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
export default {
  props: {
    title: {
      type: String,
    },
    must: {
      type: Boolean,
    },
  },
  components: { DatePicker },
  data() {
    return {
      interval: "",
    };
  },
  watch: {
    interval(value) {
      this.$emit("datePicker", value);
    },
  },
};
</script>

<style>
</style>