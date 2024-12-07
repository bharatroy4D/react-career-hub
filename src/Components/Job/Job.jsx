import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id, logo, job_title, company_name, location, job_type, remote_or_onsite, salary, job_description } = job;
    return (

        <div>
            <div className="card card-compact bg-base-100  shadow-xl border-2 border-blue-900 ">
                <figure>
                    <img
                        src={logo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className='border rounded px-5 py-2 mr-2 text-blue-400 border-blue-400'>Remote</button>
                        <button className='border rounded px-5 py-2 mr-2 text-blue-400 border-blue-400'>Full Time</button>
                    </div>
                    <div className="flex mt-4">
                        <h2 className="flex mr-4"><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}</h2>
                        <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
                            {salary}</h2>

                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>,
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;