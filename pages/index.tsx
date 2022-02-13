import Link from 'next/link'

import Layout from '../components/Layout'
import Projects from '../components/Projects'

const Home = () => (
  <Layout>
    <section className="container mx-auto my-20">
      <div className="content">
        <h3 className='text-3xl'>Twitch extension</h3>
        <p className='text-2xl'>I'm Co-Creator of a Twitch Extension named "Goals".</p>
        <p>
          <Link href="https://dashboard.twitch.tv/extensions/98s7sst7jz68hge42kqgodvimey3iv">
            <a>This extension</a>
          </Link>
          aim to connect the streamer's community to the streamer's goals on his channel. By this extension anyone coming to This
          channel car know what the streamer is aiming to acheive currently, freely.
        </p>
        <a target="_blank" href="https://goals-landing.now.sh/">Learn more on Goals</a>
      </div>
    </section>
    <section className="container mx-auto text-center">
      <Projects />
    </section>
  </Layout >
)


export default Home