import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const { theme } = useTheme();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'm just a simple demo chatbot.",
        "Thanks for your message!",
        "How can I assist you further?",
        "I'm here to help!",
        "That's interesting! Tell me more."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { id: prev.length + 2, text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {isOpen && (
        <div className={`w-80 h-96 rounded-lg shadow-xl overflow-hidden flex flex-col ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}>
          {/* Chat header */}
          <div className={`p-4 flex justify-between items-center ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <h3 className="font-semibold">Chat with me</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-purple-500 text-white rounded-br-none'
                        : theme === 'dark'
                        ? 'bg-gray-700 text-white rounded-bl-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className={`flex-1 p-2 rounded-lg border ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-800'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full p-4 ${
          theme === 'dark'
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-purple-500 hover:bg-purple-600'
        } text-white shadow-lg hover:scale-110 transition-transform duration-200`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
}
