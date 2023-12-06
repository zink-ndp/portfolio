export default function ButtonSolid(props: any) {
  return (
    <a href={props.lref}>
      <button className="transition duration-500 ease-in-out hover:scale-110 shadow-xl transform bg-blue-500 hover:bg-blue-700 text-white rounded-xl w-auto px-7 py-4 mx-3 mt-4">
        <p className=" text-lg bold">{props.text}</p>
      </button>
    </a>
  );
}
