<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use App\Rules\Uppercase;

use Illuminate\Support\Facades\Validator;
use Closure;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['required', new Uppercase],      // Rule Object custom validation
            // 'username' => [
            //     'required',
            //     'username' => ['required', new Uppercase],
            //     function (string $attribute, mixed $value, Closure $fail): void {
            //         if (strtoupper($value) !== $value) {
            //             $fail('The :attribute must be uppercase.');
            //         }
            //     }
            // ],
            'useremail' => 'required|email',
            'userpass' => 'required|alpha_num|min:6',
            'userage' => 'required|numeric|min:10',
            'usercity' => 'required'
        ];
    }

    // Laravel method
    // public function messages()
    // {
    //     return [
    //         'username.required' => ':attribute is required!',
    //         'useremail.required' => 'User Email is Required!',
    //         'userage.required' => 'user age is required',
    //         'userage.min:10' => 'user age must be greater than 10 years',
    //     ];
    // }

    // Laravel method 'attributes()' for change the only 'name' field of input and using default message 
    public function attributes()
    {
        return [
            'username' => 'User Name',
            'useremail' => 'User email',
            'userpass' => 'user password',
            'userage' => 'user age',
            'usercity' => 'user city'
        ];
    }

    // Laravel Method
    protected function prepareForValidation(): void
    {
        $this->merge([
            // 'username' => strtoupper($this->username),
            'username' => Str::slug($this->username),
        ]);
    }

    protected $stopOnFirstFailure = true;       // Laravel global variable, default value false
}
