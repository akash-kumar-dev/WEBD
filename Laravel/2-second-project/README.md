<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<hr><br>

## Seeder

```
    $ php artisan make:model student    // Table name in Singualr format for creating Model first

    $ php artisan make:seeder StudentSeeder     // creaing seeder file

    $ php artisan db:seed       // saving Data in DB

    $ php artisan migrate:fresh --seed

    $ php artisan db:seed --class=UserSeeder    // For single file seeding

```

## Factory

```
    $  $ php artisan make:factory StudentFactory    // create factory file

    $ php artisan make:factory --model=Student      // create Factory & Model

    $ php artisan make:model -f    // same as above (Factory and Model)

    $ php artisan db:seed

    $ php artisan db:seed --class=UserSeeder

    $ php artisan migrate:fresh --seed

```

## pagination

<a href="https://laravel.com/docs/11.x/pagination#simple-pagination">Pagination in Laravel</a>

## <a href="https://laravel.com/docs/11.x/validation">Laravel Validation</a>

## Form Request Validation

```
    $ php artisan make:request UserRequest
        (/app/Http/Requests/UserRequest.php)
```

## Custom Validation Rules

```
    $ php artisan make:rule Uppercase
        (/app/Rules/Uppercase.php)
```