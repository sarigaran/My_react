import React, { useState } from 'react'

function Crud() {
    const list = [
        {
            id: '1',
            name: 'Dora',
            number: '1234567891'
        },
        {
            id: '2',
            name: 'Pujee',
            number: '1268947891'
        },
    ];
    const [lists, setLists] = useState(list)
    return (
        <div className='crud'>
            <div>
                <AddList/>
            <table>
                {
                    lists.map((current) => (
                        <tr>
                            <td>{current.id}</td>
                            <td>{current.name}</td>
                            <td>{current.number}</td>
                            <td>
                                <button className='btn btn-outline-primary'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>

                    ))
                }
            </table>
            </div>
        </div>
    )
}

function AddList(){
  return (
    <div>
<input type='number' name='id' placeholder='enter the id'/>
<input type='text' name='name' placeholder='enter the name'/>
<input type='number' name='number' placeholder='enter the number'/>
<button className='btn btn-outline-success' type='submit'>Add</button>
<button className='btn btn-outline-danger' type='reset'>Cancel</button>
    </div>
  )
}


export default Crud;