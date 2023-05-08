import { AiFillEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {

    const { _id, photo, name, chef, taste } = coffee;

    return (
        <div className="bg-light-gray p-8 rounded-md flex gap-8 items-center w-fit">
            <img src={photo} alt="" />
            <div>
                <p><span className="font-bold">Name</span> : {name}</p>
                <p><span className="font-bold">Chef</span> : {chef}</p>
                <p><span className="font-bold">Taste</span> : {taste}</p>
            </div>

            <div className="space-y-4 flex flex-col text-white">
                <Link to={`coffeeDetails/${_id}`} className="p-2 rounded-md bg-light-golden">
                    <AiFillEye />
                </Link>
                <Link to={`updateCoffee/${_id}`} className="p-2 rounded-md bg-slate-gray">
                    <FaPen />
                </Link>
                <button onClick={()=>handleDelete(_id,name)} className="p-2 rounded-md bg-bright-red">
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;