const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024
  }
});

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// اختبار السيرفر
app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    name: "OMAR TOOLS",
    owner: "عمر الشريف"
  });
});

// ضغط الصور
app.post("/api/image/compress", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "لم يتم اختيار صورة"
      });
    }

    const quality = Math.min(
      90,
      Math.max(20, Number(req.body.quality) || 70)
    );

    const output = await sharp(req.file.buffer)
      .rotate()
      .jpeg({
        quality: quality,
        mozjpeg: true
      })
      .toBuffer();

    res.set({
      "Content-Type": "image/jpeg",
      "Content-Disposition":
        'attachment; filename="omar-tools-compressed.jpg"'
    });

    res.send(output);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "حصلت مشكلة أثناء ضغط الصورة"
    });
  }
});

// تغيير حجم الصور
app.post("/api/image/resize", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "لم يتم اختيار صورة"
      });
    }

    const width = Math.min(
      5000,
      Math.max(50, Number(req.body.width) || 800)
    );

    const output = await sharp(req.file.buffer)
      .rotate()
      .resize({
        width: width,
        withoutEnlargement: true
      })
      .jpeg({
        quality: 88
      })
      .toBuffer();

    res.set({
      "Content-Type": "image/jpeg",
      "Content-Disposition":
        'attachment; filename="omar-tools-resized.jpg"'
    });

    res.send(output);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "حصلت مشكلة أثناء تغيير حجم الصورة"
    });
  }
});

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  );
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`OMAR TOOLS running on port ${PORT}`);
});
