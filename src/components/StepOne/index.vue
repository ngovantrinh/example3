<template>
  <form onsubmit="return false">
    <DefaultLayout>
      <div class="form-information">
        <div class="line-info">
          <InputText @input="testFunc" :title="'Họ và tên'" :must="true" />
        </div>
        <div class="line-info">
          <label for="position">
            <div class="title">
              <span class="required">Must</span>
              <span>Ngày sinh</span>
            </div>
            <input
              v-model="infoUser.birthday"
              class="input-line"
              type="date"
              id="position"
            />
          </label>
        </div>
        <div class="line-info">
          <BaseSelect
            @select="handleOption"
            :title="'Thành phố'"
            :contryOption="contryOption"
          />
        </div>
        <div class="line-info">
          <InputText @input="handlePosition" :title="'Vị trí làm việc'" />
        </div>
        <div class="line-info">
          <InputTextarea @input="handleDescribe" :title="'Mô tả về bản thân'" />
        </div>
        <div
          @drop.prevent="handleDrop"
          class="upload-box"
          :class="{ 'warning-dropzone': warningStatus }"
        >
          <div class="title">
            <h3>Hãy kéo và thả ảnh vào đây hoặc</h3>
          </div>
          <label for="upload-image">
            <p>Nhấn vào đây</p>
            <input
              class="file"
              type="file"
              @change="handleChangeFile"
              id="upload-image"
            />
          </label>
        </div>
        <p v-if="warningStatus" class="error-file">{{ errorFile }}</p>
      </div>
    </DefaultLayout>
    <ButtonBase
      :className="'next-btn'"
      :nameButton="'Tiếp tục'"
      :type="'submit'"
      :buttonStatus="status"
      @onHandle="onSubmitInfo"
    />
  </form>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import { onMounted, onUnmounted } from "vue";
import useStorage from "@/utils/useStorage";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters } from "vuex";
import InputText from "../Input/InputText.vue";
import InputTextarea from "../Input/InputTextarea.vue";
import BaseSelect from "../Selected/BaseSelect.vue";
import { contry } from "@/constants/constant";
// eslint-disable-next-line
const { uploadFile } = useStorage("files");
// improt DefaultLayout from '';
export default {
  name: "StepOne",
  components: {
    DefaultLayout,
    ButtonBase,
    InputText,
    InputTextarea,
    BaseSelect,
  },
  data() {
    return {
      status: true,
      listFiles: [],
      test: null,
      numberOfFiles: 0,
      warningStatus: false,
      contryOption: contry,
      infoUser: {
        fullName: null,
        birthday: null,
        contry: null,
        position: null,
        describeYourself: "",
        images: null,
      },
      errorFile: "",
    };
  },

  computed: {
    // this.$store.state.infomationUser => this.infomationUser
    ...mapGetters(["infomationUser"]),
  },

  methods: {
    ...mapActions(["updateInfoUser"]),
    condition(selected) {
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];
      const ERRORS = {
        TOO_LARGE: "Please select files less than 10MP in size.",
        LIMIT_FILES: "Exceed the limit of 10 file",
        REQUIRED: "Please select images file.",
      };
      const MAX_SIZE = 10000000;
      if (selected) {
        if (typesFile.includes(selected.type)) {
          if (selected.size > MAX_SIZE) {
            this.errorFile = ERRORS.TOO_LARGE;
            // console.log(this.errorFile);
            this.warningStatus = true;
          } else {
            console.log(selected);
            this.infoUser.images = selected;
            this.warningStatus = false;
          }
        } else {
          this.errorFile = ERRORS.REQUIRED;
          // console.log(this.errorFile);
          this.warningStatus = true;
        }
      }
    },
    handleChangeFile(e) {
      const selected = e.target.files[0];
      this.condition(selected);
      // console.log(this.infoUser.images);
      // uploadFile(selected);
    },
    handleDrop(e) {
      const item = e?.dataTransfer.files[0];
      this.condition(item);
    },
    onSubmitInfo() {
      if (this.infoUser.fullName && this.infoUser.birthday) {
        this.updateInfoUser(this.infoUser);
        this.$emit("handleNextStep");
      }
    },
    changeStatusBtn() {
      if (this.infoUser.fullName && this.infoUser.birthday) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
    testFunc(value) {
      this.infoUser.fullName = value;
    },
    handlePosition(value) {
      this.infoUser.position = value;
    },
    handleDescribe(value) {
      this.infoUser.describeYourself = value;
    },
    handleOption(value) {
      this.infoUser.contry = value;
    },
  },

  setup() {
    const events = ["dragenter", "dragleave", "dragover", "drop"];
    onMounted(() => {
      events.forEach((event) =>
        document.body.addEventListener(event, (e) => e.preventDefault())
      );
    });
    onUnmounted(() => {
      events.forEach((event) =>
        document.body.removeEventListener(event, (e) => e.preventDefault())
      );
    });
  },
  watch: {
    infoUser: {
      handler() {
        this.changeStatusBtn();
      },
      deep: true,
    },
  },
};
</script>

<style>
#upload-image[type="file"] {
  display: none;
}
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
  max-width: 100%;
  width: 100%;
}
.form-information .line-info {
  padding: 10px 0;
}
.form-information .upload-box {
  width: 80%;
  height: 192px;
  border: 1px solid #dcdcdc;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.upload-box p {
  text-decoration: underline;
}
.line-info .title {
  padding-bottom: 6px;
}
.line-info .title .required {
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  padding: 3px 9px;
  color: white;
  background: #627d98;
  border-radius: 3px;
  margin-right: 4px;
}
.button-box {
  display: flex;
  column-gap: 15px;
}
.next-btn {
  padding: 8px 12px;
  border: none;
  margin: 25px 0px;
  cursor: pointer;
}
.form-information .warning-dropzone {
  border-color: #ed5d5d;
}
.form-information .error-file {
  color: #ed5d5d;
  padding-top: 10px;
}
</style>
