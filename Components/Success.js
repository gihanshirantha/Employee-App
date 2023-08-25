export default function Success({message}){
    return(
        <div className="success container mx-auto">
            <div className="flex justify-center mx-auto border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center rounded-full bg-opacity-60 ">
                {message}<BiCheck size={25} color={"248 113 113"}/>
            </div>
        </div>

    )
}