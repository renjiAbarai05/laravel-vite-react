<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Events\NewMessage;
use App\Http\Controllers\TestApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('test-api', function (Request $request)
// {
//     event(new NewMessage($request->collect()));
//     return response()->json([
//         'dataa' => [$request->collect(), 'as']
//     ], 200);
// });
Route::post('test-api', [TestApiController::class, 'newMessage']);
