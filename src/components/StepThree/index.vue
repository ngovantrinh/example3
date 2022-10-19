<template>
  <div>
    <form onsubmit="return false">
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info">
            <InputTextarea
              :title="'Lý do muốn vào công ty'"
              :must="true"
              @input="handleReason"
            />
          </div>
          <div class="line-info">
            <InputText
              :title="'Mức lương mong luốn'"
              :must="true"
              :wage="true"
              @input="handleWage"
            />
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
          }}ddd
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters } from "vuex";
import InputTextarea from "../Input/InputTextarea.vue";
import InputText from "../Input/InputText.vue";

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
  components: { DefaultLayout, ButtonBase, InputTextarea, InputText },
  methods: {
    onComplete() {
      this.updateConfirm(this.usCompany);
      console.log(this.infomationUser.fullName);
      this.showAll = true;
    },
    onPrevInfo(e) {
      e.preventDefault();
      this.$emit("handlePrevStep");
    },
    changeStatusBtn() {
      if (this.usCompany.reason.length && this.usCompany.wage.length) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
    handleReason(value) {
      this.usCompany.reason = value;
    },
    handleWage(value) {
      this.usCompany.wage = value;
    },
    ...mapActions(["updateConfirm"]),
  },
  watch: {
    usCompany: {
      handler() {
        this.changeStatusBtn();
        this.showAll = false;
      },
      deep: true,
    },
  },
};
</script>

<style>
.line-info .wage {
  min-width: 80px;
  max-width: 120px;
}
</style>