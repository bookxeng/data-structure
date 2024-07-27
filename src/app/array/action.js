'use server'



export async function submitForm(formData){
    data = formData.get('array').split(',')
    console.log(data)
    for(let i = 0 ; i < data.length ; i++){
        console.log(data[i])
    }
    return(
        data
    )
}