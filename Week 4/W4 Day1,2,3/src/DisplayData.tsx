interface User {
    name?: string
    age?: number
    email?: string
    address?: string
}

function DisplayData(props: User) {
    return (
        <>
            <table >
                <tbody className="border-2  flex gap-4 my-4 mx-10 h-48 w-11/12 md:h-16 py-4 px-4 flex-col md:flex-row border-orange-500" >
                <tr>
                    <td><strong>Name:</strong></td>
                    <td><p>{props.name}</p></td>
                </tr>
                <tr>
                    <td><strong>Age:</strong></td>
                    <td><p>{props.age}</p></td>
                </tr>
                <tr>
                    <td><strong>Email:</strong></td>
                    <td><p>{props.email}</p></td>
                </tr>
                <tr>
                    <td><strong>Address:</strong></td>
                    <td><p>{props.address}</p></td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default DisplayData;