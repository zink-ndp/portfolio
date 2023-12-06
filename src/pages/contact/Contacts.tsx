import ContactLinks from "@/components/ContactLinks"


function Contacts(){
  return (
    <div
      id="contacts"
      className="w-[100%] z-30 flex flex-col items-center justify-center min-h-screen"
    >
      <p className="text-5xl z-30 text-blue-500 bold">Contacts</p>
      <div className="bg-white flex flex-col items-center justify-center shadow-xl rounded-xl p-10 mt-5 z-30 w-[100%] lg:w-[80%] xl:w-[65%]">
        <p className="text-black">Hi, Please contact me using one of the methods below, we will talk! </p>
        <ContactLinks/>
      </div>
    </div>
  )
}

export default Contacts