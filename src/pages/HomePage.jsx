import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobsButton from "../components/ViewAllJobsButton"

const HomePage = () => {
    return (
        <>
            {/* <!-- Hero --> */}
			<Hero 
				title="Become a React Dev" 
				subtitle="Find the React job that fits your skills and needs"
			/>

            {/* <!-- Developers and Employers --> */}
			<HomeCards />

			{/* <!-- Browse Jobs --> */}
			<JobListings />

			{/* <!-- View All Jobs --> */}
			<ViewAllJobsButton />
        </>
    )
}

export default HomePage