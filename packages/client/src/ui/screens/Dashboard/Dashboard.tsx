import React from 'react'
import { Box } from 'src/ui/design-system/Box'
import { Text } from 'src/ui/design-system/Text'
import { Button } from 'src/ui/design-system/Button'
import { UnauthenticatedApp } from 'src/ui/layouts/UnauthenticatedApp'

function Dashboard() {
  return (
    <UnauthenticatedApp>
      <Text truncate="noEllipsis" tone="black" weight="medium" size="xlarge">
        dashboard
      </Text>
      <form>
        <input type="text" />
        <Button size="xsmall" type="submit" onClick={() => console.log('click')}>
          submit
        </Button>
      </form>
    </UnauthenticatedApp>
  )
}

export { Dashboard }
