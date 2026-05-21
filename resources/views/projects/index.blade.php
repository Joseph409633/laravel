<!DOCTYPE html>
<html>
<body>
    <h1>Projects</h1>

    @forelse($projects as $project)
        <p>{{ $project->name }}</p>
    @empty
        <p>No projects found.</p>
    @endforelse
</body>
</html>