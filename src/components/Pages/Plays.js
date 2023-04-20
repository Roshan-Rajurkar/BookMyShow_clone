import React from 'react'
import Poster from '../poster/Poster'
import Accordion from '../PlaysFilters/Accordion';

const Plays = () => {


    const cards = [
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAzIEFwciBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00353018-pynqmmdpwp-portrait.jpg',
            title: 'The Great Indian Musical',
            subtitle: 'Hindi ₹390'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        },
        {
            src: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343671-akqkrebmjm-portrait.jpg',
            title: 'Vodka and No Tonic-Mumbai',
            subtitle: 'Marathi ₹300'
        }
    ]


    return (
        <>
            <div className='container mx-auto px-4 bg-rose-100 '>

                {/* right */}
                <div className='w-full lg:flex lg:flex-row-reverse gap-8'>
                    <div className='w-8/12'>
                        <h2 className='text-2xl font-bold'>Plays In Bhuvneshvar</h2>
                        <div className='flex w-full flex-wrap mx-auto px-1'>
                            {
                                cards.map((card, index) => {
                                    return (
                                        <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4' >
                                            <Poster key={index} src={card.src} title={card.title} subtitle={card.subtitle} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* left  */}
                    <div className='lg:w-1/4 border-black'>
                        <h2 className='text-2xl font-bold mb-5'>Filters</h2>
                        <div>
                            <Accordion title='Date' tags={["Today", 'Tomorrow', "This Weekend"]} />
                            <Accordion title='Language' tags={["English", 'Marathi', "Hindi"]} />
                            <Accordion title='Categories' tags={["Theater", 'Storytelling', "Interactive Theater"]} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Plays