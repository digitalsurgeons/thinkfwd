import { useRouter } from 'next/router'
import Button from '../components/Button'

const Page = () => {
  const router = useRouter()
  if (!router) return null

  return (
    <div>
      <Button>Button</Button>
    </div>
  )
}

export default Page
