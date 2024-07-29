function showForm(type) {
    document.getElementById('form-container').innerHTML = `
        <form id="user-form">
            <h2>ملء المعلومات</h2>
            <label>الاسم:</label>
            <input type="text" name="name" required><br><br>
            <label>العمر:</label>
            <input type="number" name="age" required><br><br>
            <label>الجنس:</label>
            <select name="gender">
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
            </select><br><br>
            <label>الطول (سم):</label>
            <input type="number" name="height" required><br><br>
            <label>الوزن (كجم):</label>
            <input type="number" name="weight" required><br><br>
            <label>البريد الإلكتروني:</label>
            <input type="email" name="email" required><br><br>
            <button type="button" onclick="submitForm()">إرسال</button>
        </form>
    `;
    document.getElementById('form-container').style.display = 'block';
}

function submitForm() {
    const form = document.getElementById('user-form');
    if (form.checkValidity()) {
        form.innerHTML = `
            <h2>الرسوم المطلوبة:</h2>
            <p>الرسوم ستكون 50 دولارًا. يرجى الدفع عبر التحويل البنكي.</p>
            <p><a href="https://example.com/payment" class="button">الدفع الآن</a></p>
            <p>شكراً لك! سيتم إرسال الجدول إلى بريدك الإلكتروني.</p>
        `;
    }
}
