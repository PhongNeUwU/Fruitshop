// script.js
function showDetails(productName) {
    document.getElementById('product-details').classList.remove('hidden');
    document.getElementById('product-detail-info').innerText = `Chi tiết về sản phẩm: ${productName}`;
}

function showSource(productName) {
    document.getElementById('product-source').classList.remove('hidden');
    document.getElementById('product-source-info').innerText = `Nguồn gốc của sản phẩm: ${productName}`;
}

function showPaymentForm() {
    document.getElementById('payment-form').classList.remove('hidden');
    document.getElementById('order-history').classList.add('hidden');
}

function showOrderHistory() {
    document.getElementById('order-history').classList.remove('hidden');
    document.getElementById('payment-form').classList.add('hidden');
}
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị của các trường
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvv = document.getElementById('card-cvv').value;

    // Kiểm tra thông tin hợp lệ (ví dụ, có thể thực hiện kiểm tra định dạng)
    if (cardNumber.length === 16 && cardExpiry.match(/\d{2}\/\d{2}/) && cardCvv.length === 3) {
        alert("Thanh toán thành công!");
    } else {
        alert("Thông tin thanh toán không hợp lệ. Vui lòng kiểm tra lại.");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Lấy form và các input
    const form = document.querySelector('form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    // Lắng nghe sự kiện submit của form
    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = '';

        // Kiểm tra email
        const emailValue = emailInput.value.trim();
        if (!emailValue || !validateEmail(emailValue)) {
            isValid = false;
            errorMessage += 'Email không hợp lệ. Vui lòng nhập lại.\n';
        }

        // Kiểm tra mật khẩu
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 6) {
            isValid = false;
            errorMessage += 'Mật khẩu phải có ít nhất 6 ký tự.\n';
        }

        // Nếu có lỗi, hiển thị thông báo và ngừng gửi form
        if (!isValid) {
            event.preventDefault(); // Ngừng gửi form
            alert(errorMessage); // Hiển thị thông báo lỗi
        }
    });

    // Hàm kiểm tra email hợp lệ
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Lấy form và các input
    const form = document.querySelector('form');
    const nameInput = document.getElementById('register-name');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('register-confirm-password');

    // Lắng nghe sự kiện submit của form
    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = '';

        // Kiểm tra tên
        const nameValue = nameInput.value.trim();
        if (!nameValue) {
            isValid = false;
            errorMessage += 'Họ và tên không được để trống.\n';
        }

        // Kiểm tra email
        const emailValue = emailInput.value.trim();
        if (!emailValue || !validateEmail(emailValue)) {
            isValid = false;
            errorMessage += 'Email không hợp lệ. Vui lòng nhập lại.\n';
        }

        // Kiểm tra mật khẩu
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 6) {
            isValid = false;
            errorMessage += 'Mật khẩu phải có ít nhất 6 ký tự.\n';
        }

        // Kiểm tra xác nhận mật khẩu
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (passwordValue !== confirmPasswordValue) {
            isValid = false;
            errorMessage += 'Mật khẩu xác nhận không khớp.\n';
        }

        // Nếu có lỗi, hiển thị thông báo và ngừng gửi form
        if (!isValid) {
            event.preventDefault(); // Ngừng gửi form
            alert(errorMessage); // Hiển thị thông báo lỗi
        }
    });

    // Hàm kiểm tra email hợp lệ
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});