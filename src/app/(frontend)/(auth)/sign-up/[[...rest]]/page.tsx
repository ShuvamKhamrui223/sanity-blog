import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <section className="flex items-center justify-center min-h-svh">
        <SignUp/>
    </section>
  )
}

export default page