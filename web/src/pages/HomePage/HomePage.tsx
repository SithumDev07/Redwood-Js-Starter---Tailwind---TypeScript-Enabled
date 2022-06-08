import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="h-screen w-full bg-gray-300 text-9xl flex items-center justify-center flex-col space-y-8">
        <a
          href="https://redwoodjs.com/docs/"
          className="text-amber-600 cursor-pointer first-letter:font-extrabold hover:scale-105 transform transition-transform duration-200"
        >
          Redwood Js
        </a>
        <p className="text-sm">Starter - Tailwind - TypeScript Enabled</p>
      </div>
    </>
  )
}

export default HomePage
