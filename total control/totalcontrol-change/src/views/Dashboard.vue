<template>
  <div class="dashboard">
    <!-- Header -->
    <div class="dashboard-header">
      <h2>Dashboard</h2>
      <p>Welcome to the KMC Software System</p>
    </div>

    <!-- Status Bar -->
    <div class="status-bar">
      <div>Status: Connected</div>
      <div>Server: Online</div>
      <div>Data: Live</div>
    </div>

    <!-- Section Title -->
    <h3 class="section-title">Modules</h3>

    <!-- Cards -->
    <div class="card-grid">
      <router-link to="/trend-viewer" class="card">
        📈 Trend Viewer
      </router-link>

      <router-link to="/trend-configuration" class="card">
        ⚙️ Trend Configuration
      </router-link>

      <router-link to="/alarm-viewer" class="card">
        🚨 Alarm Viewer
      </router-link>

      <router-link to="/schedule-viewer" class="card">
        📅 Schedule Viewer
      </router-link>

      <router-link to="/schedule-manager" class="card">
        🛠 Schedule Manager
      </router-link>

      <router-link to="/all-point-report-viewer" class="card">
        📊 All Point Reports
      </router-link>

      <router-link to="/audit-report-viewer" class="card">
        🧾 Audit Reports
      </router-link>

      <router-link to="/audit-log-viewer" class="card">
        📜 Audit Logs
      </router-link>

      <router-link to="/web-administrator" class="card">
        🔧 Web Administrator
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

/* Page background + spacing */
.dashboard {
  padding: 24px;
  background-color: #f3f4f6;
  min-height: 100%;
  max-width: 1450px;
  margin: 0 auto;
}

/* Header */
.dashboard-header {
  margin-bottom: 20px;
}

.dashboard-header h2 {
  margin: 0;
  font-size: 26px;
  color: #111827;
}

.dashboard-header p {
  margin-top: 6px;
  color: #6b7280;
  font-size: 14px;
}

/* Status bar */
.status-bar {
  display: flex;
  gap: 16px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.status-bar div {
  background: #ffffff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  color: #111827;
  border: 1px solid #e5e7eb;
  font-weight: 500;
}

/* Section title */
.section-title {
  margin-bottom: 15px;
  font-size: 18px;
  color: #374151;
}

/* Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

/* Card */
.card {
  background: white;
  padding: 22px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: #111827;
  font-weight: 500;
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100px;
  

  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
}

/* Hover effect */
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  background: #f9fafb;
}

/* Remove router-link styles */
.card:visited {
  color: #111827;
}

.card:focus,
.card:active {
  outline: none;
  color: #111827;
}

</style>
