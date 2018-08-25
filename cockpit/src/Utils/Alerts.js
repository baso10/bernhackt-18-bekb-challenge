import Swal from 'sweetalert2';

export const orderInput = (product, title, text) => {
return Swal({
    title: title + product.name,
    text: text,
    input:'text',
    showCancelButton: true,
    confirmButtonText: 'Hinzufügen',
    cancelButtonText: 'Abbrechen'
  })
}


export default orderInput;