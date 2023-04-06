<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\NewMessage;

class TestApiController extends Controller
{
    public function newMessage(Request $request)
    {
        event(new NewMessage($request->collect()));
        return response()->json([
            'data' => $request->collect()
        ], 200);
    }
}
