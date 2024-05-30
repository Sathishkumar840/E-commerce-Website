const url = `https://api.cloudinary.com/v1_1/doxnjncpp/image/upload`

console.log(import.meta.VITE_REACT_APP_CLOUD_NAME_CLOUDINARY)
const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","mern_products")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadImage 