import defaultSettings from '@/settings'

const title = defaultSettings.title || '前端监控系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
