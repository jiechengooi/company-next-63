import { ExternalLinkIcon, PhoneIcon } from '@heroicons/react/solid'

import Layout from '../components/Layout'
import Link from 'next/link'
import dynamic from 'next/dynamic'



const perks = [
  {
    name: 'Goods',
    imageSrc: '/images/goods.jpg',
    description:
      'You can contribute goods to support those in needs.',
  },
  {
    name: 'Donate Monetary',
    imageSrc: '/images/money.jpg',
    description:
      'You can support our mission in the monetary form.',
  },
  {
    name: 'Volunteer',
    imageSrc: '/images/volunteer.jpg',
    description:
      'You can volunteer if you want.',
  }
]

const faqs = [
  {
    id: 1,
    question: 'Can I voluenteer once a week only? At my convenient time',
    answer:
      'Since this is the volunteer work, you can volunteer at your own time ',
  },
  {
    id: 2,
    question: 'Will I get paid for my volunteering work?',
    answer:
      'We dont provide wages to volunteer, but you can get free lunch box at volunteering work',
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className='lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Volunteer</span>{' '}
              <span className='block text-blue-600 xl:inline'>at Malaysia Now</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Contribute your time and effort to those who need.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>

              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='tel:832-930-3827'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                  <PhoneIcon
                    className='-ml-0.5 mr-2 h-6 w-6'
                    aria-hidden='true'
                  />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80'
            alt=''
          />
        </div>
      </div>

      {/* Kim Section */}

      <div className='relative py-16 bg-white'>
        <div
          className='hidden absolute top-0 inset-x-0 h-1/2 bg-white lg:block'
          aria-hidden='true'
        />
        <div className='max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent'>
              <div
                className='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden'
                aria-hidden='true'
              />
              <div className='max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
                <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                  <img
                    className='object-cover object-center rounded-3xl shadow-2xl'
                    src='/images/mission.jpg'
                    alt='Mission'
                  />
                </div>
              </div>
            </div>

            <div className='relative bg-blue-600 to-blue-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center'>
              <div
                className='hidden absolute inset-0 overflow-hidden rounded-3xl lg:block'
                aria-hidden='true'>
                <svg
                  className='absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-blue-400'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
                <svg
                  className='absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-indigo-500'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                  />
                </svg>
              </div>
              <div className='relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6'>
                <h2
                  className='text-3xl font-extrabold text-white'
                  id='join-heading'>
                  Our mission
                </h2>
                <p className='text-lg text-white'>
                  Our main objective is to help whoever needed. Life is tought, so we want to give help to anyone really needs in help. We focus at single mother, children, and elders. 
                </p>
                <p className='text-lg text-white'>
                  If you are interested to be part of join, Join us.
                <Link legacyBehavior href='/kim-mair'>
                  <a className='block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto'>
                    Learn more
                  </a>
                </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why WIG */}
      <div className='bg-gray-50'>
        <h2 className='sr-only'>Why us?</h2>
        <div className='max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4'>
          <div className='max-w-3xl'>
            <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 mb-6 pl-8'>
              Donation
            </h2>
          </div>
          <div className='max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {perks.map((perk) => (
              <div key={perk.name} className='sm:flex'>
                <div className='sm:flex-shrink-0'>
                  <div className='flow-root'>
                    <img className='w-24 h-24' src={perk.imageSrc} alt='' />
                  </div>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <h3 className='text-lg md:text-xl font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-2 text-sm md:text-lg text-gray-500'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How WIG Works */}
      <div className='relative bg-gray-50'>
        <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <img
            className='w-full h-full object-cover'
            src='/images/volunteer1.jpg'
            alt=''
          />
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 mix-blend-multiply'
          />
        </div>
        <div className='relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <p className='mt-2 text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              How It works
            </p>
            <p className='mt-3 text-lg text-gray-700'>
              Here at <strong>WealthGuard Insurance Group</strong>, we take
              pride in providing a faster, better, and easier life insurance
              experience for you and your loved ones.
            </p>
            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <Link legacyBehavior href='/how-it-works'>
                  <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-blue-50'>
                    Learn more
                    <ExternalLinkIcon
                      className='-mr-1 ml-3 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check My Price Section */}
      <div className='relative my-20'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
          <div className='relative sm:py-16 lg:py-0'>
            <div
              aria-hidden='true'
              className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
              <div className='absolute inset-y-0 right-1/2 w-full bg-blue-50 rounded-r-3xl lg:right-72' />
              <svg
                className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'>
                <defs>
                  <pattern
                    id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                />
              </svg>
            </div>
            <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
              {/* Testimonial card*/}
              <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
                <img
                  className='absolute inset-0 h-full w-full object-cover'
                  src='/images/volunteer2.jpg'
                  alt=''
                />
                <div className='absolute inset-0 bg-blue-500 mix-blend-multiply' />
                <div className='absolute inset-0 bg-gradient-to-t from-pink-600 via-pink-600 opacity-30' />
              </div>
            </div>
          </div>

          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
            {/* Content area */}
            <div className='pt-12 sm:pt-16 lg:pt-32'>
              <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
                Rest easy knowing you&apos;re safe
              </h2>
              <div className='mt-6 text-gray-500 space-y-6'>
                <p className='text-lg'>
                  In little to no time, you could qualify for a policy that
                  could provide assistance for generations and help keep those
                  you love <strong>safe</strong>.
                </p>
              </div>
              <div className='py-8'>
                <div className='inline-flex rounded-md shadow float-right'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='max-w-2xl lg:mx-auto lg:text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Frequently asked questions
            </h2>
            <p className='mt-4 text-lg md:text-xl text-gray-500'>
              Here are a few of the most frequently asked questions about life
              insurance.
            </p>
          </div>
          <div className='mt-20'>
            <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10'>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className='font-semibold text-lg text-gray-900'>
                    {faq.question}
                  </dt>
                  <dd className='mt-3 text-gray-500'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='bg-blue-50 mb-12 md:mb-16'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl'>
            <span className='block'>Ready to learn more?</span>
            <span className='block text-blue-600'>See our policies.</span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <Link legacyBehavior href='/insurance/policies'>
                <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}