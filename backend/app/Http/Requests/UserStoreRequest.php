<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest {
    
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        if(request()->isMethod("POST")){
            return [
                'name' => 'required|string|max:258',
                'email'=> 'required:string|email',
                'password'=> 'required|string'
            ];
        }
        else{
            return [
                'name' => 'required|string|max:258',
                'email'=> 'required:string|email',
                'password'=> 'required|string'
            ];
        }

    }

    public function messages()
    {
        if(request()->isMethod("POST")){
            return [
                'name.required' => 'Name is required!',
                'email.required'=> 'Email is required!',
                'password.required'=> 'Password is required!'
            ];
        }
        else{
            return [
                'name.required' => 'Name is required!',
                'email.required'=> 'Email is required!',
                'password.required'=> 'Password is required!'
            ];
        }

    }
    
}
