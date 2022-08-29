<template>
  <DefaultLayout>
    <div class="form-information">
      <label for="company">
        <p>Họ và tên</p>
        <input class="input-line" id="company" type="text" />
      </label>
      <label for="position">
        <p>Ngày sinh</p>
        <input class="input-line" type="date" id="position" />
      </label>
      <label for="time">
        <p>Thành phố</p>
        <input
          class="input-line"
          type="text"
          id="time"
          placeholder="working time"
        />
      </label>
      <label for="time">
        <p>Vị trí làm việc</p>
        <input
          class="input-line"
          type="text"
          id="time"
          placeholder="working time"
        />
      </label>
      <label for="description">
        <p>Mô tả về bản thân</p>
        <textarea
          class="input-line"
          id="description"
          cols="30"
          rows="5"
        ></textarea>
      </label>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
// improt DefaultLayout from '';
export default {
  name: "StepOne",
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
.form-information .input-line {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 8px 10px;
  min-width: 528px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
</style>
