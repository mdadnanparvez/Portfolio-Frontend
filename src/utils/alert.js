import Swal from "sweetalert2";

const baseToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2400,
  timerProgressBar: true,
  background: "#0f172a",
  color: "#ffffff",
  customClass: {
    popup: "rounded-2xl shadow-2xl",
  },
});

export const showSuccess = (title) => {
  baseToast.fire({
    icon: "success",
    title,
  });
};

export const showError = (title) => {
  baseToast.fire({
    icon: "error",
    title,
  });
};

export const showInfo = (title) => {
  baseToast.fire({
    icon: "info",
    title,
  });
};

export const confirmDelete = async (
  text = "You will not be able to undo this."
) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    background: "#0f172a",
    color: "#ffffff",
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#334155",
    customClass: {
      popup: "rounded-3xl",
      confirmButton: "rounded-xl",
      cancelButton: "rounded-xl",
    },
  });

  return result.isConfirmed;
};