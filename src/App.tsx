import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'a'} fullWidth href={'https://google.com'} variant={'primary'}>
        Google
      </Button>
    </div>
  )
}
