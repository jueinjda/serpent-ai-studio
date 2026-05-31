import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SerpentAIStudio() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Serpent AI online 🐍 — continuous reasoning engine active.",
    },
  ]);

  const [input, setInput] = useState("");
  const [mode, setMode] = useState("Co-thinker");

  const fakeSerpentResponse = (userText) => {
    const base = `You asked: ${userText}`;

    const expansion =
      "\n\n🧠 Expansion: This can be improved into a modular system with reusable AI reasoning blocks.";

    const hook =
      "\n\n🔁 Next: Do you want me to evolve this into architecture mode or keep it simple?";

    return base + expansion + hook;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };

    const aiMsg = {
      role: "ai",
      content: fakeSerpentResponse(input),
    };

    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="grid grid-cols-3 h-screen bg-black text-white">
      {/* Left Panel */}
      <div className="p-4 border-r border-gray-800">
        <h2 className="text-lg font-bold">🌍 Languages</h2>
        <ul className="mt-4 space-y-2 text-sm opacity-80">
          <li>Python 🐍</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C++</li>
          <li>SQL</li>
        </ul>
      </div>

      {/* Center Chat */}
      <div className="flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                className={`${
                  m.role === "user" ? "bg-blue-600" : "bg-gray-900"
                }`}
              >
                <CardContent className="p-3 whitespace-pre-wrap text-sm">
                  {m.content}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="p-3 border-t border-gray-800 flex gap-2">
          <input
            className="flex-1 p-2 bg-black border border-gray-700 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Talk to Serpent AI..."
          />
          <Button onClick={sendMessage}>Run 🐍</Button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-4 border-l border-gray-800">
        <h2 className="text-lg font-bold">🧠 Serpent Core</h2>
        <p className="mt-4 text-sm opacity-80">
          Mode: {mode}
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p>⚙️ Engine: Active</p>
          <p>🔁 Loop: Continuous</p>
          <p>🧠 State: Tracking</p>
        </div>

        <Button
          className="mt-6"
          onClick={() =>
            setMode(mode === "Co-thinker" ? "Architect" : "Co-thinker")
          }
        >
          Switch Mode
        </Button>
      </div>
    </div>
  );
}
