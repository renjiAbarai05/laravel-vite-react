<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('message');
});
// Route::get('message', function () {
//     $message['user'] = "Juan Perez";
//     $message['message'] =  "Prueba mensaje desde Pusher";
//     event(new App\Events\NewMessage($message));
// });

