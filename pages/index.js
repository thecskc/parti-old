import Head from 'next/head'
import Header from '../components/Header'
import webhook from 'webhook-discord'
import Link from 'next/link'


export default function Home() {

  const Hook = new webhook.Webhook("https://discord.com/api/webhooks/913637944206721066/Qt5zDdLoIn2cn3NPHcanSzm-8aVCo8nURthpm_eiHI9o6i0jbcWAQMBbfLdNO_7IHrrL")

  return (
    <div className="text-white bg-black">
      <div className="flex flex-col items-center justify-center max-w-4xl min-h-screen mx-auto bg-black">
        <Head>
          <title>Parti</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex flex-col items-center justify-center w-full text-center">
          {/* Hero */}
          <section className="w-full px-4 mt-36">
            <div>
              <h1 className="text-4xl font-semibold leading-snug sm:text-5xl">
                Launch NFT memberships<br />
              </h1>
              <p className="mt-4 text-xl text-gray-500 sm:text-2xl">
                Create a full-branded, NFT-based membership portal for your top fans or community, offering exclusive content and benefits.
              </p>
              <div>
              {/* <button type="button" className="px-5 py-1.5 mt-4 text-xl font-semibold bg-yellow-700 rounded-lg">
                Fan
              </button> */}
                <Link href="/waitlist">
                  <button type="button" className="px-5 py-1.5 mt-4 text-xl font-semibold bg-yellow-700 rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-16 ">
              <img className="w-full sm:w-5/6 rounded-xl" src="/img/tiers.png"></img>
              {/* <figure>
                <div>
                  dashboard
                </div>
                <div>
                  overlay
                </div>
              </figure> */}
            </div>
          </section>
          {/* <section className="w-full mt-60">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center overflow-hidden max-w-100">
                <img className="w-28" src="/img/106.png"></img>
                <img className="w-28" src="/img/character2.png"></img>
                <img className="w-28" src="/img/character3.png"></img>
                <img className="w-28" src="/img/character4.png"></img>
                <img className="w-28" src="/img/96.png"></img>
              </div>
              <div className="max-w-lg px-3">
                <h1 className="mt-10 text-5xl">
                  Build your own community
                </h1>
                <p className="mt-10 text-2xl text-gray-600">
                  Foster exclusive community around NFT ownership and grow your die-hard fanbase.
                </p>
              </div>
            </div>
          </section> */}

          <section className="w-full px-6 mt-48">
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="px-4 text-center sm:text-left sm:w-5/12">
                <h1 className="mt-10 text-4xl sm:text-5xl">
                  Create NFT-based membership tiers
                </h1>
                <p className="mt-10 text-xl text-gray-600 sm:text-2xl">
                  Offer VIP benefits to your NFT holders in one place
                </p>
              </div>
              <div className="flex items-center justify-center px-4 mt-16 sm:mt-0 sm:w-7/12">
                <img className="w-full rounded-xl" src="/img/Group_1_1.svg"></img>
              </div>
            </div>
          </section>

          <section className="w-full px-6 mt-48">
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="px-4 text-center sm:hidden sm:text-right sm:w-5/12">
              <h1 className="mt-10 text-4xl sm:text-5xl">
                  Unlock content and benefits through NFTs
                </h1>
                <p className="mt-10 text-2xl text-gray-600">
                  Integrate with your favorite tools, turning your NFTs into keys for your content and benefits across platforms.
                </p>
              </div>
              <div className="flex items-center justify-center px-4 mt-16 sm:mt-0 sm:w-7/12">
                <img className="w-full rounded-xl" src="/img/Group_3_1.svg"></img>
              </div>
              <div className="hidden px-4 text-center sm:flex sm:flex-col sm:text-right sm:w-5/12">
                <h1 className="mt-10 text-4xl sm:text-5xl">
                  Unlock content and benefits through NFTs
                </h1>
                <p className="mt-10 text-2xl text-gray-600">
                  Integrate with your favorite tools, turning your NFTs into keys for your content and benefits across platforms.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full px-6 mt-48">
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="px-4 text-center sm:text-left sm:w-5/12">
                <h1 className="mt-10 text-4xl sm:text-5xl">
                  Keep track of changes in NFTs
                </h1>
                <p className="mt-10 text-2xl text-gray-600">
                  Track, identify and communicate with your NFT holders in one place
                </p>
              </div>
              <div className="flex items-center justify-center px-4 mt-16 sm:mt-0 sm:w-7/12">
                <img className="rounded-xl w-96" src="/img/Profile.png"></img>
              </div>
            </div>
          </section>

          {/* pricing */}

          <section>
            <div className="p-8 mt-32 text-center text-white transform bg-gray-900 shadow-xl w-80 rounded-3xl">
              <h1 className="text-2xl font-semibold text-white">Simple Pricing</h1>
              <p className="pt-2 tracking-wide">
                 
                  <span className="text-3xl font-semibold">10% of sales</span>
                  {/* <span className="font-medium text-gray-400">/ month</span> */}
              </p>
              {/* <hr className="mt-4 border-gray-600 border-1" /> */}
              {/* <div className="pt-8">
                  <p className="font-semibold text-left text-gray-400">
                      <span className="align-middle material-icons">
                          ✔️
                      </span>
                      <span className="pl-2">
                          blah blahg
                      </span>
                  </p>
                  <p className="pt-5 font-semibold text-left text-gray-400">
                      <span className="align-middle material-icons">
                          ✔️
                      </span>
                      <span className="pl-2">
                          <span className="text-white">blah</span> balh
                      </span>
                  </p>
                  <p className="pt-5 font-semibold text-left text-gray-400">
                      <span className="align-middle material-icons">
                          ✔️
                      </span>
                      <span className="pl-2">
                          <span className="text-white">blah</span> balh
                      </span>
                  </p>
                  <Link href="/waitlist">
                    <p className="w-full py-4 mt-8 text-white bg-blue-600 rounded-xl">
                        <span className="font-medium">
                            Get Started
                        </span>
                    </p>
                  </Link>
              </div> */}
              {/* <div className="absolute top-4 right-4">
                  <p className="px-4 py-1 text-xs font-semibold uppercase bg-blue-700 rounded-full">limited</p>
              </div> */}
            </div>
          </section>


          <section className="max-w-2xl px-4 mx-auto mt-24">
            <h1 className="text-4xl" > Traditional Memberships vs NFTs </h1>
            <p className="pt-6 text-2xl text-left text-gray-400">
                <span className="align-middle material-icons">
                    ✔️
                </span>
                <span className="pl-2">
                    Charge a premium and offer higher quality experience
                </span>
            </p>
            <p className="pt-6 text-2xl text-left text-gray-400">
                <span className="align-middle material-icons">
                    ✔️
                </span>
                <span className="pl-2">
                    Platform independence - Let your fans stay invested in your success and pay you without having to depend on a platform
                </span>
            </p>
            <p className="pt-6 text-2xl text-left text-gray-400">
                <span className="align-middle material-icons">
                    ✔️
                </span>
                <span className="pl-2">
                    Let your fans truly own their memberships and make money when they sell it to others.
                </span>
            </p>
            <p className="pt-6 text-2xl text-left text-gray-400">
                <span className="align-middle material-icons">
                    ✔️
                </span>
                <span className="pl-2">
                    Identify and build a community among your top and super fans that are financially invested in your success
                </span>
            </p>
            <p className="pt-6 text-2xl text-left text-gray-400">
                <span className="align-middle material-icons">
                    ✔️
                </span>
                <span className="pl-2">
                    Create a relationship that lasts beyond a membership. Your NFT becomes more inherently valuable as you grow as a creator. And so by holding your NFT your fans are invested in your success.
                </span>
            </p>
          </section>

          {/* div1 */}
          <section className="w-screen px-4 my-24">
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl sm:text-5xl">
                  Join early crew
                </h1>
                <p className="mt-10 text-2xl text-gray-600">
                  First creators get active support from us for the successful NFT membership launches.
                </p>
              </div>
              <div className="flex flex-col mt-6">
                <Link href="/waitlist">
                  <button type="button" className="px-5 py-1.5 mt-4 text-xl font-semibold bg-yellow-700 rounded-lg">
                    Apply as a Creator
                  </button>
                </Link>
                {/* <button type="button" className="px-5 py-1.5 mt-4 text-xl font-semibold bg-gray-100 text-black rounded-lg">
                  Apply as a Fan
                </button> */}
              </div>
            </div>
            
          </section>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            The Creator Project
          </a>
        </footer>
      </div>
    </div>
  )
}
