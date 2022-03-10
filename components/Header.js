import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between w-full">

      <Link href="/" className="">
        <img className="w-20 ml-4" src="/logo.svg"/>
      </Link>
      {/* <div>
        <ul className="flex items-center list-reset">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div> */}
      <div>
        <Link href="/waitlist">
          <button type="button" className="px-5 py-1.5 mt-2 mr-4 text-md font-semibold text-white bg-yellow-700 rounded-xl">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  )
}
