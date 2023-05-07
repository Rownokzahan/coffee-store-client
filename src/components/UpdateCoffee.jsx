
const UpdateCoffee = () => {

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

        console.log(`Name: ${name}, Supplier: ${supplier}, Category: ${category}, Chef: ${chef}, Taste: ${taste}, Details: ${details}, Photo: ${photo}`);

    }

    return (
        <div className="py-20 px-28 bg-light-gray">
            <h1 className="text-5xl text-center font-rancho text-slate-gray drop-shadow-lg">Update Existing Coffee Details</h1>
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

                <button type="submit" className="w-full bg-light-golden hover:bg-light-gray border border-deep-midnight text-deep-midnight hover:text-white text-2xl text-center font-rancho drop-shadow-md rounded">Update Coffee Details</button>
            </form>
        </div>
    );
};

export default UpdateCoffee;