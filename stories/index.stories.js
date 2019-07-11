import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileSmoothScroll } from '../dile-smooth-scroll.js';
import '../dile-smooth-scroll.js';

import readme from '../README.md';

storiesOf('dile-scroll', module)
  .addDecorator(withKnobs)
  .add(
    'Scroll demos',
    () => html`
        <style>
  body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2em;
    line-height: 1.5em;
  }
  div.image {
    text-align: center;
    margin-bottom: 20px;
  }
  div.image img {
    max-width: 100%;
    border-radius: 10px;
  }
  #scrollBy {
    position: fixed;
    right: 12px;
    top: 12px;
    padding: 12px;
    background-color: #ddd;
  }
  nav.actions {
    background-color: #ddd;
    padding: 20px;
  }
  #withScroll {
    background-color: #efefef;
    border-radius: 4px;
    margin: 20px 0 0;
    max-height: 200px;
    overflow: scroll;
    padding: 30px 50px;
  }
  #withScroll h2 {
    margin-top: 0;
  }
  </style>
  <dile-smooth-scroll id="scrollComponent"></dile-smooth-scroll>
  <nav class="actions">
    <button @click=${
      () => {
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothScrollToBottom();
      }
    }>Scroll to bottom</button>
    <button @click=${
      () => {
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothScrollElementIntoView(document.getElementById('myList'));
      }
    }>Scroll to list</button>
  </nav>
  <div id="scrollBy">
    <button @click=${
      () => {
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothScrollBy(-200, 0);
      }
    }>Up</button>
    <button @click=${
      () => {
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothScrollBy(200, 0);
      }
    }>Down</button>
  </div>
  <h1>Lorem ipsum!!</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia commodi impedit iste error dolore voluptatibus magni eos atque obcaecati recusandae ipsum veniam quod repudiandae ut repellendus excepturi, ipsam hic.</p>
  <p>Placeat quaerat <b>deserunt et suscipit eligendi vel repudiandae</b>. Laborum quaerat provident asperiores commodi placeat corporis consequatur, deleniti velit. Modi aut porro praesentium, quis reiciendis facilis animi. Dolore, et eos! Voluptates.</p>
  <div class="image"><img src="https://picsum.photos/500/300"></div>
  
  <nav class="actions">

    <button @click=${
      () => {
        let elem = document.getElementById('withScroll');
        console.log(elem);
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothElementScrollTop(elem);
      }
    }>Scroll section to top</button>

  <button @click=${
      () => {
        let elem = document.getElementById('withScroll');
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothElementScrollBottom(elem);
      }
    }>Scroll section to bottom</button>

  <button @click=${
      () => {
        let elem = document.getElementById('withScroll');
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothElementScrollBy(elem, 200, 0);
      }
    }>Scroll down section</button>

  <button @click=${
      () => {
        let elem = document.getElementById('withScroll');
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothElementScrollBy(elem, -200, 0);
      }
    }>Scroll up section</button>
  </nav>

  <div id="withScroll">
    <h2>Block with own scroll</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique praesentium nisi eius vitae architecto dolor nesciunt ipsam delectus sint laboriosam ut sunt ex ipsa reprehenderit quod labore, earum a veritatis.</p>
    <p>Incidunt natus mollitia commodi? Asperiores voluptatum laborum nesciunt, minima cum qui aspernatur fugiat natus recusandae quisquam quo a omnis praesentium, magnam repudiandae quis, ipsam consectetur est porro sapiente aperiam odit.</p>
    <p>Necessitatibus aliquam cumque eum porro nostrum earum perspiciatis odit deleniti officia quis nam nisi, repellat totam quod, praesentium enim accusamus doloremque voluptatem natus omnis. Exercitationem dolores veritatis ipsa eum! Voluptas.</p>
    <p>Ipsam totam omnis officiis beatae sit, eum consequatur debitis illo, nam error nisi laudantium blanditiis mollitia sunt. Quaerat repudiandae repellat animi itaque cupiditate consequuntur, vero ab, ullam numquam, eos distinctio!</p>
    <p>Assumenda quo debitis sed dolor. Officia eveniet, sequi voluptatum hic suscipit mollitia animi voluptates repellat dignissimos veritatis recusandae illo quaerat blanditiis harum adipisci, quod minus debitis obcaecati porro tempore repudiandae?</p>
    <p>Mollitia aliquid asperiores, tenetur suscipit fugiat voluptatem iste dolorum sapiente. Dolorem, tenetur amet? Obcaecati perspiciatis ducimus facilis quaerat ipsam. Ad pariatur dolorum explicabo facilis facere voluptates repellendus id voluptatibus animi!</p>
    <p>Deleniti expedita consequatur accusamus assumenda id neque esse officiis laudantium tempore nam tenetur nesciunt, reiciendis earum mollitia consectetur aspernatur autem quibusdam veritatis placeat delectus adipisci perferendis illum? Fugiat, vel repellendus!</p>
    <p>Ipsam assumenda rem nihil! Doloribus laboriosam tempore voluptatem incidunt iste facilis, at non alias nobis reiciendis ducimus consequuntur, dicta ipsa blanditiis? Inventore consequatur eligendi incidunt cum itaque sunt impedit minus.</p>
    <p>Sint molestiae eligendi praesentium sunt soluta dolorum quas quis, libero ad, nobis harum sequi, assumenda beatae fugiat? A et consequatur beatae optio inventore magnam debitis quaerat, aut provident ratione rerum?</p>
    <p>Quam tempora quaerat beatae fugiat fugit labore necessitatibus officiis, tempore ullam? Sed ducimus cumque excepturi quos iure eos iusto quod veniam reprehenderit doloribus, placeat reiciendis architecto adipisci tempore veritatis fuga!</p>
  </div>
  <p>Qui dicta cumque, tenetur natus at similique id a magnam nihil ipsum ducimus deleniti culpa quos, assumenda fugit. Voluptas qui dicta, vero ipsam dignissimos repellat? Mollitia itaque debitis eos molestias!</p>
  <p>Reprehenderit rem explicabo, nostrum labore vero ea quidem odio laboriosam hic sunt dolores! Ipsa velit nihil fugiat aliquam, provident perspiciatis, veniam, sit aspernatur distinctio unde fugit beatae dolorem praesentium repudiandae?</p>
  <h2>Play with scroll</h2>
  <p>Enim modi soluta, nisi quasi nesciunt sit perferendis sint, quibusdam unde deleniti, ex possimus eveniet obcaecati labore quo illum. Maiores inventore quis placeat recusandae porro rem distinctio ad in repellat?</p>
  <h3>More of that</h3>
  <p>Provident molestias modi magnam sit labore sequi enim praesentium iste ex, quisquam mollitia dolor ratione deleniti ullam fuga impedit asperiores vitae possimus quas eligendi recusandae eos! Voluptatibus aliquam deleniti suscipit?</p>
  <p>Facilis magni reprehenderit quibusdam, ab nisi incidunt facere vel. A nostrum minus enim, obcaecati eos ullam quisquam necessitatibus. Debitis, est in ipsam exercitationem porro illo blanditiis vero ea adipisci laborum?</p>
  <p>Dolorem sequi ex harum? Similique eveniet totam, quibusdam expedita voluptatem deleniti tempore eius maiores ullam quidem fugiat facilis et ratione. <b>Esse voluptate iusto</b>, vel explicabo excepturi recusandae beatae culpa minima!</p>
  <h2>Our Elements</h2>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
    <li>Item 9</li>
    <li>Item 10</li>
  </ul>
  <p>Iusto et excepturi ipsa cum dolore, nemo blanditiis neque veritatis nam perferendis, doloremque consequatur officiis facilis magni. Autem harum quia, inventore ad <b>asperiores placeat nesciunt</b>. Impedit numquam eaque quis tempore?</p>
  <p>Consectetur ab sint laborum quae quasi? Sint provident et, autem cum corporis quia, saepe molestiae debitis tenetur ad dolorem excepturi voluptatum minus voluptas sapiente suscipit molestias ab alias atque asperiores.</p>
  <div class="image"><img src="https://picsum.photos/600/400"></div>
  <hr>
  <p>Dolorem, nemo. Perferendis impedit veritatis quibusdam est aperiam velit esse placeat nemo asperiores eos iste non illo, cumque quas odio delectus quod, nam debitis natus similique. Aut doloremque temporibus maxime?</p>
  <h2>Hello scroll!.actions!</h2>
  <p>Suscipit, at error obcaecati sit, inventore architecto sint deserunt libero fuga perferendis in cum voluptatibus provident aspernatur voluptate debitis mollitia? Impedit cupiditate ab consectetur adipisci recusandae maxime nesciunt nisi doloribus.</p>
  <h3>More heading</h3>
  <p><b>Beatae numquam cumque quae ea</b>. Ullam, placeat distinctio, obcaecati reiciendis id voluptatibus rerum corrupti saepe incidunt explicabo totam laudantium accusamus quaerat odio? Ad rem deserunt accusantium eaque alias animi dignissimos.</p>
  <p>Minus sit ipsa harum ab dicta hic quae officiis, molestias laudantium voluptas, corrupti adipisci voluptates nemo nisi vitae perferendis a, provident dolorem exercitationem quaerat velit in quas! Iure, quasi soluta.</p>
  <p>Inventore fugiat voluptates alias eveniet, libero, quibusdam qui corrupti quis doloremque voluptas perferendis maiores iure ea facere doloribus praesentium nobis sit a eos veritatis officia accusamus fugit quas. Iste, numquam!</p>
  <nav class="actions">
    <button @click=${
      () => {
        let scrollComponent = document.getElementById('scrollComponent');
        scrollComponent.smoothScrollToTop();
      }
    }>Scroll to top</button>

  </nav>
      `,
  );