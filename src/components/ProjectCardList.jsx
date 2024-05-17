import cardsData from "@/constants/projects";
import ProjectCard from "./ProjectCard";

const ProjectCardsList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {cardsData.map((card, index) => (
        <ProjectCard
          key={index}
          imgSrc={card.imgSrc}
          status={card.status}
          projectName={card.projectName}
          time={card.time}
        />
      ))}
    </div>
  );
};

export default ProjectCardsList;
