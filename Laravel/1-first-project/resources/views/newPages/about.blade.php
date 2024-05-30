@extends('layouts.master')

@section('content')
    <h2 style="text-align: center">About Page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolore veritatis saepe inventore! Laborum culpa
        aspernatur deserunt illo! Distinctio recusandae, facilis dolorem voluptatem, debitis hic sequi et, corrupti
        dignissimos placeat repudiandae nemo. Tenetur quos accusantium maiores molestiae est rerum deleniti.</p>
@endsection

@section('title')
    About
@endsection

@section('sidebar')
    @parent
    {{-- here @parent for importing exsiting data --}}
    <p>this is the Appended to the master sidebar</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores at nam sunt. Perspiciatis aspernatur harum porro
        deserunt, suscipit impedit eaque?</p>
@endsection
