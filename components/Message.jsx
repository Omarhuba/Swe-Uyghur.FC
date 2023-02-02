/* eslint-disable @next/next/no-img-element */

export const Message = ({children, avatar, username, discription,}) => {
  return (
    <div className=' bg-white rounded-lg p-8 border-b-2 w-5/6 mx-auto my-4'>
        <div className='flex items-center gap-2'>
            <img src={avatar} alt="image"  className="w-10 rounded-full "/>
            <h3>{username}</h3>
        </div>
        <div className="pt-4">
            <p>{discription}</p>
        </div>
        {children}
    </div>
  )
}
