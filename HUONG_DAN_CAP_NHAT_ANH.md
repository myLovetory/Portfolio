# Hướng dẫn cập nhật ảnh cho portfolio

## Lưu ảnh

- Lưu ảnh trực tiếp trong thư mục `assets/` của dự án. Không dùng đường dẫn máy cá nhân như `C:\Users\...`.
- Dùng đường dẫn tương đối từ `index.html` hoặc `script.js`, ví dụ: `assets/avatar-linh.webp`.
- Nên dùng WebP hoặc JPG cho ảnh chụp; PNG phù hợp với ảnh cần nền trong suốt. Tên file nên viết thường, không dấu, không khoảng trắng.
- Giữ ảnh gốc ở độ phân giải đủ lớn; ảnh thumbnail sẽ được cắt vừa khung bằng `object-fit: cover`.

## 1. Ảnh đại diện ở phần đầu trang

1. Chép ảnh vào `assets/`, ví dụ `assets/avatar-linh.webp`.
2. Trong `index.html`, tìm `class="avatar-placeholder"` ở phần `id="home"`.
3. Giữ khung `avatar-placeholder`, thay phần chữ bên trong bằng thẻ ảnh:

```html
<div class="avatar-placeholder">
  <img class="avatar-image" src="assets/avatar-linh.webp" alt="Ảnh đại diện Nguyễn Giang Linh">
</div>
```

`avatar-image` đã có CSS để ảnh lấp đầy khung và tự cắt gọn. Viết mô tả ngắn, chính xác trong `alt`.

## 2. Ảnh thumbnail cho từng dự án

Các thumbnail nằm trong `index.html`, bên trong từng `article.project-card`. Thay nội dung của khung `project-placeholder` tương ứng bằng thẻ ảnh; giữ nguyên thẻ `article`, các thuộc tính `data-category` / `data-project` và nút chi tiết để bộ lọc và popup tiếp tục hoạt động.

| Dự án | Tên file gợi ý | Vị trí |
| --- | --- | --- |
| 100+ Game Thử Thách & Thư Giãn | `assets/project-casual.webp` | Dự án 1, `data-project="casual"` |
| Thiếu Niên 3Q – Khởi Nguyên | `assets/project-3q.webp` | Dự án 2, `data-project="strategy"` |
| PTIT Handbook | `assets/project-ptit-handbook.webp` | Dự án 3, `data-project="academic"` |
| Exam Bank Management System | `assets/project-exam-bank.webp` | Dự án 4, `data-project="students"` |
| Employee Management Website | `assets/project-employee-management.webp` | Dự án 5, `data-project="employees"` |

Dùng mẫu này bên trong khung dự án cần cập nhật (đổi đường dẫn và nội dung `alt`):

```html
<div class="project-placeholder">
  <img class="project-image" src="assets/project-exam-bank.webp" alt="Ảnh giao diện Exam Bank Management System">
  <i class="corner corner-a"></i>
  <i class="corner corner-b"></i>
</div>
```

Giữ class `project-placeholder` ở khung ngoài để giữ kích thước thumbnail. Ảnh dùng class `project-image` để lấp khung và cắt theo tỉ lệ hiện tại. Nếu muốn thay ảnh Employee Management Website, dùng đường dẫn tương ứng với dự án thứ 5.

## 3. Ảnh trong popup chi tiết dự án

Popup được dựng trong `script.js` tại đoạn `missionContent.innerHTML`. Khung ảnh hiện tại có class `mission-image-slot`; các nhãn thu nhỏ nằm trong `mission-thumbs`.

Để dùng một ảnh chung trong popup, thay nội dung `mission-image-slot` bằng:

```html
<div class="mission-image-slot">
  <img src="assets/project-exam-bank-detail-01.webp" alt="Màn hình chính của Exam Bank Management System">
</div>
```

Thêm kiểu ảnh sau vào cuối `portfolio-hud.css` để ảnh vừa khung popup:

```css
.mission-image-slot img {
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
}

@media (max-width: 640px) {
  .mission-image-slot img {
    height: 170px;
  }
}
```

Để mỗi popup dùng ảnh riêng:

1. Thêm thuộc tính ảnh vào đúng mục trong object `projectBriefings` (ví dụ `image: 'assets/project-exam-bank-detail-01.webp'`).
2. Trong template `missionContent.innerHTML`, thay nội dung của `mission-image-slot` bằng đoạn điều kiện sau để hiện ảnh khi đã khai báo và giữ placeholder nếu chưa có:

```js
<div class="mission-image-slot">
  ${project.image
    ? `<img src="${project.image}" alt="${project.title}">`
    : '<span>GAMEPLAY VISUAL SLOT</span><b>IMAGE / SCREENSHOTS TO BE ADDED</b>'}
</div>
```

3. Đặt ảnh và mô tả `alt` tương ứng trong từng mục dự án. Có thể thêm ảnh phụ trong `mission-thumbs` theo cùng cách.

Nếu chưa có ảnh, giữ placeholder hiện tại. Đường dẫn thiếu hoặc sai sẽ làm ảnh không hiển thị.

## 4. Kiểm tra sau khi thay ảnh

- Kiểm tra tên file và chữ hoa / chữ thường trong đường dẫn khớp chính xác với file ở `assets/`.
- Mở trang ở desktop, tablet và mobile để kiểm tra ảnh không bị méo, che chữ hoặc tràn khung.
- Nếu ảnh chính cần giữ trọn nội dung thay vì cắt, đổi `object-fit: cover` thành `object-fit: contain` cho ảnh đó trong CSS.
