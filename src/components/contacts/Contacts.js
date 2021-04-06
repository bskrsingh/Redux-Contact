import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';

const Conatcts = () => {
    const contacts = useSelector((state) => state.contact.contacts)
    console.log(contacts);
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => {
                            return (
                               <Contact contact = {contact} key={contact.id}/>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Conatcts