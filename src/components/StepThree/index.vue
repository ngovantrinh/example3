<template>
  <div>
    <form onsubmit="return false">
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info">
            <label for="description">
              <div class="title">
                <span class="required">Must</span>
                <span>Lý do muốn vào công ty</span>
              </div>
              <textarea
                v-model="usCompany.reason"
                class="input-line"
                id="description"
                cols="30"
                rows="5"
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
                v-model="usCompany.wage"
                class="input-line wage"
                id="company"
                type="text"
                required
              />
              VNĐ
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
          :buttonStatus="status"
        />
        <ButtonBase
          :className="'next-btn'"
          :nameButton="'quay lại'"
          :type="'submit'"
          @onHandle="onPrevInfo"
        />
      </div>
    </form>
    <div v-if="showAll">
      <div>
        <h1>Info</h1>
        <p>{{ infomationUser.fullName }}</p>
        <p>{{ infomationUser.birthday }}</p>
        <p>{{ infomationUser.contry }}</p>
        <p>{{ infomationUser.position }}</p>
        <p>{{ infomationUser.describeYourself }}</p>
        <p>{{ infomationUser.images }}</p>
      </div>
      <div v-for="exp in experience" :key="exp.id">
        <h2>id: {{ exp.id }}</h2>
        <p>{{ exp.nameCompany }}</p>
        <p>{{ exp.position }}</p>
        <p>{{ exp.interval }}</p>
        <p>{{ exp.describeWork }}</p>
      </div>
      <div>
        <h2>Reason</h2>
        <p>{{ confirm.reason }}</p>
        <p>
          {{
            new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(confirm.wage)
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters } from "vuex";

// export const BUTTON_NAME = "Quay lại";

export default {
  name: "StepThree",
  data() {
    return {
      status: true,
      usCompany: {
        reason: "",
        wage: "",
      },
      showAll: false,
    };
  },
  computed: {
    ...mapGetters(["infomationUser", "experience", "confirm"]),
  },
  components: { DefaultLayout, ButtonBase },
  methods: {
    onComplete() {
      this.updateConfirm(this.usCompany);
      this.showAll = true;
    },
    onPrevInfo(e) {
      e.preventDefault();
      this.$emit("handlePrevStep");
    },
    changeStatusBtn() {
      if (this.usCompany.reason.length > 0 && this.usCompany.wage.length > 0) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
    ...mapActions(["updateConfirm"]),
  },
  watch: {
    usCompany: {
      handler() {
        this.changeStatusBtn();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.wage {
  min-width: 80px;
  max-width: 120px;
}
</style>