import Layout from '../components/Layout'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/outline'



const features = [
  {
    name: 'Rice',
    description:
      'Rice is the main source of food to elders and orphanage. We are looking for 5kg package rice',
  },
  {
    name: 'Raw Meat',
    description:
      'Chicken/fish is the main protein source to the children in old folks home and orphanage. Daily cook required 5kg to substain 50 persons need',
  },
  {
    name: 'Instant Noodle',
    description:
      'Ocassion cook noodle for elder and orphan. Around 10kg noodles required to substain 5o person needs.',
  },
  {
    name: 'Oil',
    description:
      'Cooking oil is needed to cook for old folks home and orphanage. Only average, 20kg oil is needed for 50 person, on each week',
  },
]

export default function DonationPage() {
  // console.log(programs)
  return (
    <Layout>
      {/* Hero */}
      <div className='bg-blue-200 lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>Donate Goods</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl'>
              At the moment, we are looking for people to donate goods in the form of cook ingredient. All these ingredients will be cooked by our chef to feed 50 persons(32 elders and 18 childrens). 
            </p>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src='./images/cook.jpg'
            alt=''
          />
        </div>
      </div>


      <div className='bg-white'>
        <div className='max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 mb-16'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Things you can donate
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              It is just some raw ingredient.
            </p>
          </div>
          <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <CheckIcon
                    className='absolute h-6 w-6 text-green-500'
                    aria-hidden='true'
                  />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-9 text-base text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  )
}

