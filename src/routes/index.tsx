import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <section className='container mx-auto'>
      <h1>Hello world!</h1>
    </section>
  )
}
