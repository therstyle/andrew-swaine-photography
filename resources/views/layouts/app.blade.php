<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php body_class() @endphp>
  @php do_action('get_header') @endphp
  <div class="wrap container" role="document">
    <div id="app">
      <hello-world message="Hello world!"></hello-world>
    </div>
  </div>
  @php do_action('get_footer') @endphp
  @php wp_footer() @endphp
</body>

</html>