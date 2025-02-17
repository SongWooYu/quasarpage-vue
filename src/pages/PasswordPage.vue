<template>
    <q-page class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Password</div>
        </q-card-section>
  
        <q-card-section>
          <q-input filled v-model="password" type="password" label="Password" />
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn color="primary" @click="checkPassword">Sign in</q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'PasswordPage',
    data() {
      return {
        password: ''
      };
    },
    methods: {
      checkPassword() {
        // Define your actual password here
        const correctPassword = '010';
  
        if (this.password === correctPassword) {
          this.$router.push('/dysetting');
        } else {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Incorrect password',
            icon: 'warning'
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>