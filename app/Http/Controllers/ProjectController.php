<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(){
        $projects =  Project::all();
        return $projects;
        //return Inertia::render('Projects/Index', ['projects' => $projects]);
    }

    public function show($id)
    {
        $proj = Project::all()->findOrFail($id);
        return $proj;
    }

}
