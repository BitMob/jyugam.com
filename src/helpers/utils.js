export function getLang() {
  if (typeof window !== "undefined") {
    const { language } = window.navigator
    if (!language.includes("zh")) {
      return "en"
    }
    return "zh"
  }
  return "zh"
}

export const calSizes = (winW, winH) => {
  const isMobile = winW <= 792
  const sizes = {
    winW,
    winH,
    isMobile,
  }
  return sizes
}

let resizeTimeout
export function resizeThrottler(cb) {
  function actualResizeHandler() {
    const viewW = window.innerWidth
    const viewH = window.innerHeight
    cb(viewW, viewH)
  }
  // ignore resize events as long as an
  // actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()
    }, 200)
  }
}

export function genSlug(title) {
  return title.toLowerCase().replace(" ", "-").replace("'", "")
}
