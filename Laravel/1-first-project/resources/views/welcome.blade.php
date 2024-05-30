{{-- @include('pages/header') --}}
{{-- @include('pages.header') --}}
@include('pages.header', ['name' => 'abcd']) {{-- passing a key value pair by include --}}

@includeIf('pages.content', ['some' => 'data']) {{-- include if exists, No error when not found --}}

@php
    $value = "";
@endphp

@includeWhen(empty($value), 'pages.footer', ['some' => 'data'])
{{-- include when boolean value empty gets true here --}}

@includeUnless(false, 'pages.footer', ['some' => 'data'])
{{-- includes when boolean value will be false --}}

<h1>Hello World</h1>

<a href="/post">Post Page</a>

{{-- Laravel Named Route --}}
<a href="{{ route('mypost') }}">About</a>

<br>
{{-- php code --}}
{{ 'the sum of 5 + 2 = ' . 5 + 2 }}
<br>

{{-- for executing HTML and JS --}}
{!! '<h3>Hello World</h3>' !!}
{{-- {!! "<script>alert('Hello World')</script>" !!} --}}

{{-- Creating a Varibale in blade or accessing in blade --}}
@php
    $user = 'random';
    $names = ['name1', 'name2', 'name3', 'name4'];
@endphp

{{ $user }}
@{{ $user }} {{-- this will NOT print the value of $user var --}}

<ul>
    @foreach ($names as $name)
        @if ($loop->first)
            <li style="color: red;">{{ $loop->index }} - {{ $name }}</li>
        @elseif($loop->last)
            <li style="color: green">{{ $loop->index }} - {{ $name }}</li>
        @else
            <li>{{ $loop->index }} - {{ $name }}</li>
        @endif
    @endforeach
</ul>

{{-- Blade loop variable for @foreach --}}
{{-- $loop->index, $loop->iteration, $loop->remaining, $loop->count, $loop->even, $loop->odd, $loop->depth, $loop->parent --}}


@include('pages.footer')
