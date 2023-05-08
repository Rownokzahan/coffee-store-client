import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const { _id, name, supplier, category, chef, taste, details, photo } = useLoaderData();

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const updated_name = form.updated_name.value;
        const updated_supplier = form.updated_supplier.value;
        const updated_category = form.updated_category.value;
        const updated_chef = form.updated_chef.value;
        const updated_taste = form.updated_taste.value;
        const updated_details = form.updated_details.value;
        const updated_photo = form.updated_photo.value;

        const updateCoffee = {
            updated_name,
            updated_supplier,
            updated_category,
            updated_chef,
            updated_taste,
            updated_details,
            updated_photo
        };

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            body: JSON.stringify(updateCoffee),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Sucessfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="py-20 px-28 bg-light-gray">
            <h1 className="text-5xl text-center font-rancho text-slate-gray drop-shadow-lg">Update Existing Coffee Details</h1>
            <p className="text-center max-w-5xl mx-auto my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleAddCoffee}>
                <div className="grid md: grid-cols-2 gap-6">
                    <div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="updated_name">Name</label>
                            <input className="py-2 px-3 rounded" type="text" name="updated_name" id="updated_name" placeholder="Americano Coffee" defaultValue={name} />
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="updated_supplier">Supplier</label>
                            <input className="py-2 px-3 rounded" type="text" name="updated_supplier" id="updated_supplier" placeholder="Cappu Authorizer" defaultValue={supplier} />
                        </div>

                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="updated_category">Category</label>
                            <input className="py-2 px-3 rounded" type="text" name="updated_category" id="updated_category" placeholder="Americano" defaultValue={category} />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="updated_chef">Chef</label>
                            <input className="py-2 px-3 rounded" type="text" name="updated_chef" id="updated_chef" placeholder="Mr. Matin Paul" defaultValue={chef} />
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="updated_taste">Taste</label>
                            <input className="py-2 px-3 rounded" type="text" name="updated_taste" id="updated_taste" placeholder="Sweet and hot" defaultValue={taste} />
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="updated_details">Details</label>
                            <input className="py-2 px-3 rounded" type="text" name="updated_details" id="updated_details" placeholder="Espresso with hot water" defaultValue={details} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                    <label className="font-semibold text-xl" htmlFor="updated_photo">Photo</label>
                    <input className="py-2 px-3 rounded" type="text" name="updated_photo" id="updated_photo" placeholder="https://i.ibb.co/PGqMPr9/11.png" defaultValue={photo} />
                </div>

                <button type="submit" className="w-full bg-light-golden hover:bg-light-gray border border-deep-midnight text-deep-midnight hover:text-white text-2xl text-center font-rancho drop-shadow-md rounded">Update Coffee Details</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;