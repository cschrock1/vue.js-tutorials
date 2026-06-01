<template>
    <p>Your reaction time is: {{ score }} ms</p>
    <p>Your rank is:
      <span class="rank-badge" :class="rankClass">{{ rank }}</span>
    </p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
        }
    },
    computed: {
        rankClass() {
            return {
                ninja: this.rank === 'Ninja',
                pro: this.rank === 'Pro',
                amateur: this.rank === 'Amateur',
                beginner: this.rank === 'Beginner',
            }
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Ninja';
        } else if (this.score < 400) {
            this.rank = 'Pro';
        } else if (this.score < 600) {
            this.rank = 'Amateur';
        } else {
            this.rank = 'Beginner';
        }
    }
}
</script>

<style scoped>
.rank-badge {
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
  color: #fff;
  min-width: 5ch;
  text-align: center;
}
.rank-badge.ninja {
  background: linear-gradient(135deg, #ffd54f, #ff9800);
  color: #2f1a00;
  box-shadow: 0 0 16px rgba(255, 193, 7, 0.35);
}
.rank-badge.pro {
  background: #5c6bc0;
}
.rank-badge.amateur {
  background: #4caf50;
}
.rank-badge.beginner {
  background: #9e9e9e;
}
</style>
