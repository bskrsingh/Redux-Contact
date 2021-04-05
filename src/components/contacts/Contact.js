import React from 'react';
import Avatar from 'react-avatar';

const Contact = ({contact}) => {
    const {name,email,phone} = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar className="mr-2" name={name} size="45" round={true}/>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <a href="#" className="mr-2">
                <i class="fa fa-edit"></i>
                </a>
                <a href="#">
                <i class="fa fa-trash"></i>
                </a>
            </td>
        </tr>
    )
}

export default Contact;