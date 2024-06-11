<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Users List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-10">
                <h1 style="text-align: center">All Users List</h1>
                <a href="/newuser" class="btn btn-success btn-sm mb-3">Add new</a>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">age</th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($data as $id => $user)
                            <tr>
                                <th scope="row">{{ $user->id }}</th>
                                <td>{{ $user->name }}</th>
                                <td>{{ $user->email }}</td>
                                <td>{{ $user->age }}</td>
                                <td>{{ $user->city }}</td>
                                <td><a href="{{ route('view.user', $user->id) }}"
                                        class="btn btn-primary btn-sm">View</a></td>
                                <td><a href="{{ route('delete.user', $user->id) }}"
                                        class="btn btn-danger btn-sm">Delete</a></td>
                                <td><a href="{{ route('update.page', $user->id) }}"
                                        class="btn btn-warning btn-sm">Update</a></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="mt-5">
                    {{-- {{ $data->links() }} --}}
                    {{ $data->links('pagination::bootstrap-5') }}
                </div>
                <div>
                    Total Users: {{ $data->total() }}
                </div>
            </div>
        </div>
    </div>

</body>

</html>
