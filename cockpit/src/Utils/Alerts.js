import Swal from "sweetalert2";

export const alert = (title, text) => {
  return Swal({
    title: title,
    text: text,
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Speichern",
    cancelButtonText: "Zurück"
  });
};

export default alert;
