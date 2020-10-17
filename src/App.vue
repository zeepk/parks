<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	/* background-color: #2c3e50; */
	background-image: url('assets/woods.png');
	background-repeat: no-repeat;
	background-attachment: fixed;
	color: white;
	margin: 0;
	min-height: 100vh;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
body {
	margin: 0;
}

.p-card,
.p-card-content {
	padding: 0 !important;
}
.p-multiselect-label {
	color: black !important;
}
.p-multiselect-header {
	display: none !important;
}
</style>
