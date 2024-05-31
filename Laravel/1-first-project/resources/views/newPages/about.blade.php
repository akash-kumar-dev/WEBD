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


@push('scripts')
    <script src="/example.js"></script>
@endpush

@push('scripts')
    <script src="/bootstrap.js"></script>
@endpush

{{-- by @yield single @section can be added only but by @stack multiple @push can be added on same stack place  --}}

@prepend('style')
    <script src="/test.js"></script>
@endprepend
{{-- Append this before 'style' stack/yield --}}