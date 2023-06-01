import News from "../components/News";

const Main = () => {
    return <>
        <News/>
        <h1>Главная страница</h1>
        <div>
        <img class="Banner" src='https://techport-st.cdn.ngenix.net/_mod_files/ce_images/eshop/p1028166-3mw.jpg'/>
      <a href="#action">Акция</a>
      <button>Заказать</button>
    </div>
    <div>
        <img class="Banner_2" src='http://new.faunavet.ru/uploads/catalog/products/mini/699.jpg'/>
      <a href="#action">Акция</a>
      <button>Заказать</button>
    </div>
    <div>
        <img class="Banner_3" src='https://dogworry.ru/wp-content/uploads/2018/11/chem-kormit-francuzskogo-buldoga-chtoby-u-nego-ne-bylo-allergii.jpg'/>
      <a href="#action">Акция</a>
      <button>Заказать</button>
    </div>
    </>
}

export default Main;
