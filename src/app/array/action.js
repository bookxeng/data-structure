'use server'

export async function submitForm(formData){
    const data = formData.get('array').split(',')
    console.log(data)
}