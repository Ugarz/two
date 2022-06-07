import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import Projects from '../components/Projects'

const Home = () => (
  <Layout>
    <section>
      <div className="container">
        <h3 className='flex text-xl sm:text-2xl'>
          Twitch extension
          <div className='ml-3 h-5 w-5 md:h-6 md:w-6 relative'>
            <Image
              src="/twitch.white.min.svg"
              objectFit="cover"
              layout="fill"
              alt="Twitch logo" />
          </div>
        </h3>
        <p className='my-5 font-roboto text-xl'>I&apos;m <em className='underline underline-offset-8'>Co-Creator</em> of a Twitch Extension named <strong>Goals</strong>.</p>
        <div className='my-5 text-md'>
          <p>This Twitch extension aim to connect communities to their streamer&apos;s <strong>Goals</strong>.<br />We reached <strong>near 800 active users</strong> on the leading streaming platform.</p>
          <p>With this extension, any viewer who is new to the channel can read what the streamer is aiming to acheive currently, freely and easily.</p>
          <p>Besides some hidden features let you celebrate when you achieve your <strong>Goals</strong>. <br />Do you like gifs? cuz we do.</p>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex flex-row my-1 text-xs md:text-lg w-full sm:w-auto transition-all hover:font-medium ease-in-out duration-300 md:mr-5 py-3 px-5 bg-rose-700 rounded-sm hover:rounded-md hover:bg-pink-600'>
            <Link href="https://goals-landing.now.sh/">
              <a target="_blank" className='cursor-pointer inline-flex items-baseline'>
                <span className='slef-center text-sm md:text-lg flex-1'>Learn more on Goals&nbsp;</span>
                <span className='self-center w-5 h-5'>
                  <ArrowNarrowRightIcon className='h-5' />
                </span>
              </a>
            </Link>
          </div>
          <div className='flex flex-row my-1 text-xs md:text-lg w-full sm:w-auto transition-all hover:font-medium ease-in-out duration-300 py-3 px-5 bg-pink-700 rounded-sm hover:rounded-md hover:bg-rose-600'>
            <Link href="https://dashboard.twitch.tv/extensions/98s7sst7jz68hge42kqgodvimey3iv">
              <a target="_blank" className='cursor-pointer inline-flex items-baseline'>
                <span className='text-sm md:text-lg'>Install Goals&nbsp;</span>
                <span className='self-center w-5 h-5'>
                  <ArrowNarrowRightIcon className='h-5' />
                </span>

              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="md:container md:mx-auto text-center">
      <Projects />
    </section>
  </Layout >
)


export default Home