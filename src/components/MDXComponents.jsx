import { onlyText } from 'react-children-utilities'

// local imports
import { Callout } from '@/components/Callout'
import { Fence } from '@/components/Fence'

export const getComponents = () => ({
  pre: ({ children }) => children,
  code: function ({ children, ...args }) {
    return <Fence language={args['data-language']}>{onlyText(children)}</Fence>
  },

  // custom components
  Callout,
})
