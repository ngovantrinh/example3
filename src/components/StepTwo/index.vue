<template>
  <form onsubmit="return false">
    <div class="form-company" v-for="form in allFormExp" :key="form.id">
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info">
            <BaseSelect
              :contryOption="company"
              :removeForm="true"
              @onRemoveForm="onRemoveForm(form.id)"
            />
          </div>
          <div class="line-info">
            <InputText
              @input="handlePosition($event, form)"
              :title="'Vị trí từng làm'"
              :must="true"
            />
          </div>
          <DatePickers
            :title="'Thời gian làm việc'"
            @datePicker="handleTime($event, form)"
          />
          <div class="line-info">
            <InputTextarea
              :title="'Mô tả về công việc'"
              @input="handleDescribe($event, form)"
            />
          </div>
        </div>
      </DefaultLayout>
    </div>
    <ButtonBase
      :className="'next-btn add-form'"
      :nameButton="'Thêm công ty'"
      :type="'button'"
      @onHandle="onAddNewForm"
    />
    <div class="button-box">
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'Tiếp tục'"
        :type="'submit'"
        @onHandle="onSubmitInfo"
        :buttonStatus="status"
      />
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'Quay lại'"
        :type="'submit'"
        @onHandle="onPrevInfo"
      />
    </div>
  </form>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import RemoveIcon from "../../assets/images/Trash.png";
import DatePickers from "../DatePicker/DatePickers.vue";
import InputTextarea from "../Input/InputTextarea.vue";
import InputText from "../Input/InputText.vue";
import { company } from "@/constants/constant";
import BaseSelect from "../Selected/BaseSelect.vue";
export default {
  name: "StepTwo",
  data() {
    return {
      status: true,
      company: company,
      exp: {
        nameCompany: "",
        position: "",
        interval: "",
        describeWork: "",
      },
      allFormExp: [],
      image: RemoveIcon,
      time1: null,
      time2: null,
      time3: null,
    };
  },
  components: {
    DefaultLayout,
    ButtonBase,
    DatePickers,
    InputTextarea,
    InputText,
    BaseSelect,
  },
  created() {
    this.allFormExp.push({ ...this.exp, id: (Math.random() * 100).toFixed(3) });
  },
  computed: {
    ...mapGetters(["experience", "infomationUser"]),
  },
  methods: {
    ...mapMutations(["setExp"]),
    ...mapActions(["updateExperience"]),
    onPrevInfo(e) {
      e.preventDefault();
      this.$emit("handlePrevStep");
    },
    onSubmitInfo() {
      this.updateExperience(this.allFormExp);
      this.$emit("handleNextStep");
    },
    onAddNewForm() {
      this.allFormExp = [
        ...this.allFormExp,
        { ...this.exp, id: (Math.random() * 100).toFixed(3) },
      ];
    },
    onRemoveForm(id) {
      if (this.allFormExp.length > 1) {
        this.allFormExp = this.allFormExp.filter((item) => item.id !== id);
      }
    },
    changeStatusBtn() {
      this.allFormExp.forEach((item) => {
        if (item.position.length && item.interval.length) {
          this.status = false;
        } else {
          this.status = true;
        }
      });
    },
    handleTime(value, form) {
      form.interval = value;
      console.log(value, form);
    },
    handleDescribe(value, form) {
      form.describeWork = value;
    },
    handlePosition(value, form) {
      form.position = value;
    },
  },
  watch: {
    allFormExp: {
      handler() {
        this.changeStatusBtn();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.form-company {
  padding-bottom: 25px;
}
.company {
  padding: 10px 16px;
  background: #f8f8f8;
}
.company {
  display: flex;
  column-gap: 16px;
  cursor: pointer;
}
.company .icon-remove {
  width: 32px;
  height: 32px;
}
</style>
