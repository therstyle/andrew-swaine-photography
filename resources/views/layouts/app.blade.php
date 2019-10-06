<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php body_class() @endphp>
  @php do_action('get_header') @endphp
  <div class="wrapper" role="document">
    <div id="app">
      <main-header></main-header>
      <router-view></router-view>
    </div>
  </div>
  @php do_action('get_footer') @endphp
  @php wp_footer() @endphp
</body>

</html>