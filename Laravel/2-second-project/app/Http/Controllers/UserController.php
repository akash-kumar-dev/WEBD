<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function showUsers()
    {
        $users = DB::table('users')
            // ->orderBy('name')
            ->orderBy('age', 'asc')
            // ->orderBy('age', 'desc')
            // ->limit(3)  // fetch only 3 recors   same as '->take(3)'
            // ->offset(6)     // fetch after 6 recodrs     same as '->skip(6)'
            ->get();


        // ->count()    count total entries
        // ->max('age)    returns maximum/minimum age only for Integer and Float     min('age')
        // ->avg('age')
        // ->sum('age')

        // ->first()    show first Entry Only Rteurns Array
        // ->latest()   show latest Entry only Returns in Array
        // ->oldest()   show oldest Entry
        // ->inRandomOrder()    returns in Array single Random Data 

        // $users = DB::table('users')
        //     ->select('name', 'email as user_email')     // 'email' renamd as 'user_email'
        //     ->get();

        // $users = DB::table('users')
        //     ->select('city')
        //     ->distinct()    // remove duplicity
        //     ->get();

        // $users = DB::table('users')
        //     ->pluck('name');    // same as 'get()' but returns array. 
        // ->pluck('name', 'email');    // key:value pair

        // return $users;
        // dd($users);     // debug inforamtion 'dd' is like return here but dump will just diplay data and excute below lines
        // dump($users);

        // Where condition
        // $users = DB::table('users')
        //     ->where('city', 'Chicago')
        //     ->where('age', '>', 25)
        //     ->where('name', 'like', 'S%')   // Starting with 'S' in 'name'
        //     ->get();

        // Another method to use multiple where in Array 
        // $users = DB::table('users')
        //     ->where([
        //         ['city', '=', 'Chicago'],
        //         ['age', '>', 25],
        //         ['name', 'like', 'S%']
        //     ])
        //     ->get();


        // $users = DB::table('users')
        //     ->where('city', 'Chicago')
        //     // ->orWhere('age', '>', 25)
        //     // ->whereBetween('id', [3, 6])
        //     // ->whereNotBetween('id', [3, 6])
        //     ->whereIn('id', [3, 6, 10])
        //     ->whereNull('email')
        //     ->whereNotNull('email')
        //     ->get();
        // other Methods -> whereDate(), whereMonth(), whereDay(), whereYear()

        return view('allusers', ['data' => $users]);
    }

    public function singleUser(string $id)
    {
        $users = DB::table('users')->where('id', $id)->get();
        return $users;
    }
}
