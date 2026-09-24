const tools = [
  ["ضغط الصور","🖼️","صور","تقليل حجم الصور","image"],
  ["تحويل الصور","🔄","صور","تحويل صيغة الصورة","image"],
  ["معلومات الصورة","📐","صور","عرض معلومات الصورة","imageInfo"],
  ["قص الصورة","✂️","صور","قص وتعديل الصور","image"],
  ["PDF إلى نص","📄","PDF","استخراج النص من PDF","file"],
  ["دمج PDF","📚","PDF","دمج ملفات PDF","file"],
  ["ضغط PDF","🗜️","PDF","تقليل حجم PDF","file"],
  ["PDF إلى صور","🖼️","PDF","تحويل PDF إلى صور","file"],
  ["عداد الكلمات","🔢","نصوص","حساب الكلمات والحروف","counter"],
  ["عكس النص","↔️","نصوص","عكس النص","reverse"],
  ["أحرف كبيرة","🔠","نصوص","تحويل النص إلى أحرف كبيرة","upper"],
  ["أحرف صغيرة","🔡","نصوص","تحويل النص إلى أحرف صغيرة","lower"],
  ["تنظيف النص","🧹","نصوص","تنظيف المسافات","clean"],
  ["ترتيب النص","📋","نصوص","ترتيب السطور","sort"],
  ["Lorem Ipsum","📝","نصوص","إنشاء نص تجريبي","lorem"],
  ["JSON Formatter","🧩","مطورين","تنسيق JSON","json"],
  ["Base64 Encode","🔐","مطورين","تشفير Base64","base64e"],
  ["Base64 Decode","🔓","مطورين","فك Base64","base64d"],
  ["URL Encode","🌐","مطورين","ترميز الرابط","urle"],
  ["URL Decode","🔗","مطورين","فك ترميز الرابط","urld"],
  ["UUID Generator","🆔","مطورين","إنشاء UUID","uuid"],
  ["Regex Tester","🔎","مطورين","اختبار Regex","regex"],
  ["مولد HTML","🌐","مطورين","إنشاء HTML","html"],
  ["مولد CSS","🎨","مطورين","إنشاء CSS","css"],
  ["مولد JavaScript","⚡","مطورين","إنشاء JavaScript","js"],
  ["مولد باسورد","🔑","أمان","إنشاء كلمة مرور","password"],
  ["رقم عشوائي","🎲","أدوات","إنشاء رقم عشوائي","random"],
  ["اختيار عشوائي","🎯","أدوات","اختيار عنصر عشوائي","choice"],
  ["آلة حاسبة","🧮","حسابات","آلة حاسبة","calculator"],
  ["النسبة المئوية","📊","حسابات","حساب النسبة","percent"],
  ["حساب العمر","🎂","حسابات","حساب العمر","age"],
  ["فرق التاريخ","📅","حسابات","حساب الفرق بين تاريخين","datediff"],
  ["تحويل الوحدات","📏","حسابات","تحويل الوحدات","units"],
  ["QR Code","▣","QR","إنشاء QR Code","qr"],
  ["WiFi QR","📶","QR","إنشاء QR للشبكة","wifi"],
  ["Contact QR","👤","QR","إنشاء QR لجهة اتصال","contact"],
  ["معلومات الملف","📁","ملفات","معلومات الملف","fileInfo"],
  ["مؤقت","⏱️","أدوات","مؤقت عد تنازلي","timer"],
  ["ساعة إيقاف","⏰","أدوات","ساعة إيقاف","stopwatch"],
  ["HEX إلى RGB","🎨","ألوان","تحويل HEX إلى RGB","color"],
  ["Meta Tags","🏷️","مطورين","إنشاء Meta Tags","meta"],
  ["HTTP Status","🌍","مطورين","شرح أكواد HTTP","http"],
  ["تاريخ اليوم","📆","أدوات","عرض التاريخ","today"],
  ["الوقت الآن","🕐","أدوات","عرض الوقت","time"],
  ["حروف عشوائية","🔤","أمان","إنشاء حروف عشوائية","chars"],
  ["PIN Generator","🔢","أمان","إنشاء PIN","pin"],
  ["تحويل الثواني","⌛","حسابات","تحويل الثواني","seconds"]
];

