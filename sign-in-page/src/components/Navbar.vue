<<template>
  <div class="navbar">
    <span>Building: HQ</span>

    <button class="button" @click="logout">
      Logout
    </button>
  </div>
</template>

<script setup>
function logout() {
  localStorage.removeItem('user')
  window.location.href = '/login'
}
</script>