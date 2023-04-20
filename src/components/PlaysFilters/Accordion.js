import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

function Accordion(props) {
    return (
        <Disclosure >
            {({ open }) => (
                <div className='bg-white my-4 p-4'>
                    <Disclosure.Button className="py-2 flex gap-3 items-center">
                        {open ? <BiChevronDown /> : <BiChevronUp />}
                        <span className={open ? 'text-red-600' : 'text-gray-700'}>
                            {props.title}
                        </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-600">
                        <div className='flex item-center gap-3 flex-wrap'>
                            {
                                props.tags.map((tag) => {
                                    return (<>
                                        <div className='border-2 border-gray-300 p-2'>
                                            <span className='text-red-600'>{tag}</span>
                                        </div>
                                    </>)
                                })
                            }
                        </div>
                    </Disclosure.Panel>
                </div>
            )
            }
        </Disclosure>

    )
}

export default Accordion