const home = document.getElementById("home");
const toolPage = document.getElementById("toolPage");
const toolsGrid = document.getElementById("toolsGrid");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");

const toolCategory = document.getElementById("toolCategory");
const toolTitle = document.getElementById("toolTitle");
const toolDescription = document.getElementById("toolDescription");
const toolContent = document.getElementById("toolContent");

const backButton = document.getElementById("backButton");
const themeBtn = document.getElementById("themeBtn");

let currentCategory = "الكل";

function renderCategories() {
  const cats = ["الكل", ...new Set(tools.map(tool => tool[2]))];

  categories.innerHTML = cats.map(cat => `
    <button class="category ${cat === currentCategory ? "active" : ""}"
      onclick="selectCategory('${cat}')">
      ${cat}
    </button>
  `).join("");
}

function selectCategory(category) {
  currentCategory = category;
  renderCategories();
  renderTools();
}

function renderTools() {
  const search = (searchInput.value || "").toLowerCase().trim();

  const filtered = tools.filter(tool => {
    const categoryMatch =
      currentCategory === "الكل" ||
      tool[2] === currentCategory;

    const text =
      `${tool[0]} ${tool[2]} ${tool[3]}`.toLowerCase();

    return categoryMatch && text.includes(search);
  });

  if (!filtered.length) {
    toolsGrid.innerHTML = `
      <div class="tool-card">
        <div class="tool-icon">🔎</div>
        <h3>مفيش نتائج</h3>
        <p>جرب كلمة بحث مختلفة.</p>
      </div>
    `;
    return;
  }

  toolsGrid.innerHTML = filtered.map(tool => `
    <div class="tool-card"
      onclick="openTool(${tools.indexOf(tool)})">
      <div class="tool-icon">${tool[1]}</div>
      <h3>${tool[0]}</h3>
      <p>${tool[3]}</p>
    </div>
  `).join("");
}

