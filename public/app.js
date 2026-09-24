
// ==========================================
// OMAR TOOLS - APP.JS
// ==========================================

const tools = [
  // صور
  ["ضغط الصور", "🖼️", "صور", "تقليل حجم الصورة", "file"],
  ["تغيير حجم الصورة", "📐", "صور", "تغيير أبعاد الصورة", "file"],
  ["JPG إلى PNG", "🔄", "صور", "تحويل JPG إلى PNG", "file"],
  ["PNG إلى JPG", "🔄", "صور", "تحويل PNG إلى JPG", "file"],
  ["WebP إلى JPG", "🔄", "صور", "تحويل WebP إلى JPG", "file"],
  ["معلومات الصورة", "ℹ️", "صور", "عرض معلومات الصورة", "file"],
  ["مولد الألوان", "🎨", "صور", "اختيار ومعرفة أكواد الألوان", "color"],
  ["HEX إلى RGB", "🌈", "صور", "تحويل HEX إلى RGB", "hex"],

  // PDF
  ["دمج PDF", "📄", "PDF", "دمج ملفات PDF", "file"],
  ["تقسيم PDF", "✂️", "PDF", "تقسيم ملف PDF", "file"],
  ["ضغط PDF", "🗜️", "PDF", "تقليل حجم PDF", "file"],
  ["PDF إلى JPG", "📄", "PDF", "تحويل PDF إلى صور", "file"],
  ["JPG إلى PDF", "📑", "PDF", "تحويل الصور إلى PDF", "file"],
  ["تدوير PDF", "🔃", "PDF", "تدوير صفحات PDF", "file"],

  // فيديو
  ["ضغط الفيديو", "🎬", "فيديو", "تقليل حجم الفيديو", "file"],
  ["قص الفيديو", "✂️", "فيديو", "قص ملف فيديو", "file"],
  ["فيديو إلى GIF", "🎞️", "فيديو", "تحويل الفيديو إلى GIF", "file"],
  ["استخراج الصوت", "🎵", "فيديو", "استخراج الصوت من ملف تملكه", "file"],
  ["معلومات الفيديو", "ℹ️", "فيديو", "عرض معلومات الفيديو", "file"],

  // QR
  ["مولد QR", "▦", "QR", "إنشاء QR من رابط أو نص", "qr"],
  ["QR للواي فاي", "📶", "QR", "إنشاء QR لشبكة WiFi", "wifi"],
  ["QR لجهة اتصال", "👤", "QR", "إنشاء QR لجهة اتصال", "contact"],

  // نصوص
  ["عداد الكلمات", "🔢", "نصوص", "حساب الكلمات والحروف", "counter"],
  ["حروف كبيرة", "🔠", "نصوص", "تحويل النص لحروف كبيرة", "upper"],
  ["حروف صغيرة", "🔡", "نصوص", "تحويل النص لحروف صغيرة", "lower"],
  ["تنظيف النص", "🧹", "نصوص", "إزالة المسافات الزائدة", "clean"],
  ["عكس النص", "↔️", "نصوص", "عكس النص", "reverse"],
  ["ترتيب السطور", "📋", "نصوص", "ترتيب السطور أبجديًا", "sort"],
  ["Lorem Ipsum", "📝", "نصوص", "إنشاء نص تجريبي", "lorem"],

  // مطورين
  ["JSON Formatter", "{ }", "مطورين", "تنسيق JSON", "json"],
  ["Base64 Encode", "🔐", "مطورين", "تحويل النص إلى Base64", "base64encode"],
  ["Base64 Decode", "🔓", "مطورين", "فك Base64", "base64decode"],
  ["URL Encode", "🔗", "مطورين", "ترميز النص للرابط", "urlencode"],
  ["URL Decode", "🔗", "مطورين", "فك ترميز الرابط", "urldecode"],
  ["UUID Generator", "🆔", "مطورين", "إنشاء UUID", "uuid"],
  ["Regex Tester", "🔎", "مطورين", "اختبار Regular Expression", "regex"],
  ["HTML Formatter", "🌐", "مطورين", "تنسيق HTML", "formatter"],
  ["CSS Formatter", "🎨", "مطورين", "تنسيق CSS", "formatter"],
  ["JavaScript Formatter", "⚡", "مطورين", "تنسيق JavaScript", "formatter"],
  ["Meta Tags", "🏷️", "مطورين", "إنشاء Meta Tags", "meta"],
  ["HTTP Status", "🌐", "مطورين", "شرح أكواد HTTP", "http"],

  // حسابات
  ["حاسبة", "🧮", "حسابات", "حاسبة رياضية", "calculator"],
  ["النسبة المئوية", "%", "حسابات", "حساب النسبة المئوية", "percentage"],
  ["حاسبة العمر", "🎂", "حسابات", "حساب العمر", "age"],
  ["فرق التاريخ", "📅", "حسابات", "الفرق بين تاريخين", "dateDiff"],
  ["تحويل الوحدات", "📏", "حسابات", "تحويل المتر إلى وحدات مختلفة", "units"],
  ["رقم عشوائي", "🎲", "حسابات", "إنشاء رقم عشوائي", "random"],
  ["اختيار عشوائي", "🎯", "حسابات", "اختيار عنصر عشوائي", "choice"],

  // أدوات
  ["مؤقت", "⏱️", "أدوات", "مؤقت تنازلي", "timer"],
  ["ساعة إيقاف", "⏱️", "أدوات", "ساعة إيقاف", "stopwatch"],
  ["مولد كلمة مرور", "🔑", "أدوات", "إنشاء كلمة مرور عشوائية", "password"],
  ["مولد Hash", "#️⃣", "أدوات", "إنشاء SHA-256 Hash", "hash"],
  ["معلومات الملف", "📁", "أدوات", "عرض معلومات الملف", "file"],
  ["CSV Viewer", "📊", "أدوات", "عرض ملف CSV", "file"]
];

