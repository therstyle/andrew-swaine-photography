<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php body_class() @endphp>
  @php do_action('get_header') @endphp
  <div class="wrapper" role="document">
    <div id="app">
      <main-header></main-header>
      <transition
        appear
        v-on:enter="count"
        name="slide" 
        mode="out-in">
        <router-view :key="$route.fullPath" :load="load"></router-view>
      </transition>
    </div>
  </div>
  @php do_action('get_footer') @endphp
  @php wp_footer() @endphp
</body>
</html>