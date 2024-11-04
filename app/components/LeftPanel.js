
export default function LeftPanel() {
    return (
      <div className="fixed top-12 left-0 w-1/2 h-full bg-gray-800 opacity-90 transition-transform transform translate-x-0">
        <div className="p-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 mb-4">
              <img src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/603_neymar.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-white text-lg font-semibold">Nome do Usuário</h2>
            <p className="text-gray-400">Cidade do Usuário</p>
            <p className="text-gray-300 text-sm mt-2">Bio do usuário...</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Editar</button>
          </div>
        </div>
      </div>
    );
  }
  