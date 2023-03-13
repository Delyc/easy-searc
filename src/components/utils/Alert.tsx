import Swal from "sweetalert2";

const alerts = () => {
    return   Swal.fire({  
        title: 'Your document declared successfully',  
        text: 'You will be notified on your email when your document is found.',
        icon: 'success',
      }); 

    }
export default alerts

