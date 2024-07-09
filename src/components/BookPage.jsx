import { useNavigate } from "react-router-dom";

export default function Example() {
  const navigate = useNavigate();

  const bookAppoint = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    if (name && email && service && date && time) {
      navigate("/");
    } else {
      console.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mx-auto mt-12 mb-4 w-full max-w-lg bg-gray-900 text-white rounded-xl p-10 border border-black/10 mx-auto px-4 md:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Book Your Appointment</h2>
      <form className="flex flex-col space-y-4 max-w-md mx-auto" onSubmit={bookAppoint}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" className="inputsField" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" className="inputsField" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="service" className="text-sm font-medium mb-1">Service</label>
          <select id="service" name="service" className="inputsField" required>
            <option value="">Select Service</option>
            <option value="haircut">Haircut</option>
            <option value="massage">Massage</option>
            <option value="facial">Facial</option>
          </select>
        </div>
        <div className="md:flex md:space-x-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="date" className="text-sm font-medium mb-1">Date</label>
            <input type="date" id="date" name="date" className="inputsField" required />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="time" className="text-sm font-medium mb-1">Time</label>
            <input type="time" id="time" name="time" className="inputsField" required />
          </div>
        </div>
        <button type="submit" className="inline-flex justify-center items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
