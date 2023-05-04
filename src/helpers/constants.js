/* eslint-disable max-len */
const OSS_BUCKET = "bitmobcc"
const ASSET_PATH = `//${OSS_BUCKET}.oss-cn-shenzhen.aliyuncs.com`
const SITE_NAME = "Jyugam"

module.exports = {
  SITE_URL: "https://jyugam.com",
  ASSET_PATH,
  IMAGE_PATH: `${ASSET_PATH}/images`,
  ICON_PATH: `${ASSET_PATH}/icons`,
  FONT_PATH: `${ASSET_PATH}/fonts`,
  CASE_PATH: `${ASSET_PATH}/jyugam/images`,
  PWA_ASSET_PATH: `${ASSET_PATH}/pwa`,
  SITE_NAME,
  SITE_TITLE: `${SITE_NAME}`,
  WX_SIGN_URL: "https://www.bitmob.cc/api/wx",
  SITE_DESC:""
}
