@extends('layout')

@section('content')
<div id="app">
    <div class="row">
        <header id="header">
            <h1>Todos</h1>
            <input id="new-todo" placeholder="What needs to be done?" autofocus class="form-control">
        </header>
    </div>
    <div class="row">
        <ul class="todos list-group"></ul>
    </div>
</div>
@endsection
