import React from 'react'
import CreateArtWork from '../Assets/Images/CreateArtwork.png';
import Upload from '../Assets/Images/Upload.png';
import Listing from '../Assets/Images/Listing.png';
function Card() {
  return (
    <div className='flex flex-row p-24'>
      <div className='pl-24 flex flex-col'>
        <img src={CreateArtWork} alt="Artwork" className='w-40 h-40 pl-5' />
        <div>
<h1 className='font-bold'>Create Artwork</h1>
<p className='text-center p-5 text-gray-500/50'>Create your collection Add social links profil and banner images and set a secondary sales fee  </p>
        </div>
      </div>
      <div className='pl-96 flex flex-col'>
        <img src={Upload} alt="upload" />
      </div>
      <div className='pl-96 flex flex-col'>
        <img src={Listing} alt="listing" />
      </div>
    </div>
  )
}

export default Card