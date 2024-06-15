<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $users = User::all();
        // $users = User::find(1);     // returns a Array, (parsed Primary key)
        // $users = User::find([1,4], ['name', 'email']);
        // $users = User::count();     // returns total count of data

        // $users = User::where('city', 'Chicago')
        //     ->where('age', '>', 20)
        //     ->get();

        // $users = User::where([
        //     ['city', 'Chicago'],
        //     ['age', '>', 20]
        // ])->get();

        $users = User::whereCity('Chicago')
            ->select('name', 'email as User_Email')
            ->get();

        // for check SQL Query -> ->toSql(), ->dd(), ->ddRawSql()

        return $users;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Method -1
        // $user = new User;
        // $user->name = $request->username;
        // $user->email = $request->useremail;
        // $user->save();

        // Method -2
        User::create([
            'name' => $request->username,
            'email' => $request->useremail,
        ]);

        return redirect()->route('user.index')->with('status', 'New User Added Successfully');
        // Using this Status in Blade file
        /*
            @if(session('status'))
                <div> {{session('status)}} </div>
            @endif
        */
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $users = User::find($id);
        $users = User::findOrFail($id);     // redirect at 404 if $id not found

        return $users;
        // return view("viewuser", compact('users'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $users = User::find($user->id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        // -----------------
        // Method -1
        // $user = User::find($id);

        // $user->name = $request->username;
        // $user->email = $request->useremail;

        // $user->save();





        // ----------------
        // Method 2
        $user = User::where('id', $id)
            ->update([
                'name' => $request->username,
                'email' => $request->userage,
            ]);

        // return redirect()->route('user.index')
        //     ->with('status', 'User Data Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // $users = User::find($id);
        $users = User::where('email', 'admin@xyz.com');
        $users->delete();

        // User::destroy(8, 9);
        // User::destroy([8, 9]);

        // User::truncate();
    }
}
