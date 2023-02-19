function convertFileToBase64(file: any) {
    return new Promise((resolve, reject) => { 
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

export default convertFileToBase64