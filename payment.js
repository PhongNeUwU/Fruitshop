document.getElementById("paymentDetails").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn chặn gửi form mặc định

    const formData = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        cardNumber: document.getElementById("card-number").value,
        expiration: document.getElementById("expiration").value,
        cvv: document.getElementById("cvv").value,
    };

    console.log("Thông tin thanh toán:", formData);

    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
    //  window.location.href = "index.html"; // Quay lại trang chủ
});

// Giả sử giá trị sản phẩm và phí vận chuyển
const productPrice = 200000; // giá trị sản phẩm
const shippingFee = 50000; // phí vận chuyển
const paymentForm = document.getElementById('payment-form');
const totalAmountElement = document.getElementById('total-amount');
const confirmationModal = document.getElementById('confirmation-modal');
const modalContent = document.querySelector('.modal-content'); // Lấy nội dung của modal
const closeModalButton = document.getElementById('close-modal-btn');

// Tính toán tổng tiền
function calculateTotal() {
    const totalAmount = productPrice + shippingFee;
    totalAmountElement.textContent = totalAmount.toLocaleString() + ' VNĐ';
}

// Xử lý sự kiện khi nhấn nút "Thanh toán"
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng form submit mặc định

    // Lấy thông tin từ form
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Kiểm tra xem tất cả các trường có được điền chưa
    if (!fullName || !email || !phone || !address || !paymentMethod) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Thực hiện xử lý thanh toán (ở đây là giả lập)
    setTimeout(function() {
        // Thay đổi thông báo trong modal
        modalContent.innerHTML = `
      <h2>Đã hoàn tất thanh toán!</h2>
      <p>Thanh toán của bạn đã được xử lý thành công.</p>
      <button id="close-modal-btn">Đóng</button>
    `;

        // Hiển thị modal xác nhận thanh toán thành công
        confirmationModal.style.display = 'flex';
    }, 1000); // Giả lập thanh toán sau 1 giây
});

// Đóng modal khi nhấn nút "Đóng"
closeModalButton.addEventListener('click', function() {
    confirmationModal.style.display = 'none';
    // Bạn có thể chuyển hướng hoặc thực hiện các thao tác khác sau khi thanh toán thành công
});

// Tính toán tổng tiền khi tải trang
window.onload = function() {
    calculateTotal();
};