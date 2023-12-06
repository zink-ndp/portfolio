export default function ButtonDownload(props: any) {
  const downloadClick = () => {
    const pdfUrl = props.lref;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = props.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button onClick={downloadClick} className=" transition duration-500 ease-in-out hover:scale-110 shadow-xl transform bg-transparent hover:bg-blue-300 text-blue-500 border-2 border-blue-500 rounded-xl w-auto px-7 py-4 mx-3 mt-4">
      <p className=" text-lg bold">{props.text}</p>
    </button>
  );
}
