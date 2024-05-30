</article>
</div>
<div class="2 div2">
    @section('sidebar')
        <ul>
            <li><a href='{{ route('newHome') }}'>Home</a></li>
            <li><a href='{{ route('newAbout') }}'>About</a></li>
        </ul>
    @show
    {{-- here no @endsection, by @show this section not end yet here any other dynamic value may be inserted --}}
</div>
</div>

<div class="container">
    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p class="text-center text-body-secondary">&copy; 2024 Company, Inc</p>
    </footer>
</div>

</body>

</html>
