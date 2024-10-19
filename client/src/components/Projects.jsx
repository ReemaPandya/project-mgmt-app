import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const {loading, error, data} = useQuery(GET_PROJECTS)
    if (loading) return <Spinner/>
    if (error) return <p>Something Went Wrong</p>;
    console.log(data);
  return <>
    {data.projects.length>0?(
        <div className="row">
            {data.projects.map((project)=><ProjectCard key={project.id} project={project}/>)}
        </div>
    ):(<p>No projects</p>)}
  </>
}

export default Projects
