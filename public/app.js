const tools = [

  // الصور
  ["🖼️", "ضغط الصور", "الصور", "تقليل حجم الصور"],
  ["📐", "تغيير حجم الصور", "الصور", "تغيير أبعاد الصور"],
  ["🔄", "JPG ↔ PNG", "الصور", "تحويل صيغ الصور"],
  ["🌐", "WebP → JPG", "الصور", "تحويل WebP إلى JPG"],
  ["🔤", "OCR", "الصور", "استخراج النص من الصور"],

  // PDF
  ["📄", "دمج PDF", "PDF", "دمج ملفات PDF"],
  ["✂️", "تقسيم PDF", "PDF", "تقسيم ملف PDF"],
  ["🗜️", "ضغط PDF", "PDF", "تقليل حجم PDF"],
  ["🖼️", "PDF → JPG", "PDF", "تحويل PDF إلى صور"],
  ["📕", "JPG → PDF", "PDF", "تحويل الصور إلى PDF"],

  // فيديو
  ["🎬", "ضغط الفيديو", "الفيديو", "تقليل حجم الفيديو"],
  ["✂️", "قص الفيديو", "الفيديو", "قص أجزاء من الفيديو"],
  ["🎞️", "Video → GIF", "الفيديو", "تحويل الفيديو إلى GIF"],
  ["🎵", "Video → MP3", "الفيديو", "استخراج الصوت من ملف تملكه"],
  ["🔊", "تحويل الصوت", "الفيديو", "تحويل صيغ الصوت"],

  // QR
  ["🔳", "QR Generator", "QR", "إنشاء QR للرابط أو النص"],
  ["📶", "QR WiFi", "QR", "إنشاء QR لشبكة WiFi"],
  ["👤", "QR Contact", "QR", "إنشاء QR لجهة اتصال"],

  // النصوص
  ["📝", "عداد الكلمات", "النصوص", "حساب الكلمات والحروف"],
  ["🔠", "Upper / Lower Case", "النصوص", "تغيير حالة الأحرف"],
  ["🧹", "تنظيف النص", "النصوص", "إزالة المسافات الزائدة"],
  ["📋", "Text Sorter", "النصوص", "ترتيب أسطر النص"],
  ["🧠", "Lorem Ipsum", "النصوص", "إنشاء نص تجريبي"],

  // المطورين
  ["🧾", "JSON Formatter", "المطورين", "تنسيق JSON"],
  ["🔐", "Base64", "المطورين", "Encode / Decode"],
  ["🔗", "URL Encoder", "المطورين", "ترميز الروابط"],
  ["🆔", "UUID Generator", "المطورين", "إنشاء UUID"],
  ["🎨", "Color Picker", "المطورين", "اختيار الألوان"],
  ["HEX", "HEX → RGB", "المطورين", "تحويل HEX إلى RGB"],
  ["🧪", "Regex Tester", "المطورين", "اختبار Regex"],

  // الحسابات
  ["🔢", "حاسبة النسبة", "الحسابات", "حساب النسبة المئوية"],
  ["🎂", "حاسبة العمر", "الحسابات", "حساب العمر"],
  ["📏", "تحويل الوحدات", "الحسابات", "تحويل الوحدات"],
  ["💱", "تحويل العملات", "الحسابات", "تحويل العملات"],
  ["⏱️", "مؤقت", "الحسابات", "مؤقت سريع"],
  ["🧮", "حاسبة", "الحسابات", "حاسبة بسيطة"],

  // الأمان
  ["🔑", "مولد كلمات مرور", "الأمان", "توليد كلمات مرور"],
  ["🔒", "Hash Generator", "الأمان", "إنشاء Hash"],

  // ملفات
  ["📦", "File Info", "الملفات", "عرض معلومات الملف"],
  ["📊", "CSV Viewer", "الملفات", "عرض ملفات CSV"],

  // أدوات إضافية
  ["🔢", "Random Number", "أخرى", "رقم عشوائي"],
  ["🎯", "Random Choice", "أخرى", "اختيار عشوائي"],
  ["📅", "Date Difference", "أخرى", "فرق التاريخ"],
  ["🕒", "Time Zone", "أخرى", "الوقت حسب المنطقة"]
];

let activeCategory = "الكل";

