<template>
  <div>
    <form>
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
        </div>
      </DefaultLayout>
      <div class="button-box">
        <ButtonBase
          :className="'next-btn'"
          :nameButton="'Hoàn thành'"
          :type="'submit'"
          @onHandle="onComplete"
        />
        <ButtonBase
          :className="'next-btn'"
          :nameButton="'quay lại'"
          :type="'submit'"
          @onHandle="onPrevInfo"
        />
      </div>
    </form>
  </div>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";

// export const BUTTON_NAME = "Quay lại";

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
  components: { DefaultLayout, ButtonBase },
  methods: {
    onComplete() {
      console.log("complete");
    },
    onPrevInfo(e) {
      e.preventDefault();
      this.$emit("handlePrevStep", this.infoUser);
    },
  },
};
</script>

<style>
</style>