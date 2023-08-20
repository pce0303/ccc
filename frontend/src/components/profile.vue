<template>
  <div class="profile-content">
    <input class="file-select" type="file" @change="handleFileUpload">
    <button class="upload" @click="uploadImage">Upload</button>

    <button class="cancel" @click="goToHome">취소</button>
    <button class="submit" @click="goToHome">저장</button>
    <div v-if="uploading">Uploading...</div>
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="uploaded-image"/>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedFile: null,
      imageUrl: '',
      uploading: false,
      error: ''
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/Home')
    },
    handleFileUpload (event) {
      this.selectedFile = event.target.files[0]
    },
    async uploadImage () {
      if (!this.selectedFile) {
        return
      }

      this.uploading = true
      this.error = ''

      const formData = new FormData()
      formData.append('image', this.selectedFile)

      try {
        const response = await fetch('/profile', {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`Image upload failed: ${errorText}`)
        }

        this.imageUrl = URL.createObjectURL(this.selectedFile)
      } catch (error) {
        this.error = error.message
      } finally {
        this.uploading = false
      }
    }
  }
}
</script>

<style>
    .profile-content {
      background-color: rgb(255, 155, 210);
      position: absolute;
      top: 30px;
      left: 380px;
      width: 1000px;
      height: 550px;
      border-radius: 20px;
      margin: 100px auto;
      padding: 20px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .file-select {
      background-color: #D9D9D9;
      opacity: 0.7;
      font-family: Inter, sans-serif;
      font-weight: 700;
      font-size: 30px;
      max-width: 230px;
      height: 30px;
      width: 100%;
      padding: 100px;
      border: none;
      border-radius: 12px;
      outline: none;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: 0px 0px 20px -18px rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
    }

    .file-select:hover {
      box-shadow: 0px 0px 20px -17px rgba(0, 0, 0, 0.2);
    }

    .file-select:active {
      transform: scale(0.95);
    }

    .file-select:focus {
      box-shadow: 0px 0px 20px -17px rgba(0, 0, 0, 0.2);
      border: 2px solid grey;
    }

    .upload {
      background-color: #ffb2da;
      color: white;
      border: none;
      padding: 30px 100px;
      border-radius: 30px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      position: relative;
      top: 200px;
      right: -60px;
    }

    .upload:hover {
      background-color: #ffbaff;
    }

    .uploading-message {
      margin-top: 10px;
      font-weight: bold;
    }

    .uploaded-image {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin-top: 10px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    .uploaded-image {
      background-color: white;
      width: 350px;
      height: 350px;
      position: relative;
      right: 300px;
      bottom: 70px;
      border-radius: 50%;
      margin-top: 10px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    .cancel {
      position: absolute;
      bottom: 30px;
      right: 30px;
      height: 40px;
      width:100px;
      border-radius: 10px;
    }

    .cancel:hover, .submit:hover {
      cursor: pointer;
      background-color: #ffc8ee;
    }

    .submit {
      position: absolute;
      bottom: 30px;
      right: 150px;
      height: 40px;
      width: 100px;
      border-radius: 10px;
    }
</style>
