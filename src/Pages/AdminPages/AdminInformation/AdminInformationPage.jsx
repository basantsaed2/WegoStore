import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Context/Auth';
import Loading from '../../../Components/Loading';
import axios from 'axios';
import {ButtonAdd} from '../../../Components/Button'
import { Link } from 'react-router-dom';
import {Wroning,DeleteIcon,EditIcon} from '../../../Components/Icons/AllIcons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { MdCheck } from "react-icons/md";

const AdminInformationPage = () => {

    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [contacts, setContacts] = useState('');
    const [contactChanged, setContactChanged] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [openDialog, setOpenDialog] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
               const response = await axios.get(' https://login.wegostores.com/admin/v1/contact_us', {
                      headers: {
                             Authorization: `Bearer ${auth.user.token}`,
                      },
               });
               if (response.status === 200) {
                      console.log(response.data)
                      setContacts(response.data.data)
               }
        } catch (error) {
               console.error('Error fetching data:', error);
        } finally {
               setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, [contactChanged]);

    const handleOpenDialog = (contactId) => {
       setOpenDialog(contactId);
       };

    const handleCloseDialog = () => {
            setOpenDialog(null);
    };

       const handleDelete = async (contactId) => {
              setIsDeleting(true);
              const success = await deleteContact(contactId, auth.user.token);
              setIsDeleting(false);
              handleCloseDialog();

              if (success) {
                     setContactChanged(!contactChanged)
                     auth.toastSuccess('Contacte Information deleted successfully!');
                     setContacts((prevContact) =>
                        prevContact.filter((contact) => contact.id !== contactId)
                     );
              } else {
                     auth.toastError('Failed to delete Contacte Information.');
              }
       };

       const deleteContact = async (contactId, authToken) => {
              try {
                const response = await axios.delete(` https://login.wegostores.com/admin/v1/contact_us/delete/${contactId}`, {
                        headers: {
                                   Authorization: `Bearer ${authToken}`,
                            },
                     });

                     if (response.status === 200) {
                            console.log('Contacte Information deleted successfully');
                            return true;
                     } else {
                            console.error('Failed to delete Contacte Information:', response.status, response.statusText);
                            return false;
                     }
              } catch (error) {
                     console.error('Error deleting Contacte Information:', error);
                     return false;
              }
       };


    if (isLoading) {
        return (
          <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
            <Loading />
          </div>
        );
    }    
      
    if (!contacts) {
        return (
        <>
         <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Contact Information data available</div>
         <div className='w-2/6 lg:w-1/6'>
         <Link to={'add'}>
                <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
         </Link>
         </div>
         </>
        );
    }
       return (
              <>
              <div className='w-full flex flex-col gap-10'>
                     <div className='w-2/6 lg:w-1/6'>
                     <Link to={'add'}>
                            <ButtonAdd isWidth="true" BgColor ="mainColor" Color="white" iconColor="white"/>
                     </Link>
                     </div>
                     <div className="w-full flex items-center justify-between mt-4 overflow-x-auto">
                <table className="w-full sm:min-w-0">
                    <thead className="w-full">
                        <tr className="w-full border-b-2">
                            <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">#</th>
                            <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Email</th>
                            <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Phone</th>
                            <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">WhatsApp</th>
                            <th className="min-w-[100px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                            {contacts.map((contact, index) => (
                                <tr className="w-full border-b-2" key={contact.id}>
                                        <td
                                                className="min-w-[80px] sm:min-w-[50px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                        >
                                                {index + 1}
                                        </td>
                                        <td
                                                className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                        >
                                                {contact?.email || '-'}
                                        </td>
                                        <td
                                                className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                        >
                                                {contact?.phone || '-'}
                                        </td>
                                        <td
                                                className="min-w-[150px] sm:min-w-[100px] sm:w-2/12 lg:w-2/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                        >
                                                {contact?.watts_app || '-'}
                                        </td>

                                        <td
                                                className="min-w-[100px] sm:min-w-[80px] sm:w-1/12 lg:w-1/12 py-2 text-center text-thirdColor text-sm sm:text-base lg:text-lg xl:text-xl overflow-hidden"
                                        >
                                                <div className="flex items-center justify-center gap-x-3">
                                                <Link to={`edit/${contact.id}`} state={contact.id} type="button">
                                                        <EditIcon />
                                                </Link>
                                                <button type="button" onClick={() => handleOpenDialog(contact.id)}>
                                                        <DeleteIcon />
                                                </button>
                                                {openDialog === contact.id && (
                                                        <Dialog open={true} onClose={handleCloseDialog} className="relative z-10">
                                                                <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
                                                                                <div className="flex flex-col items-center justify-center bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                                                        <Wroning Width='28' Height='28' aria-hidden="true" />
                                                                                        <div className="flex items-center">
                                                                                                <div className="mt-2 text-center">
                                                                                                        <DialogTitle as="h3" className="text-xl font-semibold leading-10 text-gray-900">
                                                                                                                You will delete contact information id {contact.id|| "null"}
                                                                                                        </DialogTitle>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                                        <button
                                                                                                type="button"
                                                                                                onClick={() => handleDelete(contact.id)}
                                                                                                disabled={isDeleting}
                                                                                                className="inline-flex w-full justify-center rounded-md bg-mainColor px-6 py-3 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                                                                                        >
                                                                                                {isDeleting ? <div className="flex w-10 h-5"><Loading /></div> : 'Delete'}
                                                                                        </button>
                                                                                        <button
                                                                                                type="button"
                                                                                                data-autofocus
                                                                                                onClick={handleCloseDialog}
                                                                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                                                                                        >
                                                                                                Cancel
                                                                                        </button>
                                                                                </div>
                                                                                </DialogPanel>
                                                                        </div>
                                                                </div>
                                                        </Dialog>
                                                )}
                                                    
                                                </div>
                                        </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
              </div>
              </>
       )
}

export default AdminInformationPage
