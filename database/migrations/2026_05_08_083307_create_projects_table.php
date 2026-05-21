<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // CUIDADO CON EL NOMBRE DE LAS COLUMNAS.
        // He estado 10 mins buscando un error de creacion de filas, finalmente era description, tenia puesto descripcion.
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Obligatorio por defecto
            $table->text('description')->nullable();
            $table->enum('status', ['pending', 'active', 'completed', 'cancelled'])->default('pending');
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
