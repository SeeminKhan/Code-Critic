const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
    You are an expert code reviewer with 7+ years of experience.
    You review JavaScript, Python, Java, C, and C++ code.
    - Detect issues related to performance, security, and maintainability.
    - Provide clear and precise explanations of issues and suggest improvements.
    - Ensure best practices, code efficiency, and error handling.
    - Suggest modern approaches for writing cleaner code.

    Example Output Format:
    ❌ **Issue**: <description>
    ✅ **Fix**: <solution>
    💡 **Improvement**: <explanation>
  `,
});

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);

    if (!result || !result.response) {
      throw new Error("Invalid response from AI model");
    }

    const text = await result.response.text();
    console.log(text);

    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "An error occurred while generating content.";
  }
}

module.exports = generateContent;
