import { Modal } from '@mantine/core'
import React from 'react'

const BookingModal = ({opened , setOpened , mail , PropertyId}) => {
  return (
    <Modal
    opened = {opened}
       setOpened = {setOpened}
       title ="Select your data is visit"
       centered>
       <div>
        <span>this is booking modalOpened</span>
       
       </div>
       
       
    </Modal>
  )
}

export default BookingModal