// security.js - מנוע אבטחה מרכזי למרכז להישגים לימודיים
const ADMIN_EMAIL = "aviv@fakiro.co.il";
const ADMIN_PASS = "2391995";

// הזרקת ממשק ההתחברות לכל דף באופן אוטומטי
const injectAuthUI = () => {
    if (document.getElementById('auth-modal')) return;
    const modal = `
    <div id="auth-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:10000; display:none; justify-content:center; align-items:center; font-family:'Heebo', sans-serif; direction:rtl;">
        <div style="background:white; padding:35px; border-radius:25px; width:320px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.2);">
            <h2 id="auth-title" style="margin-top:0; color:#0f172a;">כניסה למערכת</h2>
            <input type="email" id="auth-email" placeholder="אימייל" style="width:100%; padding:12px; margin:10px 0; border:1px solid #ddd; border-radius:10px; box-sizing:border-box;">
            <input type="password" id="auth-pass" placeholder="סיסמה" style="width:100%; padding:12px; margin:10px 0; border:1px solid #ddd; border-radius:10px; box-sizing:border-box;">
            <div id="reg-fields" style="display:none">
                <input type="text" id="auth-kids" placeholder="שמות הילדים" style="width:100%; padding:12px; margin:10px 0; border:1px solid #ddd; border-radius:10px; box-sizing:border-box;">
            </div>
            <button onclick="submitAuth()" style="width:100%; padding:14px; background:#0f172a; color:white; border:none; border-radius:10px; cursor:pointer; font-weight:bold; font-size:1rem; margin-top:10px;">המשך</button>
            <p id="auth-toggle" onclick="toggleMode()" style="cursor:pointer; color:#b09151; margin-top:15px; font-weight:500;">אין לך חשבון? הירשם כאן</p>
            <button onclick="closeAuthModal()" style="background:none; border:none; color:#94a3b8; margin-top:10px; cursor:pointer;">ביטול</button>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modal);
};

let loginMode = true;
window.toggleMode = () => {
    loginMode = !loginMode;
    document.getElementById('auth-title').innerText = loginMode ? "כניסה למערכת" : "הרשמה למערכת";
    document.getElementById('reg-fields').style.display = loginMode ? "none" : "block";
    document.getElementById('auth-toggle').innerText = loginMode ? "אין לך חשבון? הירשם כאן" : "כבר רשום? התחבר";
};

window.openAuthModal = () => document.getElementById('auth-modal').style.display = 'flex';
window.closeAuthModal = () => document.getElementById('auth-modal').style.display = 'none';

window.submitAuth = () => {
    const email = document.getElementById('auth-email').value.trim();
    const pass = document.getElementById('auth-pass').value;

    if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
        sessionStorage.setItem('isAdmin', 'true');
        window.location.href = 'admin.html';
        return;
    }

    const users = JSON.parse(localStorage.getItem('edu_users') || '{}');
    if (loginMode) {
        if (users[email] && users[email].pass === pass) {
            sessionStorage.setItem('currUser', users[email].name);
            location.href = 'index.html';
        } else { alert("פרטי התחברות שגויים"); }
    } else {
        const name = document.getElementById('auth-kids').value;
        if(!name || !email || !pass) return alert("נא למלא את כל השדות");
        users[email] = { pass, name };
        localStorage.setItem('edu_users', JSON.stringify(users));
        sessionStorage.setItem('currUser', name);
        location.href = 'index.html';
    }
};

document.addEventListener('DOMContentLoaded', injectAuthUI);