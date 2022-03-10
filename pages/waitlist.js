import Head from 'next/head'
import Header from '../components/Header'
import webhook from 'webhook-discord'
import {useState} from 'react';
import Link from 'next/link'

// For form I think we need the following info -
// Page 1

// Name 
// Email

// Page 2

// Social media url 
// Role (the customer segments listed on our lean canvas, and other)
// What benefits do you want to offer through Parti? 

// Page 3
// Thanks for applying! We’ll review your app and contact you with info on access.

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    url: "",
    category: "",
    offers: "",
  });
  const Hook = new webhook.Webhook("https://discord.com/api/webhooks/913637944206721066/Qt5zDdLoIn2cn3NPHcanSzm-8aVCo8nURthpm_eiHI9o6i0jbcWAQMBbfLdNO_7IHrrL")

  const sendWaitlist = () => {
    setIsSubmitted(true);
    console.log(formContent);
    const msg = new webhook.MessageBuilder()
        .setName('Waitlist Bot')
        .setTitle('Wailtlist added')
        .setColor('#f1e05a')
        .setText(`${formContent.name} | ${formContent.email} | ${formContent.url} | ${formContent.category} | ${formContent.offers}`)
    Hook.send(msg); 
  }

  const updateForm = (field, e) => {
    const copyOfObject = { ...formContent };
    copyOfObject[field] = e.target.value;
    setFormContent(copyOfObject);
  }
  return (
    <div className="text-white bg-black">
      <div className="flex flex-col items-center justify-center max-w-4xl min-h-screen mx-auto bg-black">
        <Head>
          <title>Parti</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex flex-col items-center justify-center w-full h-screen text-center">
          {/* Hero */}
          { isSubmitted ? (
            <section className="w-full max-w-lg px-6 mb-12 text-left">
              <h1 className="text-2xl">Thanks for applying! We will review your app and contact you with info on access.</h1>
              <Link href="/">
                <button type="button" className="px-5 py-1.5 mt-6 text-lg w-full font-semibold bg-yellow-700 rounded-lg">
                  Back to Home
                </button>  
              </Link>
            </section>
          ) : (
            <section className="w-full max-w-lg px-6 mb-12 text-left">
              <div className="relative mt-6">
                <label className="text-base leading-7">Name</label>
                <input type="text" onChange={e=>{updateForm("name", e)}} value={formContent.name} placeholder="John Doe" className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 rounded-lg focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
              </div>
              <div className="relative mt-6">
                <label className="text-base leading-7">Email</label>
                <input type="email" onChange={e=>{updateForm("email", e)}}  value={formContent.email}  placeholder="yourname@parti.xyz" className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 rounded-lg focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
              </div>
              <div className="relative mt-6">
                <label className="text-base leading-7">Social Media URL</label>
                <input type="url" onChange={e=>{updateForm("url", e)}} value={formContent.url} placeholder="Youtube, Instagram, Tiktok, etc" className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 rounded-lg focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
              </div>
              <div className="relative mt-6">
                <label className="text-base leading-7 text-blueGray-500">Category</label>
                <select onChange={e=>{updateForm("category", e)}} value={formContent.category} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 rounded-lg focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                  <option>NFT Artist</option>
                  <option>Web3 Community/DAO Creator</option>
                  <option>Metaverse Creator Creator</option>
                  <option>Artist</option>
                  <option>Fitness coaches</option>
                  <option>Business and career coaches</option>
                  <option>Financial content creators</option>
                  <option>Bloggers and publishers</option>
                  <option>Podcasters</option>
                  <option>Youtube content creators</option>
                  <option>Twitch streamers</option>
                  <option>Celebrities</option>
                  <option>Companies and brands - loyalty programs</option>
                  <option>Consumer facing companies</option>
                  <option>Service based business</option>
                </select>
              </div>
              <div className="relative mt-6">
                <label className="text-base leading-7">What benefits do you want to offer through Parti?</label>
                <textarea type="text" onChange={e=>{updateForm("offers", e)}} value={formContent.offers} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 rounded-lg focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
              </div>
              <button type="button" className="px-5 py-1.5 mt-6 text-lg w-full font-semibold bg-yellow-700 rounded-lg" onClick={sendWaitlist}>
                Sign Up
              </button>
            </section>
          )}
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
