import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className=" text-4xl">Page in not found</h2>
            <Link to='/'><button className="bg-blue-900 p-2 mt-3 rounded-xl">Go back</button></Link>
        </div>
    );
};

export default ErrorPage;