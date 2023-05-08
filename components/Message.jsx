/* eslint-disable @next/next/no-img-element */

export const Message = ({ children, avatar, username, discription }) => {
  return (
    <div className=" bg-white shadow shadow-blue-500/40 rounded-lg p-8  w-5/6 mx-auto my-4">
      <div className="flex items-center gap-2">
        <img src={avatar} alt="image" className="w-10 rounded-full " />
        <h3>{username}</h3>
      </div>
      <div className="pt-4 w-full break-all">
        <p className="">{discription}</p>
      </div>
      {children}
    </div>
  );
};
