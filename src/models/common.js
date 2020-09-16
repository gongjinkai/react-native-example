import modelExtend from 'dva-model-extend'

const model = {
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  }
}

const pageModel = modelExtend(model, {
  state: {
    list: [],
    pagination: {
      pageSize: 10,
      pageNum: 1,
      total: 0,
    }
  },
  reducers: {
    querySuccess(state, { payload }) {
      const { list, pagination } = payload;
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        }
      }
    }
  }
});

export {
  model,
  pageModel
}
