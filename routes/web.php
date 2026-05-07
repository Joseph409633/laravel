<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::inertia('/bienvenida', 'bienvenida');

Route::get('/test', function () {
    return 'Este es un endpoint de prueba';
});

Route::get('/saludo/{usuario}', function($usuario){
    return 'Bienvenido de nuevo, ' . $usuario;
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
