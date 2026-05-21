interface Project {
    id: number;
    name: string;
    description: string;
    status: string;
    start_date: string | null;
    end_date: string | null;
}


interface Props {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
    return (
        <div>
            <h1>Lista de Proyectos</h1>

            <ul>
                {projects.map((p) => (
                    <li key={p.id}>
                        {p.name} - {p.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}
