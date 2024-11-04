import { useState } from 'react';

export default function Chat() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      setMensagens([...mensagens, mensagem]);
      setMensagem('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') enviarMensagem();
  };

  return (
    <div className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-20 p-4 flex flex-col">
      <div className="flex-grow overflow-y-auto mb-2">
        {mensagens.map((msg, index) => (
          <div key={index} className="bg-blue-500 text-white p-3 rounded-lg self-end mb-2">{msg}</div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="flex-grow p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
        />
        <button onClick={enviarMensagem} className="bg-green-600 text-white p-3 rounded-full hover:bg-green-500 ">➤</button>
      </div>
    </div>
  );
}
