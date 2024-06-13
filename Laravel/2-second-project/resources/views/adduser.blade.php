<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add User</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-6 ">
                <h1>Add New User</h1>

                {{-- <pre>
                    @php
                        print_r($errors->all());
                    @endphp
                </pre> --}}

                {{-- @if ($errors->any())
                    <ul class="alert alert-warning" role="alert">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                @endif --}}

                <form action="{{ route('addUser') }}" method="post">
                    @csrf
                    <div class="mb-3">
                        <label for="username" class="form-label">Name</label>
                        <input type="text" value="{{old('username')}}" class="form-control @error('username') is-invalid @enderror" name="username" id="username">
                        <span class="text-danger">
                            @error('username')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                    <div class="mb-3">
                        <label for="useremail" class="form-label">Email</label>
                        <input type="email" value="{{old('useremail')}}" class="form-control @error('useremail') is-invalid @enderror"" name="useremail" id="useremail">
                        <span class="text-danger">
                            @error('useremail')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                    <div class="mb-3">
                        <label for="userpass" class="form-label">Password</label>
                        <input type="password" value="{{old('userpass')}}" class="form-control @error('userpass') is-invalid @enderror"" name="userpass" id="userpass">
                        <span class="text-danger">
                            @error('userpass')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                    <div class="mb-3">
                        <label for="userage" class="form-label">Age</label>
                        <input type="text" value="{{old('userage')}}" class="form-control @error('userage') is-invalid @enderror"" name="userage" id="userage">
                        <span class="text-danger">
                            @error('userage')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                    <div class="mb-3">
                        <label for="usercity" class="form-label">City</label>
                        <input type="text" value="{{old('usercity')}}" class="form-control @error('usercity') is-invalid @enderror"" name="usercity" id="usercity">
                        <span class="text-danger">
                            @error('usercity')
                                {{ $message }}
                            @enderror
                        </span>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>

</body>

</html>
