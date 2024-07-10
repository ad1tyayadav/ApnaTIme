import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function Flash({ message, duration, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);
    const notify = () => toast("Wow so easy!");

    return (
        <div>
            <button onClick={notify}>Notify</button>
            <ToastContainer />
        </div>
    );
}

export default Flash