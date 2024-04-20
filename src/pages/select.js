import Header from "../components/HeaderBlack";

function select(props){
   
    const colors = ["red", "green", "blue", "purple"]; // Assuming you want "purple" instead of "yellow"

    const handleClick = (color) => {
        props.setOptions(color); 
      };

    return (
        <div className="bg-black text-white h-screen">
            <div className="pl-5 pr-5 pt-5">
            <div className="flex flex-col gap-8">
                <Header/>
                <div>
                    <h1 className="mb-2">1. Image</h1>
                    <img className="flex max-h-[229px]" src={props.imageBase64} alt="" />
                </div>
                <div >
                    <h1 className="mb-2">2. ADDITIONAL  (OPTIONAL)</h1>
                    <div className="flex text-black items-center justify-center ">
                        <div className="grid grid-cols-3 gap-4">
                            {colors.map((color) => (
                              <div key={color} onClick={() => handleClick(color)} 
                              className="bg-white px-6 py-2 border rounded-md ">
                                <h1 className="font-semibold">{color}</h1>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex py-3 mx-5 rounded-xl items-center justify-center bg-white">
                    <h1 className="text-4xl text-black font-extrabold">Submit</h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default select;