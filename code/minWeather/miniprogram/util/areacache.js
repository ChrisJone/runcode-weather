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
  let cache_data = sortCacheArea(_cache_data);
  wx.setStorageSync(CACHE_AREA_KEY, cache_data);
  console.log("cache data is "+wx.getStorageInfoSync(CACHE_AREA_KEY))
}

const sortCacheArea = (_cache_data) =>{
  _cache_data.sort((a, b) => {
    return (a.initial > b.initial) ? 1 : -1
  })
  return _cache_data
}

module.exports = {
  getCacheAreaData,
  putCacheAreaData
}