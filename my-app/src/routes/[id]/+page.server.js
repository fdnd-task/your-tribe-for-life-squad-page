export async function load({url, params}) {
    const studentResponse = await fetch('https://fdnd.directus.app/items/person/'+params.id)
    // console.log(memberResponse)
    const studentResponseData = await studentResponse.json()
    // console.log(memberResponse)
    // console.log(studentResponseData.data)
    return { student: studentResponseData.data }
}