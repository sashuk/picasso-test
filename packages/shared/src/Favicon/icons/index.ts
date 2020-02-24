import { EnvironmentType } from '../types'

const getIcons = (environment: EnvironmentType) => {
  if (environment === 'staging') {
    return import('./staging')
  }

  if (environment === 'production') {
    return import('./production')
  }

  return import('./development')
}

export { getIcons }
