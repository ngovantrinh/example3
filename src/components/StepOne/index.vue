<template>
  <form onsubmit="return false">
    <DefaultLayout>
      <div class="form-information">
        <div class="line-info">
          <label for="company">
            <div class="title">
              <span class="required">Must</span>
              <span>Họ và tên</span>
            </div>
            <input
              v-model="infoUser.fullName"
              class="input-line"
              id="company"
              type="text"
              maxlength="100"
              required
            />
          </label>
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
          <div class="title">
            <p>Thành phố</p>
          </div>
          <select v-model="infoUser.contry" class="input-line" name="" id="">
            <!-- <option disabled > dd</option> -->
            <option value="hanoi">Thành Phố Hà Nội</option>
            <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
            <option value="Bắc Ninh">Bắc Ninh</option>
          </select>
        </div>
        <div class="line-info">
          <label for="time">
            <div class="title">
              <p>Vị trí làm việc</p>
            </div>
            <input
              v-model="infoUser.position"
              class="input-line"
              type="text"
              id="time"
              placeholder="Vị trí làm việc"
            />
          </label>
        </div>
        <div class="line-info">
          <label for="description">
            <div class="title">
              <p>Mô tả về bản thân</p>
            </div>
            <textarea
              v-model="infoUser.describeYourself"
              class="input-line"
              id="description"
              cols="30"
              rows="5"
              maxlength="1000"
            ></textarea>
            <p>0/1000</p>
          </label>
        </div>
        <div @drop.prevent="handleDrop" class="upload-box">
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
      </div>
    </DefaultLayout>
    <ButtonBase
      :className="'next-btn'"
      :nameButton="'Tiếp tục'"
      :type="'submit'"
      :buttonStatus="status"
      @onHandle="onSubmitInfo"
    />
    <!-- <h1>{{ infomationUser }}</h1> -->
  </form>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import { onMounted, onUnmounted } from "vue";
import useStorage from "@/utils/useStorage";
import ButtonBase from "../ButtonBase/index.vue";
import { mapGetters, mapMutations } from "vuex";
// eslint-disable-next-line
const { uploadFile } = useStorage("files");
// improt DefaultLayout from '';
export default {
  name: "StepOne",
  components: {
    DefaultLayout,
    ButtonBase,
  },
  data() {
    return {
      status: true,
      listFiles: [],
      numberOfFiles: 0,
      warningStatus: false,
      infoUser: {
        fullName: null,
        birthday: null,
        contry: null,
        position: null,
        describeYourself: null,
        images: null,
      },
    };
  },

  computed: {
    // this.$store.state.infomationUser => this.infomationUser
    ...mapGetters(["infomationUser"]),
  },

  methods: {
    ...mapMutations(["setInfoUser"]),
    condition(selected) {
      const typesFile = ["image/png", "image/jpg"];
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
            this.listFiles.push(selected);
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
      // uploadFile(selected);
    },
    handleDrop(e) {
      const item = e?.dataTransfer.files[0];
      this.condition(item);
    },
    onSubmitInfo() {
      this.setInfoUser(this.infoUser);
      if (this.infoUser.fullName && this.infoUser.birthday) {
        this.$emit("handleNextStep", this.infoUser);
      }
    },
    changeStatusBtn() {
      if (this.infoUser.fullName !== null && this.infoUser.birthday !== null) {
        this.status = false;
      }
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
    "infoUser.fullName": function () {
      this.changeStatusBtn();
    },
    "infoUser.birthday": function () {
      this.changeStatusBtn();
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
</style>
