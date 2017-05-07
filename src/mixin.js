import Vue from 'vue'

Vue.mixin({
  beforeRouteEnter (to, from, next) {
    console.log('bre')
    next(x => {
      console.log('bre next')
    })
  }
})
