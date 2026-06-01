<template>
  <div class="container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you’re looking for doesn’t exist.</p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 80px;
  color: #6366f1;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

a {
  color: white;
  background: #6366f1;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}
</style>