export default function ProjectCard({ title, tech, image }) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden hover:-translate-y-2 transition">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{tech}</p>
      </div>
    </div>
  );
}
