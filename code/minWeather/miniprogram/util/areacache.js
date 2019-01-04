const CACHE_AREA_KEY = "CACHE_AREA_KEY";
const getCacheAreaData = () => {
  let _cache_data = wx.getStorageSync(CACHE_AREA_KEY);
  if (!Array.isArray(_cache_data)) {
    return []
  }
  return _cache_data;
}

const putCacheAreaData = (_area) => {
  let _cache_data = wx.getStorageSync(CACHE_AREA_KEY);
  if (!Array.isArray(_cache_data)) {
    _cache_data = []
  }
  _cache_data.push(_area);
  //排序
  sortCacheArea(_cache_data);
}

sortCacheArea = (_cache_data) =>{

}

module.exports={
  getCacheAreaData,
  putCacheAreaData
}