import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { removerProduto, limparCarrinho } from '../features/counter/counterSlice';
import { Button } from './ui/button';

export const CartSidePanel = () => {
  const { items, total } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-full p-4 text-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🛒 Meu Carrinho</h2>

      {items.length === 0 ? (
        <p className="text-gray-400 mt-10 text-center">🛒 Carrinho vazio</p>
      ) : (
        <>
          <ul className="flex-1 overflow-y-auto space-y-4 mb-4">
            {items.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-800 rounded-lg p-3 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-gray-400 text-sm">
                      {item.quantity}x R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removerProduto(item.id))}
                  className="text-red-500 hover:text-red-400 transition"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-700 pt-4 flex flex-col gap-2">
            <p className="text-lg font-bold text-right">Total: R$ {total.toFixed(2)}</p>
            <Button
              className="bg-red-600 hover:bg-red-500 text-white w-full"
              onClick={() => dispatch(limparCarrinho())}
            >
              🧹 Limpar Carrinho
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