const grid = document.getElementById("toolsGrid");
const categories = document.getElementById("categories");
const search = document.getElementById("searchInput");

const toolPage = document.getElementById("toolPage");
const home = document.getElementById("home");

const toolTitle = document.getElementById("toolTitle");
const toolCategory = document.getElementById("toolCategory");
const toolDescription = document.getElementById("toolDescription");
const toolContent = document.getElementById("toolContent");

const categoryList = [
  "الكل",
  ...new Set(tools.map(tool => tool[2]))
];

function renderCategories() {

  categories.innerHTML = categoryList
    .map(category => `
      <button
        class="category ${category === activeCategory ? "active" : ""}"
        onclick="selectCategory('${category}')">

        ${category}

      </button>
    `)
    .join("");
}

function renderTools() {

  const text = search.value
    .trim()
    .toLowerCase();

  const filtered = tools.filter(tool => {

    const categoryMatch =
      activeCategory === "الكل" ||
      tool[2] === activeCategory;

    const searchMatch =
      tool[1].toLowerCase().includes(text) ||
      tool[3].toLowerCase().includes(text);

    return categoryMatch && searchMatch;
  });

  grid.innerHTML = filtered
    .map(tool => `
      <article
        class="tool-card"
        onclick="openTool('${tool[1]}')">

        <div class="tool-icon">
          ${tool[0]}
        </div>

        <h3>${tool[1]}</h3>

        <p>${tool[3]}</p>

      </article>
    `)
    .join("");
}

function selectCategory(category) {

  activeCategory = category;

  renderCategories();
  renderTools();
}

search.addEventListener(
  "input",
  renderTools
);

function openTool(name) {

  const tool = tools.find(
    item => item[1] === name
  );

  if (!tool) return;

  home.classList.add("hidden");

  toolPage.classList.remove("hidden");

  toolCategory.textContent = tool[2];

  toolTitle.textContent = tool[1];

  toolDescription.textContent = tool[3];

  createTool(tool);
}

function createTool(tool) {

  const name = tool[1];

  if (name === "عداد الكلمات") {

    toolContent.innerHTML = `

      <textarea
        id="wordText"
        placeholder="اكتب النص هنا...">
      </textarea>

      <div
        id="wordResult"
        class="result">

        الكلمات: 0 |
        الحروف: 0

      </div>
    `;

    document
      .getElementById("wordText")
      .addEventListener("input", () => {

        const text =
          document.getElementById("wordText").value;

        const words =
          text.trim()
            ? text.trim().split(/\s+/).length
            : 0;

        document.getElementById(
          "wordResult"
        ).textContent =
          `الكلمات: ${words} | الحروف: ${text.length}`;
      });

    return;
  }

  if (name === "JSON Formatter") {

    toolContent.innerHTML = `

      <textarea
        id="jsonText"
        placeholder='{"name":"Omar"}'>
      </textarea>

      <button
        class="primary-button"
        onclick="formatJSON()">

        تنسيق JSON

      </button>

      <div
        id="jsonResult"
        class="result">
      </div>
    `;

    return;
  }

  if (name === "Base64") {

    toolContent.innerHTML = `

      <textarea
        id="base64Text"
        placeholder="اكتب النص هنا...">
      </textarea>

      <button
        class="primary-button"
        onclick="encodeBase64()">

        Encode

      </button>

      <button
        class="primary-button"
        onclick="decodeBase64()">

        Decode

      </button>

      <div
        id="base64Result"
        class="result">
      </div>
    `;

    return;
  }

  if (name === "مولد كلمات مرور") {

    toolContent.innerHTML = `

      <label>
        طول كلمة المرور
      </label>

      <input
        id="passwordLength"
        type="number"
        value="16"
        min="6"
        max="64">

      <button
        class="primary-button"
        onclick="generatePassword()">

        توليد كلمة مرور

      </button>

      <div
        id="passwordResult"
        class="result">
      </div>
    `;

    return;
  }

  if (name === "HEX → RGB") {

    toolContent.innerHTML = `

      <label>
        لون HEX
      </label>

      <input
        id="hexInput"
        placeholder="#7C5CFF">

      <button
        class="primary-button"
        onclick="hexToRGB()">

        تحويل

      </button>

      <div
        id="hexResult"
        class="result">
      </div>
    `;

    return;
  }

  if (name === "حاسبة النسبة") {

    toolContent.innerHTML = `

      <label>
        الرقم
      </label>

      <input
        id="percentNumber"
        type="number">

      <label>
        من
      </label>

      <input
        id="percentTotal"
        type="number">

      <button
        class="primary-button"
        onclick="calculatePercent()">

        احسب

      </button>

      <div
        id="percentResult"
        class="result">
      </div>
    `;

    return;
  }

  if (name === "QR Generator") {

    toolContent.innerHTML = `

      <input
        id="qrText"
        placeholder="اكتب رابط أو نص...">

      <button
        class="primary-button"
        onclick="generateQR()">

        إنشاء QR

      </button>

      <div
        id="qrResult"
        class="result">
      </div>
    `;

    return;
  }

  if (
    name === "ضغط الصور" ||
    name === "تغيير حجم الصور" ||
    name === "ضغط الفيديو" ||
    name === "قص الفيديو" ||
    name === "Video → MP3" ||
    name === "Video → GIF" ||
    name === "دمج PDF" ||
    name === "ضغط PDF"
  ) {

    toolContent.innerHTML = `

      <input
        id="fileInput"
        type="file">

      <br><br>

      <button
        class="primary-button"
        onclick="selectFile()">

        اختيار الملف

      </button>

      <div
        id="fileResult"
        class="result">

        اختار ملفًا للبدء.

      </div>
    `;

    return;
  }

  toolContent.innerHTML = `

    <p>
      واجهة أداة ${name} جاهزة.
    </p>

    <div class="result">

      الوظيفة الفعلية للأداة هنضيفها
      في المرحلة التالية.

    </div>
  `;
}

