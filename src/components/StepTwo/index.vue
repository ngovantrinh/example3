<template>
  <form>
    <DefaultLayout>
      <div class="form-information">
        <div class="line-info">
          <label for="company">
            <p>Họ và tên</p>
            <input class="input-line" id="company" type="text" />
          </label>
        </div>
        <div class="line-info">
          <label for="position">
            <p>Vị trí từng làm</p>
            <input class="input-line" type="date" id="position" />
          </label>
        </div>
        <div class="line-info">
          <p>Thành phố</p>
          <select class="input-line" name="" id="">
            <!-- <option disabled > dd</option> -->
            <option value="hanoi">Thành Phố Hà Nội</option>
            <option value="">Thành phố Hồ Chí Minh</option>
            <option value="">Bắc Ninh</option>
          </select>
        </div>
        <div class="line-info">
          <label for="description">
            <p>Mô tả về công việc</p>
            <textarea
              class="input-line"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </label>
        </div>
      </div>
    </DefaultLayout>
  </form>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
export default {
  name: "StepTwo",
  components: { DefaultLayout },
};
</script>

<style></style>
