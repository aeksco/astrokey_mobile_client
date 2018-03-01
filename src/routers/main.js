// Main Containers
import MainHome from '@/containers/main_home'
import MainSettings from '@/containers/main_settings'
import MainHelp from '@/containers/main_help'

const MainHomeRoute = {
  path: '/',
  name: 'Home',
  component: MainHome
}

const MainSettingsRoute = {
  path: '/settings',
  name: 'Settings',
  component: MainSettings
}

const MainHelpRoute = {
  path: '/help',
  name: 'Help',
  component: MainHelp
}

export default [
  MainHomeRoute,
  MainSettingsRoute,
  MainHelpRoute
]
