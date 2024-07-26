import React from 'react'

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from 'react-hot-toast';

const Modelsection = () => {

    const [openModal, setOpenModal] = useState(false);
    const [order, setorder] = useState({Fullname:"",Fulladd:"",Pin:"",Phone:""});
  
    function onCloseModal() {
      setOpenModal(false);
      setorder("");
      
    }

    const handlechange=(e)=>{
      setorder({...order,[e.target.name]:e.target.value})
      console.log(order)
    }

    const handleorder=(e)=>{
e.preventDefault();
if(!order.Fullname|| !order.Fulladd|| !order.Pin|| !order.Phone){
 return  toast.error("All Fiels Are Required")
}else{
  
 toast.success("Order Successfully")
 onCloseModal()
}
    }
  return (
    <div>
         <Button onClick={() => setOpenModal(true)} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full">CheckOut</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
           
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Fullname" value="Your Full Name" />
              </div>
              <TextInput
                id="Fullname"
              
                value={order.Fullname}
               onChange={handlechange} name='Fullname'
                required
              />
            </div>
           
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your Full Address" />
              </div>
              <TextInput  type="text" required onChange={handlechange} value={order.Fulladd} name='Fulladd'/>
            </div>
            <div>

            <div className="mb-2 block">
                <Label htmlFor="email" value="Your PinCoad" />
              </div>
              <TextInput
              name='Pin'
              
                value={order.Pin}
                onChange={handlechange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Phoner Number" />
              </div>
              <TextInput
                
              name='Phone'
                value={order.Phone}
                onChange={handlechange}
                required
              />
            </div>
            
            <div className="w-full flex justify-center">
              <Button onClick={handleorder}>Order Now</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Modelsection