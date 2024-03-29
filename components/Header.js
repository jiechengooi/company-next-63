import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderNav from './HeaderNav'

import { Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import {
  BriefcaseIcon,
  GlobeIcon,
  DocumentIcon,
  UserIcon,
} from '@heroicons/react/outline'

const navigation = [
  {
    name: 'Contribute',
    icon: DocumentIcon,
    current: false,
    children: [

      {
        name: 'Volunteer',
        href: '/volunteer',
      },
      {
        name: 'Donate',
        href: '/donate',
      },
    ],
  },
]

const nav2 = [
  {
    name: 'Home',
    icon: BriefcaseIcon,
    href: '/home',
    current: false,
    children: [{ href: '#' }],
  },
  {
    name: 'About us',
    icon: UserIcon,
    href: '/about',
    current: false,
    children: [{ href: '/about' }],
  },
  {
    name: 'Contact us',
    icon: GlobeIcon,
    href: '/contact',
    current: false,
    children: [{ href: '/contact' }],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  return (
    <Popover as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Popover.Button>
                </div>
                <div className='flex-shrink-0 flex items-center'>
                  <Link legacyBehavior href='/'>
                    <a>
                      <img
                        className='block lg:hidden h-12 w-auto'
                        src='/images/logo.png'
                        alt='Volunteer Logo'
                      />

                      <img
                        className='hidden lg:block h-12 w-auto'
                        src='/images/logo-full.png'
                        alt='Volunteer Logo'
                      />
                    </a>
                  </Link>
                </div>
                <div className='hidden md:ml-6 md:flex md:space-x-8'>
                  <HeaderNav />
                </div>
              </div>
            </div>
          </div>

          <Popover.Panel className='md:hidden absolute w-3/4 z-10'>
            <div className='pt-0 pb-3 space-y-1 '>
              <div className='flex flex-col flex-grow border-r border-gray-200 pt-2 pb-4 bg-white overflow-y-auto '>
                <div className='mt-5 flex-grow flex flex-col'>
                  <nav
                    className='flex-1 px-2 space-y-1 bg-white'
                    aria-label='Sidebar'>
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                            )}>
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-gray-500'
                                  : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden='true'
                            />
                            {item.name}
                          </a>
                        </div>
                      ) : (
                        <Popover as='div' key={item.name} className='space-y-1'>
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                  'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                )}>
                                <item.icon
                                  className='mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                  aria-hidden='true'
                                />
                                <span className='flex-1'>{item.name}</span>
                                <svg
                                  className={classNames(
                                    open
                                      ? 'text-gray-400 rotate-90'
                                      : 'text-gray-300',
                                    'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                  )}
                                  viewBox='0 0 20 20'
                                  aria-hidden='true'>
                                  <path
                                    d='M6 6L14 10L6 14V6Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </Popover.Button>
                              <Popover.Panel className='space-y-1'>
                                {item.children.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={
                                      router.asPath === subItem.href
                                        ? 'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-blue-600 rounded-md bg-gray-100'
                                        : 'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50'
                                    }
                                    onClick={newPathName}
                                    pathname={pathName}>
                                    {subItem.name}
                                  </a>
                                ))}
                              </Popover.Panel>
                            </>
                          )}
                        </Popover>
                      )
                    )}
                  </nav>
                  <nav
                    className='flex-1 px-2 space-y-1 bg-white'
                    aria-label='Sidebar'>
                    {nav2.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            router.pathname === item.href
                              ? 'bg-gray-100 text-blue-600'
                              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                          )}>
                          <item.icon
                            className={classNames(
                              router.pathname === item.href
                                ? 'text-blue-600'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
