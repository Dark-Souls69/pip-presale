function copyAddress() {
  const addressText = document.getElementById("contract-address").innerText;
  navigator.clipboard.writeText(addressText)
    .then(() => alert("Contract address copied!"))
    .catch(() => alert("Failed to copy address."));
}