import { Typography } from '@/components/ui/Typografy'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'a'} fullWidth href={'https://google.com'} variant={'primary'}>
        Google
      </Button>
      <Typography as={'a'} theme={'light'} variant={'link2'}>
        hello world
      </Typography>
    </div>
  )
}
