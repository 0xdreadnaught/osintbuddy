import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react';
import { PlusIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

const GoogleInput = () => {
  return (
    <div className='flex flex-col'>
      <div className='mt-1 flex bg-light-50 rounded-md shadow-sm border border-gray-50'>
        <MagnifyingGlassIcon className='h-6 w-6 my-auto ml-3 text-gray-200' />
        <input
          type='text'
          name='query'
          id='query'
          className='block w-full  px-2 outline-none py-2 bg-light-50 rounded-r-md sm:text-sm'
          placeholder='Search Google...'
        />
      </div>
    </div>
  );
};

const tabs = [
  { name: 'Search', href: '#', current: true },
  { name: 'Analysis', href: '#', current: false },
  { name: 'Saved', href: '#', current: false },
];
const searchOptions = [
  {
    name: 'Google Search',
    description: "Search Google using the advanced operators you're used to",
    href: '#',
    status: 'online',
  },
  {
    name: 'Categorized CSE Search',
    description: 'Search by category through Google CSEs',
    href: '#',
    status: 'online',
  },
];

export default function NodeOptionsSlideOver({
  showOptions,
  setShowOptions,
}: {
  showOptions: boolean;
  setShowOptions: Function;
}) {
  const [activePanelTab, setActivePanelTab] = useState<string>(tabs[0].name);

  return (
    <Transition.Root show={showOptions} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => null}>
        <div className=''>
          <div className=' overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-light-50 shadow-xl'>
                    <div className='p-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>Options</Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-primary-500'
                            onClick={() => setShowOptions(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='border-b border-gray-200'>
                      <div className='px-6'>
                        <nav className='-mb-px flex space-x-6' x-descriptions='Tab component'>
                          {tabs.map((tab) => (
                            <button
                              onClick={() => setActivePanelTab(tab.name)}
                              type='button'
                              key={tab.name}
                              className={classNames(
                                tab.name === activePanelTab
                                  ? 'border-primary-500 text-primary-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                              )}
                            >
                              {tab.name}
                            </button>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <ul role='list' className='flex-1 divide-y divide-gray-200 overflow-y-auto'>
                      {activePanelTab === 'Search' && (
                        <>
                          {searchOptions.map((searchOption) => (
                            <li className='flex flex-col' key={searchOption.description}>
                              <Disclosure>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      onClick={() => null}
                                      className=' w-full relative  justify-start flex  rounded-full focus:outline-none '
                                    >
                                      <div className='group justify-between group-hover:bg-light-200 w-full relative flex items-center py-6 px-5'>
                                        <div className='-m-1 block flex-1 p-1'>
                                          <div
                                            className='absolute inset-0  duration-100 transition-colors'
                                            aria-hidden='true'
                                          />
                                          <div className='relative flex min-w-0 flex-1 items-center'>
                                            <div className='ml-4 truncate items-start flex flex-col'>
                                              <p className='truncate text-sm font-medium text-gray-900'>
                                                {searchOption.name}
                                              </p>
                                              <p className='truncate text-sm text-gray-500'>{searchOption.description}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <button className={classNames('flex relative transition-transform duration-150 ease-in', {'rotate-180 origin-center': open})}>
                                        <ChevronDownIcon
                                          className='h-5 w-5 text-gray-400 group-hover:text-gray-500'
                                          aria-hidden='true'
                                        />
                                      </button>
                                      </div>

                                      
                                    </Disclosure.Button>

                                    <Transition
                                      show={open}
                                      enter='transition duration-100 ease-out'
                                      enterFrom='transform scale-95 opacity-0'
                                      enterTo='transform scale-100 opacity-100'
                                      leave='transition duration-75 ease-out'
                                      leaveFrom='transform scale-100 opacity-100'
                                      leaveTo='transform scale-95 opacity-0'
                                    >
 
                                      <Disclosure.Panel static>
                                       <div className='pb-6 px-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate dolore ad ipsa ut dolorum deleniti optio architecto sequi qui!
                                       </div>
                                      </Disclosure.Panel>
                                    </Transition>
                                  </>
                                )}
                              </Disclosure>
                            </li>
                          ))}
                        </>
                      )}
                      {activePanelTab === 'Analysis' && <>Analysis coming eventually</>}
                      {activePanelTab === 'Saved' && (
                        <>
                          <EllipsisVerticalIcon
                            className='h-5 w-5 text-gray-400 group-hover:text-gray-500'
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
