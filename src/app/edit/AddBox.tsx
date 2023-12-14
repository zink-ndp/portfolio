import React from "react";

export default function AddBox() {
  return (
    <div className="flex flex-1">
      <form className="flex flex-1 flex-col space-y-6 p-5 rounded-lg shadow-lg">
        <input type="text" className="text-black inline p-3 border-b-2" placeholder="Type"/>
        <input type="text" className="text-black inline p-3 border-b-2" placeholder="Name " />
        <input type="text" className="text-black inline p-3 border-b-2" placeholder="Descr"/>
        <input type="text" className="text-black inline p-3 border-b-2" placeholder="Responsibilities"/>
        <input type="text" className="text-black inline p-3 border-b-2" placeholder="Techs"/>
        <input type="text" className="text-black inline p-3 border-b-2" placeholder="Time"/>
        <button className=" mt-3 p-3 bg-blue-500 hover:bg-blue-300 text-white rounded-lg bold w-[100px]">
          Add
        </button>
      </form>
    </div>
  );
}
