import React from 'react';
import Star from '../../assets/images/Star.png';
import PhotoProfil from '../../assets/images/PhotoProfil.png';
import Webicon from '../../assets/images/WebIcon.png';
function Landing() {
  return (
    <div className='flex flex-row bg-[#F0EFE9]'>
      <div className='flex flex-col'>
      <div className='ml-16 mt-16'>
      <div >
        <p> - More than 1000 User Active every day </p>
      </div>
      <div className='mt-5'>
        <p className='text-3xl font-bold'>A New Place to Discover</p>
        <div className='mt-2 flex flex-row'>
        <p className='text-3xl font-bold'>Collect and Sell</p>
        <img src={Star} alt="starLogo" className='ml-5'/>
        </div>
        <p className='text-3xl font-bold mt-2'>Easily Your Product</p>
      </div>   
      </div>
     <div>
     </div>
     <div className='w-96 ml-16 mt-16'>
     <p>Lorem ipsum dolor sit amet. Ona viling alitsà melingar divis veganisera fastan beling och sufande revilig , olav retost . geont lapyna kontrades sedan egortad.</p>
     </div> 
     <div className='ml-16 mt-16 '>
      <button className=' bg-orange-600/50 text-white w-40 h-12'>
        Create your own
      </button>
     </div>
      </div>
<div className='flex flex-col ml-40 mt-5'>
<div className='bg-white h-24 w-80 p-5 rounded-xl shadow-lg flex flex-row ' >
  <div className='mt-3 ml-2'>
    <img src={PhotoProfil} alt="ProfilPhoto" className='w-9 h-9 rounded-full' />
  </div>
  <div>
  <h1 className='font-bold ml-2 mt-2'>Carla Bertine</h1>
<p className='text-gray-500 ml-2 '>Lorem, ipsum dolor sit amet </p>
  </div>
</div>
<div className='bg-white h-36 w-80 rounded-xl shadow-lg mt-2' >  
<h1 className='font-bold px-2 py-5'>Branch Analytics</h1>
<div className='flex flex-row'>
<label className='text-gray-500 ml-2' > Engagement</label>
<div className='bg-orange-600/50 w-14 rounded h-4 ml-2 mt-1'></div>
</div>
<div className='flex flex-row'>
<label className='text-gray-500 ml-2' >impression</label>
<div className='bg-slate-900/50 w-40 rounded h-4 ml-5 mt-1'></div>
</div>
</div>
</div>
<div className='flex flex-col'>

<div className='m-2 mt-96 bg-black w-24 h-24'>
    <img src="" alt="" />
  </div>
<div className=' h-1/6    ' >
  
<div className='bg-black/90 w-80  flex flex-row'>
  <div className='flex flex-col'>
  <p className='font-bold text-white ml-5 mt-5'>Our Digital</p>
  <p className='text-white/50 ml-5'>Marketing Expertise</p>
  </div>
<div className='m-2 ml-16 bg-black/10 '>
  <img src={Webicon} alt="iconWeb" className='h-16 rounded-full' />
</div>
</div>
</div>
</div>

</div>
  )
}

export default Landing