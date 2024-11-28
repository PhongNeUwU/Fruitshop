let cart = JSON.parse(localStorage.getItem('cart')) || []; // Lấy giỏ hàng từ Local Storage hoặc khởi tạo rỗng

// Hàm hiển thị sản phẩm trong giỏ hàng
function displayCartItems() {
    let cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = ''; // Xóa danh sách cũ

    let total = 0;

    // Thêm từng sản phẩm vào giỏ hàng
    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.name} - ${item.price}đ</span>
            <button onclick="removeItemFromCart('${item.id}')">Xóa</button>
        `;
        cartItemsList.appendChild(itemDiv);
        total += item.price;
    });

    // Cập nhật tổng tiền
    let totalElement = document.getElementById('cart-total');
    totalElement.innerHTML = `Tổng tiền: ${total}đ`;

    // Hiển thị số lượng sản phẩm trong giỏ hàng
    document.getElementById('cart-count').innerText = cart.length;
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItemFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu lại giỏ hàng đã cập nhật
    displayCartItems(); // Cập nhật lại giỏ hàng
}

// Hàm xử lý thanh toán
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Mở modal xác nhận thanh toán
    document.getElementById('confirmation-modal').style.display = 'flex';

    // Xóa giỏ hàng sau khi thanh toán thành công
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng rỗng vào Local Storage
    displayCartItems(); // Cập nhật giỏ hàng
});

// Đóng modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    document.getElementById('confirmation-modal').style.display = 'none';
});

// Hiển thị giỏ hàng ngay khi trang được tải
displayCartItems();