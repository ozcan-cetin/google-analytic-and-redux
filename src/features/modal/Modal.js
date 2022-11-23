import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from './modalSlice'

const Modal = () => {
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch()
    

  return (
    <div>
        {isOpen &&  <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, repellendus corporis. Animi velit quod sunt eaque illo quaerat veniam facilis nam reiciendis ipsa libero reprehenderit fugit delectus, nobis corrupti qui quos, maiores non eos consectetur? Similique maiores vitae quisquam minus nostrum soluta quo, commodi, itaque neque provident aliquam! Quaerat nesciunt placeat aut consectetur repellat nostrum, modi error magni earum sit animi alias nisi fugiat distinctio excepturi odio facere ut suscipit voluptatibus hic deleniti? Provident asperiores incidunt consequuntur saepe ratione dicta error cupiditate totam pariatur facere numquam dignissimos, labore dolor. Amet corporis, sed perspiciatis quas modi fuga? Debitis quis vel illo.</p>}
        </div>
  )
}

export default Modal