import React from 'react'
import SettingSections from './SettingSections'
import Assestone from "../../AssetPicture/download.jpeg";
import { User2 } from 'lucide-react'

const Profile = () => {
  return (
    <SettingSections icon={User2} title={"Profile"}>
      <div className=' flex flex-col sm:flex-row items-center mb-6' >
      <img src = {Assestone} alt='profile'
      className='rounded-full w-20 h-20 object-cover mr-4' />

      <div>
        <h2 className='text-lg font-semibold text-gray-300'>Papa</h2>
      <p className='text-gray-200'>tobiasogola42@gmail.com</p>
      </div>
      </div>

      <button className='bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
        Edit Profile
      </button>
    </SettingSections>
  )
}

export default Profile
