@extends('layouts.app')

@section('content')
    <script>
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render( <h1> Hello, world! </h1> );
    </script>

    <div id="root">
        <!-- This element's contents will be replaced with your component. -->
    </div>
@endsection