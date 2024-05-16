$(`#icon_saludo`).click(() => {
  Swal.fire({
    title: "<strong>Hey!</strong>",
    icon: "success",
    text: "Gracias por pasarte por aquí!",
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonText: `
      <a href="mailto:nazarenosusunday@gmail.com" class="swal2-styled swal2-confirm">Contactame!</a>
    `
  });
})
