export const state = () => ({
  searchMessage: ''
})

export const mutations = {
  updateData: function (state, payload) {
    state.searchMessage = payload
  }
}

export const actions = {
  updateDataAction(context, payload) {
    context.commit('updateData', payload)
  }
}
