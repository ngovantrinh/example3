<template>
  <div>
    <form>
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info">
            <label for="description">
              <div class="title">
                <span class="required">Must</span>
                <span>Lý do muốn vào công ty</span>
              </div>
              <textarea
                class="input-line"
                id="description"
                cols="30"
                rows="5"
                v-model="experience.reasone"
                required
              ></textarea>
            </label>
          </div>
          <div class="line-info">
            <label for="company">
              <div class="title">
                <span class="required">Must</span>
                <span>Mức lương mong muốn</span>
              </div>
              <input
                v-model="experience.wage"
                class="input-line"
                id="company"
                type="text"
                required
              />
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
import { mapActions } from "vuex";

// export const BUTTON_NAME = "Quay lại";

export default {
  name: "StepThree",
  data() {
    return {
      experience: {
        reason: "",
        wage: "",
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
    ...mapActions(["updateConfirm"]),
  },
};
</script>

<style>
</style>