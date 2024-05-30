@include('layouts.header')

{{-- @yield('content') --}}

@hasSection('content')
    @yield('content')
@else
    <h2>No Content Found</h2>
@endif

{{-- this is will whether 'contnet' ection defines or not, if defined then yield('content') otherwise show there default message like no Content found --}}

@include('layouts.footer')
