import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          title="PPDB TK Fajar Nusantara"
          tech="React · Tailwind"
          image="/ppdb.png"
        />
        <ProjectCard
          title="E-Learning PKBM CTK"
          tech="PHP · CI3 · MySQL"
          image="/elearning.png"
        />
        <ProjectCard
          title="ERP Multi Role"
          tech="Laravel · Tailwind"
          image="/erp.png"
        />
      </div>
    </section>
  );
}
