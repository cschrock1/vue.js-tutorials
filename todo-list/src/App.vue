<template>
  <div class="app">
    <div class="todo-card">
      <h1>My Todo List</h1>
      <p class="subtitle">Keep your day on track with easy task management.</p>

            <div class="input-row">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
        <button @click="addTask" :disabled="newTask.trim() === ''">Add Task</button>
      </div>

      <p class="summary-text">Completed today: {{ todayCompletedCount }}</p>

      <ul class="task-list">
        <li v-for="(task, index) in activeTasks" :key="`active-${index}`" class="task-item">
          <div class="task-row">
            <span
              class="task-text"
              @click="toggleTask(taskIndex(task, false))"
              @mouseover="hoveredIndex = index"
              @mouseleave="hoveredIndex = null"
            >
              {{ task.text }}
            </span>
            <button class="remove-btn" @click="removeTask(taskIndex(task, false))">Remove</button>
          </div>
          <div v-show="hoveredIndex === index" class="hover-message">
            Mark as completed
          </div>
        </li>
      </ul>

      <section v-if="completionDates.length > 0" class="calendar-section">
        <h2>Completed history</h2>
        <div class="calendar-grid">
          <button
            v-for="date in completionDates"
            :key="date"
            type="button"
            @click="selectedDate = date"
            :class="['calendar-day', { active: selectedDate === date }]"
          >
            {{ formatDate(date) }}
          </button>
        </div>
        <p class="summary-text">Showing completed tasks for <strong>{{ formatDate(selectedDate) }}</strong></p>

        <ul class="completed-list">
          <li v-if="completedOnSelectedDate.length === 0" class="empty-state">
            No completed tasks on this day.
          </li>
          <li v-for="(task, index) in completedOnSelectedDate" :key="`completed-${selectedDate}-${index}`" class="completed-item">
            <span class="task-text completed" @click="toggleTask(taskIndex(task, true))">{{ task.text }}</span>
            <div class="completed-actions">
              <button class="restore-btn" @click="toggleTask(taskIndex(task, true))">Restore</button>
              <button class="remove-btn" @click="removeTask(taskIndex(task, true))">Remove</button>
            </div>
          </li>
        </ul>
      </section>

      <p v-if="tasks.length === 0" class="empty-state">No tasks yet — add one to get started.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {
    const newTask = ref('')
    const tasks = ref([])
    const hoveredIndex = ref(null)
    const selectedDate = ref(new Date().toISOString().slice(0, 10))

    const loadTasks = () => {
      try {
        const saved = localStorage.getItem('todoTasks')
        if (saved) {
          tasks.value = JSON.parse(saved).map(task => ({
            ...task,
            completedAt: task.completedAt || null
          }))
        }
      } catch (error) {
        tasks.value = []
      }
    }

    const saveTasks = () => {
      try {
        localStorage.setItem('todoTasks', JSON.stringify(tasks.value))
      } catch (error) {
        // ignore storage failures
      }
    }

    const activeTasks = computed(() => tasks.value.filter(task => !task.completed))
    const completedTasks = computed(() => tasks.value.filter(task => task.completed))
    const completionDates = computed(() => {
      const dates = tasks.value
        .filter(task => task.completedAt)
        .map(task => task.completedAt.slice(0, 10))
      return [...new Set(dates)].sort((a, b) => b.localeCompare(a))
    })
    const completedOnSelectedDate = computed(() => {
      return tasks.value.filter(task => task.completed && task.completedAt?.slice(0, 10) === selectedDate.value)
    })
    const todayCompletedCount = computed(() => {
      const today = new Date().toISOString().slice(0, 10)
      return tasks.value.filter(task => task.completed && task.completedAt?.slice(0, 10) === today).length
    })

    const formatDate = (iso) => {
      return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    }

    watch(completionDates, (dates) => {
      if (dates.length && !dates.includes(selectedDate.value)) {
        selectedDate.value = dates[0]
      }
    }, { immediate: true })

    const taskIndex = (task, completed) => {
      return tasks.value.findIndex(item => item === task && item.completed === completed)
    }

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push({
          text: newTask.value,
          completed: false,
          completedAt: null
        })
        newTask.value = ''
        saveTasks()
      }
    }
    const toggleTask = (index) => {
      const task = tasks.value[index]
      task.completed = !task.completed
      task.completedAt = task.completed ? new Date().toISOString() : null
      saveTasks()
    }
    const removeTask = (index) => {
      tasks.value.splice(index, 1)
      saveTasks()
    }
    loadTasks()
    return { newTask, tasks, hoveredIndex, activeTasks, completedTasks, completionDates, completedOnSelectedDate, todayCompletedCount, selectedDate, formatDate, taskIndex, addTask, toggleTask, removeTask }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #eef3f9;
  color: #1f2937;
}

.app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
}

.todo-card {
  width: min(560px, 100%);
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
  padding: 32px;
}

.todo-card h1 {
  margin: 0 0 8px;
  font-size: 2rem;
  letter-spacing: -0.03em;
}

.subtitle {
  margin: 0 0 24px;
  color: #4b5563;
  line-height: 1.5;
}

.input-row {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
}

.summary-text {
  margin: 0 0 18px;
  color: #4b5563;
  font-size: 0.95rem;
}

input {
  flex: 1;
  min-width: 0;
  width: auto;
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
}

button {
  border: none;
  border-radius: 16px;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #ffffff;
  background: #4f46e5;
  transition: transform 0.15s ease, background 0.15s ease;
}

button:hover:enabled {
  background: #4338ca;
  transform: translateY(-1px);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.completed-section,
.calendar-section {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.completed-section h2,
.calendar-section h2 {
  margin: 0 0 16px;
  font-size: 1.1rem;
  color: #374151;
}

.calendar-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.calendar-day {
  border: 1px solid #d1d5db;
  border-radius: 14px;
  background: #f8fafc;
  color: #1f2937;
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.calendar-day:hover {
  background: #eef2ff;
}

.calendar-day.active {
  background: #4338ca;
  color: #ffffff;
  border-color: #4338ca;
}

.completed-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.completed-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 18px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
}

.completed-actions {
  display: flex;
  gap: 10px;
}

.restore-btn {
  background: #10b981;
  color: #ffffff;
  border-radius: 14px;
  padding: 10px 16px;
}

.restore-btn:hover {
  background: #059669;
}

.task-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 20px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

.task-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.task-text {
  font-size: 1rem;
  color: #111827;
  cursor: pointer;
  display: inline-block;
  flex: 0 1 auto;
  min-width: 0;
  max-width: calc(100% - 120px);
  word-break: break-word;
}

.task-text.completed {
  text-decoration: line-through;
  color: #6b7280;
}

.remove-btn {
  align-self: flex-start;
  padding: 10px 16px;
  background: #ef4444;
  color: white;
  border-radius: 14px;
}

.remove-btn:hover {
  background: #dc2626;
}

.hover-message {
  position: absolute;
  top: calc(100% + 10px);
  left: 20px;
  z-index: 1;
  display: inline-block;
  background: #ffffff;
  border-radius: 16px;
  padding: 10px 14px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  font-size: 0.9rem;
  color: #374151;
  white-space: nowrap;
  opacity: 1;
  pointer-events: none;
}

.empty-state {
  margin: 20px 0 0;
  color: #6b7280;
  text-align: center;
}
</style>
