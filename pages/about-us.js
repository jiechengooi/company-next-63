import Layout from '../components/Layout'


export default function AboutUsPage() {
  return (
    <Layout title={'About Us'}>
      {/* Hero */}
      <div className="bg-blue-200 lg:relative lg:h-screen">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">About Us</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl">
              Our volunteering program is fully supported by Volunteering Front Malaysia. Our initial mission is to help all the weaker group in the malaysian socity. At the moment, we are lack of funding to continue our work in helping these people. We are urgently looking for resources such as money, goods, and manpower. 
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/aboutus.jpg"
            alt=""
          />
        </div>
      </div>

      {/* content */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse">
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Things you can contribute
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              We are pleased to urge anyone to contribute to our mission. Those who have are sufficient in financial, please consider to donate goods or money to support our work. While who are willingly to join us, are most welcome to join our volunteering work on weekdays or weekend. 
            </p>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p>
              For the donation,{' '} Your are entitled to 
              <strong> Income tax deducation. </strong> 
              For charity spending, Malaysian government reward taxpayer by waving tax to the monthly wages{' '}
            </p>

            <figure>
              <img
                className="w-full rounded-lg"
                src="/images/volunteer5.jpg"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>
                Year 2019- Volunteer work at the Happy Village Malaysia. Participated by our 48 volunteer.
              </figcaption>
            </figure>
            <h2>Everything you need to know</h2>
            <p>
              We are non-government organization, which also meant our goal is not making profit. The money and goods we collected are fully used for our work.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Insurance you can trust.</span>
            <span className="block text-blue-600">Find out more today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Rest easy knowing you&apos;re safe.
            </h2>
            <p className="mt-3 text-xl text-blue-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                Covered
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                100%
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                Anytime
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                24/7
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                Clients
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                100k+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  )
}