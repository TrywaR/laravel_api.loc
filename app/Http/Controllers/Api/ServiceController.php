<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $service = Service::all();

        return response()->json(['data' => $service], 200);
    }

    public function show($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json(['error' => 'Book not found'], 404);
        }

        return response()->json(['data' => $service], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'published_at' => 'required|date',
        ]);

        $service = Service::create($request->all());

        return response()->json(['data' => $service], 201);
    }

    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json(['error' => 'Book not found'], 404);
        }

        $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'published_at' => 'required|date',
        ]);

        $service->update($request->all());

        return response()->json(['data' => $service], 200);
    }

    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json(['error' => 'Book not found'], 404);
        }

        $service->delete();

        return response()->json(['message' => 'Book deleted'], 200);
    }
}
