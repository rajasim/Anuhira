// redirectToWhatsApp.js
export const redirectToWhatsApp = (
  phoneNumber = "919876543210",
  message = "Hello !"
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = url;
};
