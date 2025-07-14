function showPayment() {
  document.getElementById('reservationForm').style.display = 'none';
  document.getElementById('paymentStep').style.display = 'block';
}
function showWeChat() {
  document.getElementById('paymentStep').style.display = 'none';
  document.getElementById('wechatStep').style.display = 'block';
} 