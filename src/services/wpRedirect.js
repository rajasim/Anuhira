// redirectToWhatsApp.js
export const redirectToWhatsApp = (
  phoneNumber = "9822341010",
  message = "Hello !"
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = url;
};
