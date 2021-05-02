import { worker } from './mock'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

if (typeof global.process === 'undefined') {
  const { worker } = require('./mock')
  worker.start()
}

export const decorators = [
  Story => {
    worker.start()
    return <Story />
  }
]