const home = document.getElementById("home");
const toolPage = document.getElementById("toolPage");
const toolsGrid = document.getElementById("toolsGrid");
const categoriesBox = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");

const toolTitle = document.getElementById("toolTitle");
const toolCategory = document.getElementById("toolCategory");
const toolDescription = document.getElementById("toolDescription");
const toolContent = document.getElementById("toolContent");
const backButton = document.getElementById("backButton");
const themeBtn = document.getElementById("themeBtn");

let selectedCategory = "الكل";
let timerInterval = null;
let stopwatchInterval = null;
let stopwatchSeconds = 0;


// ==========================================
// التصنيفات
// ==========================================

const categories = [
  "الكل",
  ...new Set(tools.map(tool => tool[2]))
];

function renderCategories() {

  categoriesBox.innerHTML = "";

  categories.forEach(category => {

    const button = document.createElement("button");

    button.className =
      "category" +
      (selectedCategory === category ? " active" : "");

    button.textContent = category;

    button.addEventListener("click", () => {

      selectedCategory = category;

      renderCategories();
      renderTools();

    });

    categoriesBox.appendChild(button);

  });
}


// ==========================================
// عرض الأدوات
// ==========================================

function renderTools() {

  const search =
    (searchInput.value || "")
      .trim()
      .toLowerCase();

  toolsGrid.innerHTML = "";

  const filtered = tools.filter(tool => {

    const name = tool[0].toLowerCase();
    const category = tool[2].toLowerCase();
    const description = tool[3].toLowerCase();

    const categoryOK =
      selectedCategory === "الكل" ||
      tool[2] === selectedCategory;

    const searchOK =
      !search ||
      name.includes(search) ||
      category.includes(search) ||
      description.includes(search);

    return categoryOK && searchOK;

  });

  if (filtered.length === 0) {

    toolsGrid.innerHTML = `
      <div class="result">
        🔎 مفيش أداة مطابقة للبحث.
      </div>
    `;

    return;
  }

  filtered.forEach(tool => {

    const card = document.createElement("div");

    card.className = "tool-card";

    const icon = document.createElement("div");
    icon.className = "tool-icon";
    icon.textContent = tool[1];

    const title = document.createElement("h3");
    title.textContent = tool[0];

    const description = document.createElement("p");
    description.textContent = tool[3];

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    card.addEventListener("click", () => {
      openTool(tool);
    });

    toolsGrid.appendChild(card);

  });
}


