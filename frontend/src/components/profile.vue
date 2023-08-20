<template>
    <div>
        <input type="file"  @change="handleFileUpload">
        <button @click="uploadImage">Upload</button>

        <img :src="imageUrl" alt="Uploaded Image" />
    </div>
</template>
<script>
export default {
  data () {
    return {
      selectedFile: null,
      imageUrl: ''
    }
  },
  methods: {
    handleFileUpload (event) {
      this.selectedFile = event.target.files[0]
    },
    async uploadImage () {
      const formData = new FormData()
      formData.append('image', this.selectedFile)
      try {
        const response = await fetch('/profile', {
          method: 'POST',
          body: formData
        })
        if (!response.ok) {
          throw new Error('Image upload failed')
        }
        const data = await response.json()
        this.imageUrl = data.imageUrl
      } catch (error) {
        console.error('Image upload error:', error.message)
      }
    }
  }
}
</script>
