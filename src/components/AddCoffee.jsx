import { BsCup } from "react-icons/bs";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, supplier, category, chef, taste, details, photo };

        fetch(`http://localhost:5000/coffee`, {
            method: "POST",
            body: JSON.stringify(newCoffee),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="py-20 px-28 bg-light-gray">
            <h1 className="title-gray">Add New Coffee</h1>
            <p className="text-center max-w-5xl mx-auto my-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleAddCoffee}>
                <div className="grid md: grid-cols-2 gap-6">
                    <div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="name">Name</label>
                            <input className="py-2 px-3 rounded" type="text" name="name" id="name" placeholder="Americano Coffee" />
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="supplier">Supplier</label>
                            <input className="py-2 px-3 rounded" type="text" name="supplier" id="supplier" placeholder="Cappu Authorizer" />
                        </div>

                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="category">Category</label>
                            <input className="py-2 px-3 rounded" type="text" name="category" id="category" placeholder="Americano" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="chef">Chef</label>
                            <input className="py-2 px-3 rounded" type="text" name="chef" id="chef" placeholder="Mr. Matin Paul" />
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="taste">Taste</label>
                            <input className="py-2 px-3 rounded" type="text" name="taste" id="taste" placeholder="Sweet and hot" />
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            <label className="font-semibold text-xl" htmlFor="details">Details</label>
                            <input className="py-2 px-3 rounded" type="text" name="details" id="details" placeholder="Espresso with hot water" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                    <label className="font-semibold text-xl" htmlFor="photo">Photo</label>
                    <input className="py-2 px-3 rounded" type="text" name="photo" id="photo" placeholder="https://i.ibb.co/PGqMPr9/11.png" />
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-1 bg-light-golden hover:bg-light-gray border border-deep-midnight text-deep-midnight hover:text-white text-2xl text-center font-rancho drop-shadow-md rounded">Add Coffee <BsCup className="text-deep-midnight" /></button>
            </form>
        </div>
    );
};

export default AddCoffee;