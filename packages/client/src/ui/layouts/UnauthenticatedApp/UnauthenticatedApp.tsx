import { Footer } from 'src/ui/components/Footer'
import { Header } from 'src/ui/components/Header'
import { Box, Flex } from '@radix-ui/themes'
import { ReactNode } from 'src/utils/types/commons'
import { FullScreenSpinLoader } from 'src/ui/design-system/Spinner/SpinLoader'

interface UnauthenticatedAppProps extends ReactNode {
  isLoading?: boolean
}

const UnauthenticatedApp = (props: UnauthenticatedAppProps) => {
  return (
    <>
      <Flex className="bg-yellow-50" direction="column">
        <Flex direction="column" className="min-h-screen">
          <Header />
          <Box className="bg-layout-background">
            {props.isLoading ? <FullScreenSpinLoader /> : props.children}
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}

export type { UnauthenticatedAppProps }
export { UnauthenticatedApp }
