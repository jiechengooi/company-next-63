import Layout from '../components/Layout'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/outline'

export default function VolunteerPage() {
  return (
    <Layout title={'Volunteer'}>
      <div className='bg-blue-200 lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Volunteer</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl'>
              Volunteer in our operation in orphanage, old folks home and social work. 
            </p>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src='./images/volunteer5.jpg'
            alt='Volunteer'
          />
        </div>
      </div>

      <div className='py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
        <div className='max-w-max lg:max-w-7xl mx-auto'>
          <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
            <div className='text-base max-w-prose lg:max-w-none'>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Volunteering 
              </p>
            </div>
          </div>
          <div className='relative'>
            <svg
              className='hidden md:block absolute top-0 right-0 -mt-20 -mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='95e8f2de-6d30-4b7e-8159-f791729db21b'
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
                height={384}
                fill='url(#95e8f2de-6d30-4b7e-8159-f791729db21b)'
              />
            </svg>
            <svg
              className='hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='7a00fe67-0343-4a3c-8e81-c145097a3ce0'
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
                height={384}
                fill='url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)'
              />
            </svg>
            <div className='relative md:bg-white md:p-6'>
              <div className='lg:grid lg:grid-cols-1 lg:gap-6'>
                <div className='text-base max-w-prose lg:max-w-none'>
                  <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                    Activities
                  </p>
                </div>
                <div className='prose prose-blue prose-lg text-gray-500 lg:max-w-none'>
                  <p>
                   We have a regular visit to the orphanage on every saturday, and old folks home on sunday. Our volunteer work include driver, social worker and cook. On weekend, we spent the whole day working in these two places. It was our duty to bring joy and happines to these unfortunate group.
                  </p>
                  <p>
                   To those who are interested to join the volunteering program, feel free to contact person in charged below
                  </p>
                  <ol role='list'>
                    <li>Natalie Lian(+60123456789)</li>
                    <li>Cheng Jie(+712384493453)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}