import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const handleApplyJob = () =>{
        toast('You have applied successfully');
    }
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3 space-y-6">
                    <h2><span className="font-bold text-xl">Job Descriptions</span> : {job.job_description}</h2>
                    <h2><span className="font-bold text-xl">Job Responsibility</span> : {job.job_responsibility} </h2>
                    <div>
                        <p className="font-bold text-xl">Educational Requirement :</p>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <p className="font-bold text-xl">Experiences :</p>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Site Think</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer/>
        </div >
    );
};

export default JobDetails;