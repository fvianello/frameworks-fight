<template>
  <div id="#menu">
	  <ul>
	    <li><router-link to="/">/</router-link></li>
	    <li><router-link to="/foo">/foo</router-link></li>
	    <li><router-link to="/bar">/bar</router-link></li>
	  </ul>
	 </div>
</template>

<script>

export default {
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
ul{
	padding: 0;
}
li{
	display: inline-block;
}
</style>
