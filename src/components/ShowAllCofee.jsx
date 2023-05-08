import CoffeeCard from "./cards/CoffeeCard";
import { BsCup } from "react-icons/bs";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ShowAllCofee = ({ loadedCoffee }) => {

    const [allCoffee, setAllCoffee] = useState(loadedCoffee);

    const handleDelete = (id, name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#331A15',
            cancelButtonColor: '#E64942',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0)
                            Swal.fire(
                                'Deleted!',
                                `${name} has been deleted.`,
                                'success'
                            )
                        
                        setAllCoffee(allCoffee.filter(coffee => coffee._id !== id));
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    return (
        <div className="mx-24">
            <h1 className="title-deep-midnight">Our Popular Products</h1>
            <Link to={'addCoffee'} className="flex items-center justify-center gap-1 bg-light-golden hover:bg-light-gray border border-deep-midnight text-white text-center font-rancho drop-shadow-md rounded px-2 py-1 w-max mx-auto mt-4">Add Coffee <BsCup className="text-deep-midnight" /></Link>

            <div className="grid lg:grid-cols-2 gap-6 mt-12">
                {allCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete} />)}
            </div>

        </div>
    );
};

export default ShowAllCofee;