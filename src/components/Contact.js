const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input 
                type="text"
                placeholder="name"
                className="p-2 m-2 border border-black"
                />
                <input 
                type="text"
                placeholder="message"
                className="p-2 m-2 border border-black"
                />
                <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;