
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "استخدم POST فقط" });
  }

  const message = req.body?.message;
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "اكتب سؤالك" });
  }

  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "مفتاح الذكاء الاصطناعي غير مضبوط"
    });
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          instructions: "أنت Omar AI، مساعد مفيد، وأجب بالمصرية إذا تحدث المستخدم بالمصرية.",
          input: message.trim()
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        error: "تعذر الحصول على رد من خدمة الذكاء الاصطناعي"
      });
    }

    const answer = (data.output || [])
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("\n");

    return res.status(200).json({ answer });
  } catch {
    return res.status(500).json({ error: "حصل خطأ في الاتصال" });
  }
          }
        
