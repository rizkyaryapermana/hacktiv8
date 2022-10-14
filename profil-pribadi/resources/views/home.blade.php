@extends('layouts.main')
@section('container')
    <h1>Selamat Datang</h1>

    <img src ="img/{{ $image }}" alt ="#" width ="150">
    <img src ="img/{{ $images }}" alt ="#" width ="150">
    <h3>{{ $nama }}</h3>


    @endsection
