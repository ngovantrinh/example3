import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      infoUser: {},
      exp: {},
      reasion: {},
    }
  },
  handleFormContent: {
    infoUserForm (state, infoUser) {
        state.infoUser = infoUser;
        console.log(state);
    },

  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)