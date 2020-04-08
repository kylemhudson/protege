import React from 'react';


const JobPostingConfirmation = ({props}) => {


    return(
        <div className="lg:w-3/5 mx-auto">
            <h2 className='text-center text-blue-500 font-bold text-2xl'>Thank you for posting with Protege.dev!</h2>
            <p className='mt-8 font-light text-blue-300 text-sm'>
                Your job position has been submitted! All of our listings are reviewed by a member of the team to ensure they fall within our requirements. You’ll receive a notification once it is approved, at which point your position will be live on the job board!
            </p>
            <p className='mt-8 font-light text-blue-300 text-sm'>
                Thank you, again, for choosing to post with <span className='text-teal-600 font-bold'>Protege.dev</span>. We strongly believe that companies will have a greater ROI from their hires when they have the flexibility to bring someone on whose ambition and drive outweigh their experience.
            </p>
            <p className='mt-8 font-light text-blue-300 text-sm'>
                Don’t believe us? Junior developers built this!
            </p>
            <h3 className='mt-8 text-blue-500 font-bold text-2xl'>Next Steps:</h3>
            <ul className='pl-4 mt-8 list-inside'>
                <li className='pl-2 font-light text-blue-300 text-sm'>- If you fill the position and need the listing removed, simply email us at <a className='font-bold' href='mailto:hey@protege.dev'>hey@protege.dev</a></li>
                <li className='mt-2 pl-2 font-light text-blue-300 text-sm'>- Be sure to announce your new posting on Twitter and tag <a className='font-bold' href='https://twitter.com/devprotege'>@DevProtege</a>! We’ll tweet about your new listing with us on your behalf as soon as it’s live</li>
                <li className='mt-2 pl-2 font-light text-blue-300 text-sm'>- If you need to correct something on your listing, email <a className='font-bold' href='mailto:hey@protege.dev'>hey@protege.dev</a> with the company name, job title, and the changes needed.</li>
            </ul>
            
        </div>
    )
}
export default JobPostingConfirmation