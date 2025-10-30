import { useDispatch, useSelector } from 'react-redux';
import { DefaultPage } from '../../components/DefaultPage';
import { TypographyH2 } from '../../components/Typography/TypographyH2';
import { removerProduto } from '../../features/counter/counterSlice';
import { RootState } from '../../app/store';
import { TypographyH3 } from '../../components/Typography/TypographyH3';
import { Button } from '../../components/ui/button';
export const CartPage = () => {
  const { items, total } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  let deliveryFee;
  let discount = 0;
  let cartTotal = 0;

  if (items.length === 0) {
    deliveryFee = 0;
  } else {
    deliveryFee = 5;
    discount = total * 0.2;
    cartTotal = total - discount + deliveryFee;
  }

  return (
    <DefaultPage className="min-h-screen">
      <TypographyH2
        text="YOUR CART"
        className="font-extrabold font-poppins 2xl:ml-24 text-4xl 2xl:mb-6 mobile:ml-4 mobile:mb-5"
      />
      <section className="2xl:flex 2xl:flex-row md:flex-row gap-5 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
        <main className="2xl:w-[715px] 2xl:ml-24 2xl:mb-20 2xl:h-[508px] mobile:w-[288px] mobile:h-[389px] mobile:mx-4">
          {items.length === 0 ? (
            <p className="text-gray-400 mt-10 text-center">🛒 Carrinho vazio</p>
          ) : (
            <>
              <ul className="flex-1 overflow-y-auto space-y-4 mb-4">
                {items.map(item => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[99px] h-[99px] object-cover rounded"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-gray-400 text-sm">
                          {item.quantity}x R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => dispatch(removerProduto(item.id))}
                      className="text-red-500 hover:text-red-400 transition"
                    >
                      ❌
                    </Button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </main>
        <aside className="2xl:w-[505px] 2xl:h-[458px] mobile:w-[317px] mobile:h-[390px] mobile:mb-12">
          <div className="mx-6 mt-5 mb-8 2xl:w-[457px] 2xl:h-[401px] mobile:w-[271px] mobile:h-[334px]">
            <TypographyH3 text="Order Summary" className="font-poppins font-bold text-2xl" />
            <div className="my-6 flex flex-col gap-5" role="list">
              <div className="flex justify-between" role="listitem">
                <span className="text-zinc-500 font-poppins font-bold">Subtotal</span>
                <span className="text-gray-950 font-poppins font-bold">R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between" role="listitem">
                <span className="text-zinc-500 font-poppins font-bold">Discount (-20%)</span>
                <span className="text-gray-950 font-poppins font-bold">
                  R$ {discount?.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between" role="listitem">
                <span className="text-zinc-500 font-poppins font-bold">Delivery Fee</span>
                <span className="text-gray-950 font-poppins font-bold">
                  R$ {deliveryFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mt-10" role="listitem">
                <span className="text-zinc-500 font-poppins font-bold">Total</span>
                <span className="text-gray-950 font-poppins font-bold">
                  R$ {cartTotal?.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <input
                placeholder="Add promo code"
                className="w-[326px] h-12 rounded-[62px] pl-5 outline-none border-gray-950 border"
              />
              <button className="w-[119px] h-12 bg-black text-white rounded-[62px]">Apply</button>
            </div>
            <Button className="2xl:w-[457px] h-16 mobile:w-[268px] mobile:h-14 mt-6 rounded-[62px] bg-black text-white">
              Go to Checkout
            </Button>
          </div>
        </aside>
      </section>
    </DefaultPage>
  );
};
