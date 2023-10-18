<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', [UserController::class, 'index']);
Route::post('addUser', [UserController::class, 'store']);
Route::get('findUser/{id}', [UserController::class, 'show']);
Route::put('updateUser/{id}', [UserController::class, 'update']);
Route::delete('deleteUser/{id}', [UserController::class, 'destroy']);
