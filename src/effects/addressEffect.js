import { useStore } from 'vuex'
import { get } from '../utils/request'

const useCommonAddressEffect = () => {
  const store = useStore()

  const getAddressList = async (forceUpdate) => {
    const addressList = store.state.addressList;
    if(forceUpdate || !addressList.length) {
      const result = await get('https://www.fastmock.site/mock/d7d4ae13a32381377d7b29091f0d948e/cswm/user/address')
      if(result?.data?.length) {
        store.commit('changeAddressList', result.data)
      }
    }
  }

  return { getAddressList }
}

export default useCommonAddressEffect