function openTool(index) {
  const tool = tools[index];

  home.classList.add("hidden");
  toolPage.classList.remove("hidden");

  toolCategory.textContent = tool[2];
  toolTitle.textContent = tool[0];
  toolDescription.textContent = tool[3];

  toolContent.innerHTML = createTool(tool);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function getText() {
  const element = document.getElementById("mainText");
  return element ? element.value : "";
}

function showResult(text) {
  const result = document.getElementById("result");

  if (result) {
    result.textContent = text;
  }
}

function createTool(tool) {
  const type = tool[4];

  if (type === "counter") {
    return `
      <textarea id="mainText"
        placeholder="اكتب النص هنا..."></textarea>

      <button class="primary-button"
        onclick="countText()">
        احسب
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "reverse") {
    return `
      <textarea id="mainText"
        placeholder="اكتب النص..."></textarea>

      <button class="primary-button"
        onclick="reverseText()">
        عكس النص
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "upper" || type === "lower") {
    return `
      <textarea id="mainText"
        placeholder="اكتب النص..."></textarea>

      <button class="primary-button"
        onclick="${type === "upper"
          ? "changeUpper()"
          : "changeLower()"}">
        تحويل
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "clean") {
    return `
      <textarea id="mainText"
        placeholder="اكتب النص..."></textarea>

      <button class="primary-button"
        onclick="cleanText()">
        تنظيف النص
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "sort") {
    return `
      <textarea id="mainText"
        placeholder="اكتب كل عنصر في سطر..."></textarea>

      <button class="primary-button"
        onclick="sortText()">
        ترتيب
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "json") {
    return `
      <textarea id="mainText"
        placeholder='{"name":"Omar","age":15}'></textarea>

      <button class="primary-button"
        onclick="formatJSON()">
        تنسيق JSON
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "base64e" || type === "base64d") {
    return `
      <textarea id="mainText"
        placeholder="اكتب النص هنا..."></textarea>

      <button class="primary-button"
        onclick="${type === "base64e"
          ? "encodeBase64()"
          : "decodeBase64()"}">
        ${type === "base64e"
          ? "تشفير Base64"
          : "فك Base64"}
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "urle" || type === "urld") {
    return `
      <textarea id="mainText"
        placeholder="اكتب النص أو الرابط..."></textarea>

      <button class="primary-button"
        onclick="${type === "urle"
          ? "encodeURL()"
          : "decodeURL()"}">
        تحويل
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "password") {
    return `
      <label>طول كلمة المرور</label>

      <input id="passLength"
        type="number"
        value="16"
        min="4"
        max="64">

      <button class="primary-button"
        onclick="generatePassword()">
        إنشاء باسورد
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "random") {
    return `
      <input id="min"
        type="number"
        placeholder="أقل رقم">

      <input id="max"
        type="number"
        placeholder="أكبر رقم">

      <button class="primary-button"
        onclick="randomNumber()">
        إنشاء
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "choice") {
    return `
      <textarea id="mainText"
        placeholder="اكتب الاختيارات، كل اختيار في سطر"></textarea>

      <button class="primary-button"
        onclick="randomChoice()">
        اختيار
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "calculator") {
    return `
      <input id="calc"
        placeholder="مثال: 25 + 5 * 2">

      <button class="primary-button"
        onclick="calculate()">
        احسب
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "percent") {
    return `
      <input id="number"
        type="number"
        placeholder="الرقم">

      <input id="percent"
        type="number"
        placeholder="النسبة %">

      <button class="primary-button"
        onclick="percentage()">
        احسب
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "age") {
    return `
      <label>تاريخ الميلاد</label>

      <input id="birthDate"
        type="date">

      <button class="primary-button"
        onclick="calculateAge()">
        احسب العمر
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "datediff") {
    return `
      <label>التاريخ الأول</label>

      <input id="date1"
        type="date">

      <label>التاريخ الثاني</label>

      <input id="date2"
        type="date">

      <button class="primary-button"
        onclick="dateDifference()">
        احسب الفرق
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "units") {
    return `
      <input id="unitValue"
        type="number"
        placeholder="القيمة">

      <select id="unitType">
        <option value="km">كيلومتر → متر</option>
        <option value="m">متر → سنتيمتر</option>
        <option value="cm">سنتيمتر → ملليمتر</option>
      </select>

      <button class="primary-button"
        onclick="convertUnits()">
        تحويل
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "uuid") {
    return `
      <button class="primary-button"
        onclick="generateUUID()">
        إنشاء UUID
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "regex") {
    return `
      <input id="regexPattern"
        placeholder="مثال: ^[0-9]+$">

      <textarea id="regexText"
        placeholder="النص المراد اختباره"></textarea>

      <button class="primary-button"
        onclick="testRegex()">
        اختبار
      </button>

      <div id="result" class="result"></div>
    `;
      }  if (type === "lorem") {
    return `
      <input id="loremCount"
        type="number"
        value="3"
        min="1"
        max="20">

      <button class="primary-button"
        onclick="generateLorem()">
        إنشاء
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "color") {
    return `
      <input id="hexColor"
        value="#7c5cff"
        placeholder="#000000">

      <button class="primary-button"
        onclick="hexToRGB()">
        تحويل
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "qr") {
    return `
      <input id="qrText"
        placeholder="اكتب النص أو الرابط">

      <button class="primary-button"
        onclick="makeQR()">
        إنشاء QR
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "wifi") {
    return `
      <input id="wifiName"
        placeholder="اسم الشبكة">

      <input id="wifiPass"
        placeholder="كلمة المرور">

      <select id="wifiSecurity">
        <option value="WPA">WPA / WPA2</option>
        <option value="WEP">WEP</option>
        <option value="">بدون كلمة مرور</option>
      </select>

      <button class="primary-button"
        onclick="makeWifiQR()">
        إنشاء QR
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "contact") {
    return `
      <input id="contactName"
        placeholder="الاسم">

      <input id="contactPhone"
        placeholder="رقم الهاتف">

      <button class="primary-button"
        onclick="makeContactQR()">
        إنشاء QR
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (
    type === "file" ||
    type === "image" ||
    type === "imageInfo" ||
    type === "fileInfo"
  ) {
    return `
      <input id="fileInput"
        type="file">

      <div id="result" class="result">
        اختار الملف من الزر الموجود فوق.
      </div>
    `;
  }

  if (type === "timer") {
    return `
      <input id="timerSeconds"
        type="number"
        value="60"
        min="1">

      <button class="primary-button"
        onclick="startTimer()">
        ابدأ
      </button>

      <div id="result" class="result">
        00:01:00
      </div>
    `;
  }

  if (type === "stopwatch") {
    return `
      <button class="primary-button"
        onclick="startStopwatch()">
        ابدأ
      </button>

      <button class="primary-button"
        onclick="stopStopwatch()">
        إيقاف
      </button>

      <button class="primary-button"
        onclick="resetStopwatch()">
        إعادة
      </button>

      <div id="result" class="result">
        00:00:00
      </div>
    `;
  }

  if (type === "today") {
    return `
      <button class="primary-button"
        onclick="showToday()">
        عرض التاريخ
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "time") {
    return `
      <button class="primary-button"
        onclick="showTime()">
        عرض الوقت
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "chars" || type === "pin") {
    return `
      <input id="charLength"
        type="number"
        value="8"
        min="1"
        max="64">

      <button class="primary-button"
        onclick="${type === "chars"
          ? "generateChars()"
          : "generatePIN()"}">
        إنشاء
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "seconds") {
    return `
      <input id="secondsInput"
        type="number"
        placeholder="عدد الثواني">

      <button class="primary-button"
        onclick="convertSeconds()">
        تحويل
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "meta") {
    return `
      <input id="metaTitle"
        placeholder="عنوان الموقع">

      <input id="metaDesc"
        placeholder="وصف الموقع">

      <button class="primary-button"
        onclick="generateMeta()">
        إنشاء
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "http") {
    return `
      <input id="httpCode"
        type="number"
        placeholder="مثال: 404">

      <button class="primary-button"
        onclick="httpStatus()">
        شرح
      </button>

      <div id="result" class="result"></div>
    `;
  }

  if (type === "html") {
    return `
      <textarea id="mainText"><!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>

</body>
</html></textarea>

      <button class="primary-button"
        onclick="copyMainText()">
        نسخ الكود
      </button>

      <div id="result" class="result">
        الكود جاهز للتعديل.
      </div>
    `;
  }

  if (type === "css") {
    return `
      <textarea id="mainText">body {
  margin: 0;
  font-family: Arial, sans-serif;
}</textarea>

      <button class="primary-button"
        onclick="copyMainText()">
        نسخ الكود
      </button>

      <div id="result" class="result">
        الكود جاهز للتعديل.
      </div>
    `;
  }

  if (type === "js") {
    return `
      <textarea id="mainText">document.addEventListener("DOMContentLoaded", () => {
  console.log("OMAR TOOLS");
});</textarea>

      <button class="primary-button"
        onclick="copyMainText()">
        نسخ الكود
      </button>

      <div id="result" class="result">
        الكود جاهز للتعديل.
      </div>
    `;
  }

  return `
    <textarea id="mainText"
      placeholder="اكتب هنا..."></textarea>

    <button class="primary-button"
      onclick="showText()">
      تنفيذ
    </button>

    <div id="result" class="result"></div>
  `;
}

function countText() {
  const text = getText();

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const letters = text.length;

  const withoutSpaces =
    text.replace(/\s/g, "").length;

  showResult(
    `الكلمات: ${words}
الحروف: ${letters}
بدون مسافات: ${withoutSpaces}`
  );
}

function reverseText() {
  showResult(
    getText().split("").reverse().join("")
  );
}

function changeUpper() {
  showResult(getText().toUpperCase());
}

function changeLower() {
  showResult(getText().toLowerCase());
}

function cleanText() {
  showResult(
    getText().replace(/\s+/g, " ").trim()
  );
}

function sortText() {
  const lines = getText()
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "ar"));

  showResult(lines.join("\n"));
}

function formatJSON() {
  try {
    const data = JSON.parse(getText());

    showResult(
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    showResult("JSON غير صحيح.");
  }
}

function encodeBase64() {
  try {
    const result = btoa(
      unescape(
        encodeURIComponent(getText())
      )
    );

    showResult(result);
  } catch (error) {
    showResult("تعذر تشفير النص.");
  }
}

function decodeBase64() {
  try {
    const result = decodeURIComponent(
      escape(atob(getText()))
    );

    showResult(result);
  } catch (error) {
    showResult("Base64 غير صحيح.");
  }
}

function encodeURL() {
  showResult(
    encodeURIComponent(getText())
  );
}

function decodeURL() {
  try {
    showResult(
      decodeURIComponent(getText())
    );
  } catch (error) {
    showResult("الرابط غير صحيح.");
  }
}

function generatePassword() {
  const input =
    document.getElementById("passLength");

  const length = Math.min(
    64,
    Math.max(
      4,
      Number(input.value) || 16
    )
  );

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "!@#$%^&*";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[
      Math.floor(
        Math.random() * chars.length
      )
    ];
  }

  showResult(password);
}

function randomNumber() {
  const min =
    Number(document.getElementById("min").value);

  const max =
    Number(document.getElementById("max").value);

  if (
    !Number.isFinite(min) ||
    !Number.isFinite(max) ||
    min > max
  ) {
    showResult(
      "اكتب أقل رقم وأكبر رقم بشكل صحيح."
    );
    return;
  }

  const result =
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min;

  showResult(String(result));
}

function randomChoice() {
  const items = getText()
    .split("\n")
    .map(x => x.trim())
    .filter(Boolean);

  if (!items.length) {
    showResult("اكتب الاختيارات الأول.");
    return;
  }

  const index =
    Math.floor(Math.random() * items.length);

  showResult(items[index]);
}

function calculate() {
  const expression =
    document.getElementById("calc").value.trim();

  if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
    showResult(
      "استخدم أرقام وعمليات حسابية فقط."
    );
    return;
  }

  try {
    const result =
      Function(
        `"use strict"; return (${expression})`
      )();

    showResult(String(result));
  } catch (error) {
    showResult("المعادلة غير صحيحة.");
  }
}

function percentage() {
  const number =
    Number(document.getElementById("number").value);

  const percent =
    Number(document.getElementById("percent").value);

  if (
    !Number.isFinite(number) ||
    !Number.isFinite(percent)
  ) {
    showResult("اكتب الرقم والنسبة.");
    return;
  }

  showResult(
    String(number * percent / 100)
  );
}

function calculateAge() {
  const value =
    document.getElementById("birthDate").value;

  if (!value) {
    showResult("اختار تاريخ الميلاد.");
    return;
  }

  const birth = new Date(value);
  const today = new Date();

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const month =
    today.getMonth() -
    birth.getMonth();

  if (
    month < 0 ||
    (
      month === 0 &&
      today.getDate() < birth.getDate()
    )
  ) {
    age--;
  }

  showResult(`العمر: ${age} سنة`);
}

function dateDifference() {
  const first =
    new Date(
      document.getElementById("date1").value
    );

  const second =
    new Date(
      document.getElementById("date2").value
    );

  if (
    Number.isNaN(first.getTime()) ||
    Number.isNaN(second.getTime())
  ) {
    showResult("اختار التاريخين.");
    return;
  }

  const days =
    Math.abs(
      Math.round(
        (second - first) / 86400000
      )
    );

  showResult(`الفرق: ${days} يوم`);
}

function convertUnits() {
  const value =
    Number(
      document.getElementById("unitValue").value
    );

  const type =
    document.getElementById("unitType").value;

  if (!Number.isFinite(value)) {
    showResult("اكتب القيمة.");
    return;
  }

  let result = 0;

  if (type === "km") {
    result = value * 1000;
  }

  if (type === "m") {
    result = value * 100;
  }

  if (type === "cm") {
    result = value * 10;
  }

  showResult(String(result));
}function generateUUID() {
  if (
    window.crypto &&
    typeof window.crypto.randomUUID === "function"
  ) {
    showResult(window.crypto.randomUUID());
    return;
  }

  const uuid =
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = Math.random() * 16 | 0;
        const v =
          c === "x"
            ? r
            : (r & 3 | 8);

        return v.toString(16);
      }
    );

  showResult(uuid);
}

function testRegex() {
  const pattern =
    document.getElementById("regexPattern").value;

  const text =
    document.getElementById("regexText").value;

  try {
    const regex = new RegExp(pattern);

    showResult(
      regex.test(text)
        ? "النص مطابق ✅"
        : "النص غير مطابق ❌"
    );
  } catch (error) {
    showResult(
      "Regular Expression غير صحيح."
    );
  }
}

function generateLorem() {
  const count =
    Math.min(
      20,
      Math.max(
        1,
        Number(
          document.getElementById("loremCount").value
        ) || 3
      )
    );

  const text =
    "لوريم إيبسوم هو نص تجريبي يستخدم في التصميم والبرمجة لإنشاء شكل تقريبي للمحتوى قبل كتابة النص النهائي.";

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(text);
  }

  showResult(
    result.join("\n\n")
  );
}

function hexToRGB() {
  let hex =
    document.getElementById("hexColor").value.trim();

  if (hex.startsWith("#")) {
    hex = hex.substring(1);
  }

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    showResult(
      "اكتب HEX صحيح مثل #7c5cff"
    );
    return;
  }

  const r =
    parseInt(hex.substring(0, 2), 16);

  const g =
    parseInt(hex.substring(2, 4), 16);

  const b =
    parseInt(hex.substring(4, 6), 16);

  showResult(
    `RGB(${r}, ${g}, ${b})`
  );
}

function makeQR() {
  const text =
    document.getElementById("qrText").value.trim();

  if (!text) {
    showResult(
      "اكتب النص أو الرابط الأول."
    );
    return;
  }

  const url =
    "https://api.qrserver.com/v1/create-qr-code/" +
    "?size=250x250&data=" +
    encodeURIComponent(text);

  document.getElementById("result").innerHTML =
    `<img src="${url}"
      alt="QR Code"
      style="max-width:250px;border-radius:12px">`;
}

function makeWifiQR() {
  const name =
    document.getElementById("wifiName").value;

  const password =
    document.getElementById("wifiPass").value;

  const security =
    document.getElementById("wifiSecurity").value;

  const data =
    `WIFI:T:${security};S:${name};P:${password};;`;

  const url =
    "https://api.qrserver.com/v1/create-qr-code/" +
    "?size=250x250&data=" +
    encodeURIComponent(data);

  document.getElementById("result").innerHTML =
    `<img src="${url}"
      alt="WiFi QR"
      style="max-width:250px;border-radius:12px">`;
}

function makeContactQR() {
  const name =
    document.getElementById("contactName").value;

  const phone =
    document.getElementById("contactPhone").value;

  const data =
    `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
END:VCARD`;

  const url =
    "https://api.qrserver.com/v1/create-qr-code/" +
    "?size=250x250&data=" +
    encodeURIComponent(data);

  document.getElementById("result").innerHTML =
    `<img src="${url}"
      alt="Contact QR"
      style="max-width:250px;border-radius:12px">`;
}

function generateChars() {
  const input =
    document.getElementById("charLength");

  const length =
    Math.min(
      64,
      Math.max(
        1,
        Number(input.value) || 8
      )
    );

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result +=
      chars[
        Math.floor(
          Math.random() * chars.length
        )
      ];
  }

  showResult(result);
}

function generatePIN() {
  const input =
    document.getElementById("charLength");

  const length =
    Math.min(
      12,
      Math.max(
        4,
        Number(input.value) || 8
      )
    );

  let pin = "";

  for (let i = 0; i < length; i++) {
    pin += Math.floor(
      Math.random() * 10
    );
  }

  showResult(pin);
}

function showToday() {
  showResult(
    new Date().toLocaleDateString("ar-EG")
  );
}

function showTime() {
  showResult(
    new Date().toLocaleTimeString(
      "ar-EG",
      {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }
    )
  );
}

function convertSeconds() {
  const seconds =
    Number(
      document.getElementById("secondsInput").value
    );

  if (
    !Number.isFinite(seconds) ||
    seconds < 0
  ) {
    showResult(
      "اكتب عدد ثواني صحيح."
    );
    return;
  }

  const hours =
    Math.floor(seconds / 3600);

  const minutes =
    Math.floor(
      (seconds % 3600) / 60
    );

  const secs =
    Math.floor(seconds % 60);

  showResult(
    `${hours} ساعة - ${minutes} دقيقة - ${secs} ثانية`
  );
}

function generateMeta() {
  const title =
    document.getElementById("metaTitle").value;

  const description =
    document.getElementById("metaDesc").value;

  showResult(
    `<title>${title}</title>
<meta name="description" content="${description}">`
  );
}

function httpStatus() {
  const code =
    Number(
      document.getElementById("httpCode").value
    );

  const statuses = {
    200: "OK - الطلب تم بنجاح.",
    201: "Created - تم إنشاء المورد.",
    301: "Moved Permanently - تحويل دائم.",
    302: "Found - تحويل مؤقت.",
    400: "Bad Request - الطلب غير صحيح.",
    401: "Unauthorized - يحتاج تسجيل دخول.",
    403: "Forbidden - الوصول مرفوض.",
    404: "Not Found - الصفحة غير موجودة.",
    500: "Internal Server Error - خطأ في الخادم.",
    502: "Bad Gateway - مشكلة بين الخوادم.",
    503: "Service Unavailable - الخدمة غير متاحة."
  };

  showResult(
    statuses[code] ||
    "الكود غير موجود في القائمة."
  );
}

function copyMainText() {
  const text = getText();

  if (
    navigator.clipboard &&
    navigator.clipboard.writeText
  ) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        showResult("تم نسخ الكود ✅");
      })
      .catch(function () {
        showResult("انسخ الكود يدويًا.");
      });

    return;
  }

  showResult("انسخ الكود يدويًا.");
}

function showText() {
  showResult(getText());
}

let timerInterval = null;

function startTimer() {
  clearInterval(timerInterval);

  let seconds =
    Number(
      document.getElementById("timerSeconds").value
    ) || 60;

  showResult(
    formatTime(seconds)
  );

  timerInterval = setInterval(
    function () {
      seconds--;

      showResult(
        formatTime(
          Math.max(seconds, 0)
        )
      );

      if (seconds <= 0) {
        clearInterval(timerInterval);

        showResult(
          "انتهى الوقت ⏰"
        );
      }
    },
    1000
  );
}

function formatTime(seconds) {
  const hours =
    Math.floor(seconds / 3600);

  const minutes =
    Math.floor(
      (seconds % 3600) / 60
    );

  const secs =
    seconds % 60;

  return [
    hours,
    minutes,
    secs
  ]
    .map(function (value) {
      return String(value).padStart(2, "0");
    })
    .join(":");
}

let stopwatchInterval = null;
let stopwatchSeconds = 0;

function startStopwatch() {
  if (stopwatchInterval) {
    return;
  }

  stopwatchInterval = setInterval(
    function () {
      stopwatchSeconds++;

      showResult(
        formatTime(stopwatchSeconds)
      );
    },
    1000
  );
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();

  stopwatchSeconds = 0;

  showResult(
    "00:00:00"
  );
}

document.addEventListener(
  "change",
  function (event) {
    if (
      event.target.id !== "fileInput"
    ) {
      return;
    }

    const file =
      event.target.files[0];

    if (!file) {
      return;
    }

    let size;

    if (file.size < 1024 * 1024) {
      size =
        (file.size / 1024).toFixed(2) +
        " KB";
    } else {
      size =
        (file.size / 1024 / 1024).toFixed(2) +
        " MB";
    }

    showResult(
      `اسم الملف: ${file.name}
النوع: ${file.type || "غير معروف"}
الحجم: ${size}`
    );
  }
);

if (searchInput) {
  searchInput.addEventListener(
    "input",
    renderTools
  );
}

if (backButton) {
  backButton.addEventListener(
    "click",
    function () {
      toolPage.classList.add("hidden");
      home.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );
}

if (themeBtn) {
  themeBtn.addEventListener(
    "click",
    function () {
      const light =
        document.body.dataset.theme === "light";

      if (light) {
        document.body.dataset.theme = "dark";
        document.body.style.background = "#080d1a";
        document.body.style.color = "white";
        themeBtn.textContent = "☀️";
      } else {
        document.body.dataset.theme = "light";
        document.body.style.background = "#f4f6fb";
        document.body.style.color = "#111827";
        themeBtn.textContent = "🌙";
      }
    }
  );
}

renderCategories();
renderTools();

console.log(
  "OMAR TOOLS loaded successfully"
);
