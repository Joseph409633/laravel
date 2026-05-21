<?php

namespace App\Http\Controllers;

use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();   // O paginación: Project::paginate(10)

        return view('projects.index', compact('projects'));
    }


    public function show($id)
    {
        $project = Project::findOrFail($id);
        return view('projects.project', compact('project'));
    }

}
