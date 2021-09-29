<template>
  <div class="login">
    <h1>LOGIN</h1>
    <el-card>
      <el-form label-position="right" :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.user.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formData.user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.user.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        user: {
          username: '',
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    async register () {
      await this.$http.post('/users', this.formData)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.message)
        })
      // console.log('register')
    },
    async login () {
      const loginData = {
        user: {
          email: this.formData.user.email,
          password: this.formData.user.password
        }
      }
      console.log(loginData)
      const { data: resLogin } = await this.$http.post('/users/login', loginData)
      console.log(resLogin)
      console.log('login')
    }

  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 100px;
  font-family: 华文新魏;
}

.el-card {
  width: 400px;
  padding: 0px 40px;
}
</style>
