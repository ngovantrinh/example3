<template>
  <div>
    <DefaultLayout>
      <div class="form-information">
        <div class="line-info">
          <label for="description">
            <p>Lý do muốn vào công ty</p>
            <textarea
              class="input-line"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </label>
        </div>
        <div class="line-info">
          <label for="company">
            <p>Mức Lương</p>
            <input class="input-line" id="company" type="text" />
          </label>
        </div>
        <!-- <button class="next-btn" @click="onSubmitWorkExp">Quay Lại</button> -->
        <!-- <button @click="onTest">check</button> -->
      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
export default {
  name: "StepThree",
  data() {
    return {
      experience: {
        reason: null,
        wage: null,
      },
    };
  },
  components: { DefaultLayout },
};
</script>

<style>
</style>