@php
    $user = 'first name';
    $fruits = ['Apple', 'Orange', 'Banana', 'Grapes'];
@endphp

<script>
    // var data = {{ $user }};   // Error (This is not right way to access php in JS)
    var data = @json($user);
    console.log(data);

    // var fruits  = @json($fruits);
    var fruits = {{ Js::from($fruits) }};
    fruits.forEach(element => {
        console.log(element);
    });
</script>
