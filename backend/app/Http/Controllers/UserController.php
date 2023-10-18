<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserStoreRequest;

class UserController extends Controller {
    
    public function index(){
        $users = User::all();

        return response()->json([
            "users"=> $users
        ], 200);
    }

    public function store(UserStoreRequest $request){
        // $user = User::create($request->all());
        try{
            User::create([
                'name' => $request->name,
                'email'=> $request->email,   
                'password'=> $request->password,   
            ]);

            return response()->json([
                "meaaage"=> 'User create successfully'
            ], 200);
        }
        catch(\Exception $e){
            return response()->json([
                "meaaage"=> 'Something wrong'
            ], 500);
        }
    }

    public function show($id){
        $user = User::find($id);
        if(!$user){
            return response()->json([
                "message"=> "User not found"
            ], 404);
        }
        return response()->json([
            "user"=> $user
        ], 200);
    }

    public function update(UserStoreRequest $request, $id){
        try{
            $user = User::find($id);
            if(!$user){
                return response()->json([
                    "message"=> "User not found"
                ], 404);
            }

            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->save();

            return response()->json([
                "meaaage"=> 'User update successfully'
            ], 200);
        }
        catch(\Exception $e){
            return response()->json([
                "meaaage"=> 'Something wrong'
            ], 500);
        }
    }

    public function destroy($id){
        $user = User::find($id);
        if(!$user){
            return response()->json([
                "message"=> "User delete fail"
            ], 404);
        }
        
        $user->delete();
        
        return response()->json([
            "meaaage"=> 'User delete successfully'
        ], 200);
    }

}