function formatJSON() {

  try {

    const value =
      document.getElementById("jsonText").value;

    const result =
      JSON.stringify(
        JSON.parse(value),
        null,
        2
      );

    document.getElementById(
      "jsonResult"
    ).textContent = result;

  } catch {

    document.getElementById(
      "jsonResult"
    ).textContent =
      "JSON غير صحيح.";
  }
}

function encodeBase64() {

  const text =
    document.getElementById("base64Text").value;

  document.getElementById(
    "base64Result"
  ).textContent =
    btoa(
      unescape(
        encodeURIComponent(text)
      )
    );
}

function decodeBase64() {

  try {

    const text =
      document.getElementById("base64Text").value;

    document.getElementById(
      "base64Result"
    ).textContent =
      decodeURIComponent(
        escape(atob(text))
      );

  } catch {

    document.getElementById(
      "base64Result"
    ).textContent =
      "Base64 غير صحيح.";
  }
}

function generatePassword() {

  const length =
    Number(
      document.getElementById(
        "passwordLength"
      ).value
    );

  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";

  let password = "";

  for (
    let i = 0;
    i < length;
    i++
  ) {

    password +=
      chars[
        Math.floor(
          Math.random() * chars.length
        )
      ];
  }

  document.getElementById(
    "passwordResult"
  ).textContent =
    password;
}

function hexToRGB() {

  let hex =
    document.getElementById(
      "hexInput"
    ).value
      .replace("#", "");

  if (hex.length !== 6) {

    document.getElementById(
      "hexResult"
    ).textContent =
      "اكتب لون HEX صحيح.";

    return;
  }

  const r =
    parseInt(hex.substring(0, 2), 16);

  const g =
    parseInt(hex.substring(2, 4), 16);

  const b =
    parseInt(hex.substring(4, 6), 16);

  document.getElementById(
    "hexResult"
  ).textContent =
    `rgb(${r}, ${g}, ${b})`;
}

function calculatePercent() {

  const number =
    Number(
      document.getElementById(
        "percentNumber"
      ).value
    );

  const total =
    Number(
      document.getElementById(
        "percentTotal"
      ).value
    );

  if (!total) return;

  document.getElementById(
    "percentResult"
  ).textContent =
    `${((number / total) * 100).toFixed(2)}%`;
}

function generateQR() {

  const text =
    document.getElementById(
      "qrText"
    ).value;

  if (!text) return;

  const encoded =
    encodeURIComponent(text);

  document.getElementById(
    "qrResult"
  ).innerHTML = `

    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encoded}"
      style="
        max-width:250px;
        background:white;
        padding:10px;