// ==========================================
// فتح الأداة
// ==========================================

function openTool(tool) {

  home.classList.add("hidden");
  toolPage.classList.remove("hidden");

  toolCategory.textContent = tool[2];
  toolTitle.textContent = tool[0];
  toolDescription.textContent = tool[3];

  toolContent.innerHTML =
    createToolInterface(tool[4], tool);

  setupTool(tool[4]);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ==========================================
// الرجوع
// ==========================================

backButton.addEventListener("click", () => {

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }

  toolPage.classList.add("hidden");
  home.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ==========================================
// البحث
// ==========================================

searchInput.addEventListener("input", renderTools);


// ==========================================
// الأدوات - الواجهات
// ==========================================

function createToolInterface(type, tool) {

  if (type === "counter") {

    return `
      <textarea id="counterInput"
        placeholder="اكتب أو الصق النص هنا..."></textarea>

      <div class="result" id="counterResult">
        الكلمات: 0
        الحروف: 0
        بدون مسافات: 0
      </div>
    `;

  }


  if (type === "json") {

    return `
      <textarea id="jsonInput"
        placeholder='مثال: {"name":"Omar","age":15}'></textarea>

      <button class="primary-button" id="jsonButton">
        تنسيق JSON
      </button>

      <div class="result" id="jsonResult"></div>
    `;

  }


  if (type === "base64encode" || type === "base64decode") {

    return `
      <textarea id="base64Input"
        placeholder="اكتب النص هنا..."></textarea>

      <button class="primary-button" id="base64Button">
        ${type === "base64encode" ? "تشفير Base64" : "فك Base64"}
      </button>

      <div class="result" id="base64Result"></div>
    `;

  }


  if (type === "urlencode" || type === "urldecode") {

    return `
      <textarea id="urlInput"
        placeholder="اكتب النص أو الرابط هنا..."></textarea>

      <button class="primary-button" id="urlButton">
        ${type === "urlencode" ? "ترميز URL" : "فك ترميز URL"}
      </button>

      <div class="result" id="urlResult"></div>
    `;

  }


  if (type === "password") {

    return `
      <label>طول كلمة المرور</label>

      <input
        id="passwordLength"
        type="number"
        min="4"
        max="100"
        value="16">

      <button class="primary-button" id="passwordButton">
        إنشاء كلمة مرور
      </button>

      <div class="result" id="passwordResult"></div>
    `;

  }


  if (type === "hex" || type === "color") {

    return `
      <input
        id="colorInput"
        type="color"
        value="#7C5CFF">

      <div class="result" id="colorResult">
        HEX: #7C5CFF
      </div>
    `;

  }


  if (type === "percentage") {

    return `
      <label>الرقم</label>

      <input
        id="percentageNumber"
        type="number"
        placeholder="مثال: 500">

      <label>النسبة %</label>

      <input
        id="percentageValue"
        type="number"
        placeholder="مثال: 20">

      <button class="primary-button" id="percentageButton">
        احسب
      </button>

      <div class="result" id="percentageResult"></div>
    `;

  }


  if (type === "calculator") {

    return `
      <input
        id="calculatorInput"
        placeholder="مثال: 20 + 5 * 2">

      <button class="primary-button" id="calculatorButton">
        احسب
      </button>

      <div class="result" id="calculatorResult"></div>
    `;

  }


  if (type === "random") {

    return `
      <label>من</label>

      <input
        id="randomMin"
        type="number"
        value="1">

      <label>إلى</label>

      <input
        id="randomMax"
        type="number"
        value="100">

      <button class="primary-button" id="randomButton">
        إنشاء رقم
      </button>

      <div class="result" id="randomResult"></div>
    `;

  }


  if (type === "choice") {

    return `
      <textarea
        id="choiceInput"
        placeholder="اكتب كل اختيار في سطر"></textarea>

      <button class="primary-button" id="choiceButton">
        اختار 🎯
      </button>

      <div class="result" id="choiceResult"></div>
    `;

  }


  if (type === "reverse") {

    return `
      <textarea id="reverseInput"
        placeholder="اكتب النص"></textarea>

      <button class="primary-button" id="reverseButton">
        عكس النص
      </button>

      <div class="result" id="reverseResult"></div>
    `;

  }


  if (type === "upper" || type === "lower") {

    return `
      <textarea id="caseInput"
        placeholder="اكتب النص"></textarea>

      <button class="primary-button" id="caseButton">
        تحويل
      </button>

      <div class="result" id="caseResult"></div>
    `;

  }


  if (type === "clean") {

    return `
      <textarea id="cleanInput"
        placeholder="ضع النص هنا"></textarea>

      <button class="primary-button" id="cleanButton">
        تنظيف النص
      </button>

      <div class="result" id="cleanResult"></div>
    `;

  }


  if (type === "sort") {

    return `
      <textarea id="sortInput"
        placeholder="كل كلمة أو سطر في سطر منفصل"></textarea>

      <button class="primary-button" id="sortButton">
        ترتيب
      </button>

      <div class="result" id="sortResult"></div>
    `;

  }


  if (type === "lorem") {

    return `
      <label>عدد الكلمات</label>

      <input
        id="loremCount"
        type="number"
        value="50"
        min="1"
        max="1000">

      <button class="primary-button" id="loremButton">
        إنشاء النص
      </button>

      <div class="result" id="loremResult"></div>
    `;

  }


  if (type === "uuid") {

    return `
      <button class="primary-button" id="uuidButton">
        إنشاء UUID
      </button>

      <div class="result" id="uuidResult"></div>
    `;

  }


  if (type === "timer") {

    return `
      <label>عدد الثواني</label>

      <input
        id="timerInput"
        type="number"
        value="60"
        min="1">

      <button class="primary-button" id="timerButton">
        تشغيل المؤقت
      </button>

      <div class="result" id="timerResult">
        60
      </div>
    `;

  }


  if (type === "stopwatch") {

    return `
      <button class="primary-button" id="stopwatchButton">
        تشغيل
      </button>

      <div class="result" id="stopwatchResult">
        00:00:00
      </div>
    `;

  }


  if (type === "age") {

    return `
      <label>تاريخ الميلاد</label>

      <input
        id="birthDate"
        type="date">

      <button class="primary-button" id="ageButton">
        احسب العمر
      </button>

      <div class="result" id="ageResult"></div>
    `;

  }


  if (type === "dateDiff") {

    return `
      <label>التاريخ الأول</label>

      <input id="dateOne" type="date">

      <label>التاريخ الثاني</label>

      <input id="dateTwo" type="date">

      <button class="primary-button" id="dateDiffButton">
        احسب الفرق
      </button>

      <div class="result" id="dateDiffResult"></div>
    `;

  }


  if (type === "units") {

    return `
      <label>القيمة بالمتر</label>

      <input
        id="meterValue"
        type="number"
        value="1">

      <button class="primary-button" id="unitsButton">
        تحويل
      </button>

      <div class="result" id="unitsResult"></div>
    `;

  }


  if (type === "qr") {

    return `
      <input
        id="qrInput"
        placeholder="اكتب رابط أو نص">

      <button class="primary-button" id="qrButton">
        إنشاء QR
      </button>

      <div
        class="result"
        id="qrResult"
        style="text-align:center">
      </div>
    `;

  }


  if (type === "wifi") {

    return `
      <input
        id="wifiName"
        placeholder="اسم الشبكة">

      <input
        id="wifiPassword"
        placeholder="كلمة مرور الشبكة">

      <select id="wifiSecurity">
        <option value="WPA">WPA / WPA2</option>
        <option value="WEP">WEP</option>
        <option value="nopass">بدون كلمة مرور</option>
      </select>

      <button class="primary-button" id="wifiButton">
        إنشاء QR
      </button>

      <div
        class="result"
        id="wifiResult"
        style="text-align:center">
      </div>
    `;

  }


  if (type === "contact") {

    return `
      <input
        id="contactName"
        placeholder="الاسم">

      <input
        id="contactPhone"
        placeholder="رقم الهاتف">

      <input
        id="contactEmail"
        placeholder="البريد الإلكتروني">

      <button class="primary-button" id="contactButton">
        إنشاء QR
      </button>

      <div
        class="result"
        id="contactResult"
        style="text-align:center">
      </div>
    `;

  }


  if (type === "regex") {

    return `
      <input
        id="regexPattern"
        placeholder="مثال: ^[0-9]+$">

      <textarea
        id="regexText"
        placeholder="النص المراد اختباره"></textarea>

      <button class="primary-button" id="regexButton">
        اختبار
      </button>

      <div class="result" id="regexResult"></div>
    `;

  }


  if (type === "meta") {

    return `
      <input
        id="metaTitle"
        placeholder="عنوان الموقع">

      <input
        id="metaDescription"
        placeholder="وصف الموقع">

      <button class="primary-button" id="metaButton">
        إنشاء Meta Tags
      </button>

      <div class="result" id="metaResult"></div>
    `;

  }


  if (type === "http") {

    return `
      <input
        id="httpInput"
        type="number"
        placeholder="مثال: 404">

      <button class="primary-button" id="httpButton">
        شرح الكود
      </button>

      <div class="result" id="httpResult"></div>
    `;

  }


  // أدوات الملفات
  if (type === "file") {

    return `
      <input id="toolFile" type="file">

      <div
        class="result"
        id="fileResult">
        اختار الملف من جهازك.
      </div>
    `;

  }


  // أي أداة لم يتم تنفيذها بعد
  return `
    <div class="result">
      <h3>${tool[0]}</h3>
      <p>
        واجهة الأداة جاهزة داخل OMAR TOOLS.
        سيتم إضافة المعالجة الكاملة للملفات في مرحلة التطوير التالية.
      </p>
    </div>
  `;

}


// ==========================================
// تشغيل الأدوات
// ==========================================

function setupTool(type) {

  // عداد الكلمات
  if (type === "counter") {

    const input = document.getElementById("counterInput");
    const result = document.getElementById("counterResult");

    input.addEventListener("input", () => {

      const text = input.value;

      const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

      const chars = text.length;

      const noSpaces =
        text.replace(/\s/g, "").length;

      result.textContent =
        `الكلمات: ${words}
الحروف: ${chars}
بدون مسافات: ${noSpaces}`;

    });

  }


  // JSON
  if (type === "json") {

    document.getElementById("jsonButton")
      .addEventListener("click", () => {

        const input =
          document.getElementById("jsonInput").value;

        try {

          const parsed = JSON.parse(input);

          document.getElementById("jsonResult")
            .textContent =
            JSON.stringify(parsed, null, 2);

        } catch (error) {

          document.getElementById("jsonResult")
            .textContent =
            "❌ الـ JSON غير صحيح.";

        }

      });

  }


  // Base64
  if (type === "base64encode" || type === "base64decode") {

    document.getElementById("base64Button")
      .addEventListener("click", () => {

        const value =
          document.getElementById("base64Input").value;

        try {

          let result;

          if (type === "base64encode") {

            result =
              btoa(
                unescape(
                  encodeURIComponent(value)
                )
              );

          } else {

            result =
              decodeURIComponent(
                escape(
                  atob(value)
                )
              );

          }

          document.getElementById("base64Result")
            .textContent = result;

        } catch {

          document.getElementById("base64Result")
            .textContent =
            "❌ البيانات غير صحيحة.";

        }

      });

  }


  // URL
  if (type === "urlencode" || type === "urldecode") {

    document.getElementById("urlButton")
      .addEventListener("click", () => {

        const value =
          document.getElementById("urlInput").value;

        try {

          const result =
            type === "urlencode"
              ? encodeURIComponent(value)
              : decodeURIComponent(value);

          document.getElementById("urlResult")
            .textContent = result;

        } catch {

          document.getElementById("urlResult")
    
