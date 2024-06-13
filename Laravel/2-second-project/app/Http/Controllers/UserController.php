<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    // public function showUsers()
    // {
    //     $users = DB::table('users')
    //         // ->orderBy('name')
    //         ->orderBy('age', 'asc')
    //         // ->orderBy('age', 'desc')
    //         // ->limit(3)  // fetch only 3 recors   same as '->take(3)'
    //         // ->offset(6)     // fetch after 6 recodrs     same as '->skip(6)'
    //         ->get();


    //     // ->count()    count total entries
    //     // ->max('age)    returns maximum/minimum age only for Integer and Float     min('age')
    //     // ->avg('age')
    //     // ->sum('age')

    //     // ->first()    show first Entry Only Rteurns Array
    //     // ->latest()   show latest Entry only Returns in Array
    //     // ->oldest()   show oldest Entry
    //     // ->inRandomOrder()    returns in Array single Random Data 

    //     // $users = DB::table('users')
    //     //     ->select('name', 'email as user_email')     // 'email' renamd as 'user_email'
    //     //     ->get();

    //     // $users = DB::table('users')
    //     //     ->select('city')
    //     //     ->distinct()    // remove duplicity
    //     //     ->get();

    //     // $users = DB::table('users')
    //     //     ->pluck('name');    // same as 'get()' but returns array. 
    //     // ->pluck('name', 'email');    // key:value pair

    //     // return $users;
    //     // dd($users);     // debug inforamtion 'dd' is like return here but dump will just diplay data and excute below lines
    //     // dump($users);

    //     // Where condition
    //     // $users = DB::table('users')
    //     //     ->where('city', 'Chicago')
    //     //     ->where('age', '>', 25)
    //     //     ->where('name', 'like', 'S%')   // Starting with 'S' in 'name'
    //     //     ->get();

    //     // Another method to use multiple where in Array 
    //     // $users = DB::table('users')
    //     //     ->where([
    //     //         ['city', '=', 'Chicago'],
    //     //         ['age', '>', 25],
    //     //         ['name', 'like', 'S%']
    //     //     ])
    //     //     ->get();


    //     // $users = DB::table('users')
    //     //     ->where('city', 'Chicago')
    //     //     // ->orWhere('age', '>', 25)
    //     //     // ->whereBetween('id', [3, 6])
    //     //     // ->whereNotBetween('id', [3, 6])
    //     //     ->whereIn('id', [3, 6, 10])
    //     //     ->whereNull('email')
    //     //     ->whereNotNull('email')
    //     //     ->get();
    //     // other Methods -> whereDate(), whereMonth(), whereDay(), whereYear()

    //     return view('allusers', ['data' => $users]);
    // }

    public function singleUser(string $id)
    {
        $users = DB::table('users')->where('id', $id)->get();
        return $users;
    }

    public function addUser()
    {
        // $user = DB::table('users')
        //     // ->insert()
        //     ->insertOrIgnore([      // returns true or false if Data saved or not
        //         'name' => "Ram Kumar",
        //         'email' => 'ram@email.com',
        //         'age' => 20,
        //         'city' => 'delhi',
        //         // 'created_at' => now(),
        //         // 'updated_at' => now()
        //     ]);

        $user = DB::table('users')
            ->upsert(   // check if unique col. already exists then update otherwise create new one
                [
                    'name' => "Ram Kumar",
                    'email' => 'ram@email.com',
                    'age' => 21,
                    'city' => 'delhi',
                ],
                ['email'],   // unique cols. ['email', 'name']
                ['city']    // update only 'city' col.   (NOT Imp.)
            );

        // ->insertGetId([])    returns 'id' when data saved

        if ($user) {
            echo "<h1>Data Successfully Added</h1>";
        } else {
            echo "<h1>Data NOT Saved</h1>";
        }
    }

    public function updateUser()
    {
        $user = DB::table('users')
            ->where('id', 1)
            ->update([
                'city' => 'Mumbai',
                'age' => 22
            ]);

        // $user = DB::table('users')
        //     ->updateOrInsert(       // check first parameter of Array exists in DB or not, if exist then update otherwise create new
        //         [
        //             'city' => 'Mumbai',
        //             'email' => 'john.doe@example.com',
        //             'name' => 'John Doe'
        //         ],
        //         [
        //             'age' => 21
        //         ]
        //     );

        // $user = DB::table('users')
        //     ->where('id', 3)
        // ->increment('age');      // icrement of 1
        // ->decrement('age');      // decrement of 1
        // ->increment('age', 5);      // incrment of 5
        // ->increment('age', 5, ['city' => 'Delhi']);     // 3rd parameter of Array use for update other col.
        // ->incrementEach([
        //     'age' => 2,     // increment age by 2
        //     'votes' => 1    // increment vote by 1
        // ]);
    }

    public function deleteUser($id)
    {
        $user = DB::table('users')
            ->where('id', $id)
            ->delete();

        if ($user) {
            return redirect()->route('home');
        }
    }

    public function deleteAllUser()
    {
        $user = DB::table('users')
            // ->delete();     // 'id' col. not Reset
            ->truncate();
    }

    public function showUsers()
    {
        // $users = DB::table('users')
        //     ->orderBy('name')
        //     ->paginate(4);
        // ->simplePaginate(4);
        // ->paginate(4, ['name', 'email']);    // show only name and email, ['*'] for all col. 
        // ->paginate(4, ['name', 'email'], 'p');   // 3rd parameter is query string, default '?page=*'
        // ->paginate(4, ['name', 'email'], 'p', 2);    // By 4th peram open direct 2nd page, Default NULL assigned so its open 1st page

        $users = DB::table('users')
            ->orderBy('name')
            ->paginate(4);
        // ->fragment('users');     // #users
        // ->appends(['q2' => 'queryString2', 'test' => 'abc']);       // passing multiple Query Strings

        return view('allusers', ['data' => $users]);
    }

    // public function addUser2(Request $req)
    // {

    //     // $req->validate([
    //     //     'username' => 'required',
    //     //     'useremail' => 'required|email',
    //     //     'userpass' => 'required|alpha_num|min:6',
    //     //     'userage' => 'required|numeric|min:10',
    //     //     'usercity' => 'required'
    //     // ]);

    //     $req->validate(
    //         [
    //             'username' => 'required',
    //             'useremail' => 'required|email',
    //             'userpass' => 'required|alpha_num|min:6',
    //             'userage' => 'required|numeric|min:10',
    //             'usercity' => 'required'
    //         ],
    //         [
    //             'username.required' => 'User Name is required!',
    //             'useremail.required' => 'User Email is Required!',
    //             'userage.required' => 'user age is required',
    //             'userage.min:10' => 'user age must be greater than 10 years'
    //         ]
    //     );

    //     // https://laravel.com/docs/11.x/validation (Fr more about Laravel Validation)

    //     $user = DB::table('users')
    //         ->insert([
    //             'name' => $req->username,
    //             'email' => $req->useremail,
    //             'age' => $req->userage,
    //             'city' => $req->usercity
    //         ]);

    //     // return $req->all();

    //     if ($user) {
    //         return redirect()->route('home');
    //     } else {
    //         echo "<h1>Data NOT Saved</h1>";
    //     }
    // }

    public function addUser2(UserRequest $req)
    {
        $user = DB::table('users')
            ->insert([
                'name' => $req->username,
                'email' => $req->useremail,
                'age' => $req->userage,
                'city' => $req->usercity
            ]);

        // return $req->all();
        // return $req->only(['username', 'userage']);
        return $req->except(['userpass', 'usercity']);

        if ($user) {
            return redirect()->route('home');
        } else {
            echo "<h1>Data NOT Saved</h1>";
        }
    }


    public function updatePage(string $id)
    {
        // $user = DB::table('users')->where('id', $id)->get();     // returns Array of Object
        $user = DB::table('users')->find($id);      // returns Array
        return view('updateuser', ['data' => $user]);
    }

    public function update(Request $req, $id)
    {
        $user = DB::table('users')
            ->where('id', $id)
            ->update([
                'name' => $req->username,
                'email' => $req->useremail,
                'age' => $req->userage,
                'city' => $req->usercity
            ]);

        if ($user) {
            return redirect()->route('home');
        } else {
            echo "<h1>Data NOT updated</h1>";
        }
    }

}
