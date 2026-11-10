'use strict';
const products = [
  {
    "id": "notebook",
    "name": "Блокнот",
    "price": 100,
    "description": "Для мыслей и ежедневных планов.",
    "specs": "Блокнот для записей.",
    "category": "Бумага и планы",
    "image": "notebook.jpg",
    "alt": "Блокнот и ручка на деревянном столе",
    "photoId": 7319184
  },
  {
    "id": "mug",
    "name": "Кружка",
    "price": 200,
    "description": "Для тёплых пауз между делами.",
    "specs": "Керамическая кружка.",
    "category": "Для уютных пауз",
    "image": "mug.jpg",
    "alt": "Фактурная керамическая кружка в мягком свете",
    "photoId": 20843712
  },
  {
    "id": "stickers",
    "name": "Стикеры",
    "price": 50,
    "description": "Чтобы важное осталось на виду.",
    "specs": "Самоклеящиеся листочки для заметок.",
    "category": "Бумага и планы",
    "image": "stickers.jpg",
    "alt": "Пастельные стикеры рядом с карандашами",
    "photoId": 6193093
  },
  {
    "id": "planner",
    "name": "Планер",
    "price": 350,
    "description": "Большие идеи — маленькими шагами.",
    "specs": "Открытый планер для списков и задач.",
    "category": "Бумага и планы",
    "image": "planner.jpg",
    "alt": "Еженедельный планер с ручкой",
    "photoId": 7439132
  },
  {
    "id": "pencils",
    "name": "Карандаши",
    "price": 150,
    "description": "Для первых набросков и новых идей.",
    "specs": "Набор деревянных карандашей.",
    "category": "Порядок на столе",
    "image": "pencils.jpg",
    "alt": "Деревянные карандаши на светлом фоне",
    "photoId": 8386693
  },
  {
    "id": "clips",
    "name": "Зажимы для бумаги",
    "price": 120,
    "description": "Собрать вместе всё самое нужное.",
    "specs": "Канцелярские зажимы для листов и заметок.",
    "category": "Порядок на столе",
    "image": "clips.jpg",
    "alt": "Розовые зажимы для бумаги на пастельном фоне",
    "photoId": 9742999
  },
  {
    "id": "candle",
    "name": "Свеча",
    "price": 450,
    "description": "Маленький ритуал в конце дня.",
    "specs": "Декоративная свеча в стеклянной баночке.",
    "category": "Для уютных пауз",
    "image": "candle.jpg",
    "alt": "Свеча в стеклянной баночке с лентой",
    "photoId": 8101554
  },
  {
    "id": "plant",
    "name": "Суккулент",
    "price": 390,
    "description": "Немного зелени рядом с вами.",
    "specs": "Комнатный суккулент в белом кашпо.",
    "category": "Для уютных пауз",
    "image": "plant.jpg",
    "alt": "Зелёный суккулент в белом кашпо",
    "photoId": 32513154
  },
  {
    "id": "hourglass",
    "name": "Песочные часы",
    "price": 590,
    "description": "Напоминание сделать паузу.",
    "specs": "Декоративные стеклянные песочные часы.",
    "category": "Порядок на столе",
    "image": "hourglass.jpg",
    "alt": "Прозрачные песочные часы со светлым песком",
    "photoId": 15556380
  },
  {
    "id": "pen",
    "name": "Ручка",
    "price": 180,
    "description": "Мысли, которым пора на бумагу.",
    "specs": "Чёрная ручка для ежедневных записей.",
    "category": "Бумага и планы",
    "image": "pen.jpg",
    "alt": "Чёрная ручка и канцелярские зажимы",
    "photoId": 7054777
  },
  {
    "id": "lamp",
    "name": "Настольная лампа",
    "price": 1490,
    "description": "Тёплый свет для вечерних идей.",
    "specs": "Настольный светильник для уютного уголка.",
    "category": "Порядок на столе",
    "image": "lamp.jpg",
    "alt": "Настольная лампа в тёплом утреннем свете",
    "photoId": 11577992
  },
  {
    "id": "teapot",
    "name": "Заварочный чайник",
    "price": 890,
    "description": "Пауза, которой хочется поделиться.",
    "specs": "Керамический чайник с цветочным узором.",
    "category": "Для уютных пауз",
    "image": "teapot.jpg",
    "alt": "Чайник с цветочным узором на столе",
    "photoId": 10045886
  },
  {
    "id": "colors",
    "name": "Цветные карандаши",
    "price": 290,
    "description": "Добавить немного цвета в обычный день.",
    "specs": "Набор цветных карандашей в подставке.",
    "category": "Бумага и планы",
    "image": "colors.jpg",
    "alt": "Цветные карандаши в сетчатой подставке",
    "photoId": 31267731
  },
  {
    "id": "tape",
    "name": "Декоративный скотч",
    "price": 160,
    "description": "Для заметок с характером.",
    "specs": "Набор бумажных лент для оформления.",
    "category": "Бумага и планы",
    "image": "tape.jpg",
    "alt": "Рулоны декоративного скотча на светлом фоне",
    "photoId": 8250941
  },
  {
    "id": "journal-kit",
    "name": "Набор для дневника",
    "price": 650,
    "description": "Сохранить день в маленьких деталях.",
    "specs": "Стикеры и декоративные материалы для дневника.",
    "category": "Бумага и планы",
    "image": "journal-kit.jpg",
    "alt": "Материалы для творческого дневника",
    "photoId": 33740763
  },
  {
    "id": "sketchbook",
    "name": "Скетчбук",
    "price": 320,
    "description": "Место для линий без правил.",
    "specs": "Альбом для рисунков и набросков.",
    "category": "Бумага и планы",
    "image": "sketchbook.jpg",
    "alt": "Рисование карандашом в скетчбуке",
    "photoId": 12425928
  },
  {
    "id": "stationery-kit",
    "name": "Набор для заметок",
    "price": 250,
    "description": "Собрать мысли и разложить по местам.",
    "specs": "Блоки для заметок и канцелярские скрепки.",
    "category": "Порядок на столе",
    "image": "stationery-kit.jpg",
    "alt": "Блоки для заметок и скрепки на светлом фоне",
    "photoId": 6991388
  },
  {
    "id": "vase",
    "name": "Керамическая ваза",
    "price": 690,
    "description": "Место для одной веточки и хорошего света.",
    "specs": "Небольшая декоративная ваза из керамики.",
    "category": "Для уютных пауз",
    "image": "vase.jpg",
    "alt": "Круглая белая керамическая ваза",
    "photoId": 8516708
  }
];
const cart = new Map();
const favorites = new Set();
let lastRemoved = null;
const money = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
const $ = id => document.getElementById(id);
function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}
function button(label, action, id, text) {
  const node = element('button', action === 'remove' ? 'remove' : '', text);
  node.type = 'button'; node.dataset.action = action; node.dataset.id = id;
  node.setAttribute('aria-label', label);
  return node;
}
let feedbackTimer;
function announce(message) {
  $('announcement').textContent = message;
  $('feedback').textContent = message; $('feedback').classList.add('active');
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => $('feedback').classList.remove('active'), 3500);
}
function renderProducts() {
  for (const product of products) {
    const card = element('article', 'product');
    card.dataset.category = product.category;
    card.dataset.productId = product.id;
    const imageBox = element('div', 'product-image');
    const img = element('img');
    img.src = `assets/${product.image}`; img.alt = product.alt; img.width = 640; img.height = 480;
    if (product.id !== products[0].id) img.loading = 'lazy';
    img.addEventListener('error', () => { img.hidden = true; imageBox.prepend(element('span', 'image-fallback', product.name)); });
    const favorite = button(`В избранное: ${product.name}`, 'favorite', product.id, '♡');
    favorite.className = 'favorite'; favorite.setAttribute('aria-pressed', 'false');
    imageBox.append(img, favorite);
    const body = element('div', 'product-body');
    const top = element('div', 'product-top');
    top.append(element('h3', '', product.name), element('strong', 'price', money.format(product.price)));
    const details = element('details');
    details.append(element('summary', '', 'Подробнее'), element('p', '', product.specs));
    const add = button(`Добавить товар «${product.name}» в корзину`, 'add', product.id, 'В корзину  +');
    add.className = 'add';
    const status = element('p', 'product-status'); status.id = `status-${product.id}`;
    body.append(element('p', 'product-category', product.category), top, element('p', 'description', product.description), details, add, status);
    card.append(imageBox, body); $('products').append(card);
  }
}
function addProduct(id) {
  if (!products.some(p => p.id === id)) return;
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  announce(`${products.find(p => p.id === id).name}: добавлено. В корзине ${cart.get(id)}.`);
}
function changeQuantity(id, delta) {
  if (!cart.has(id)) return;
  const nextQuantity = cart.get(id) + delta;
  if (nextQuantity <= 0) {
    removeProduct(id);
    return;
  }
  cart.set(id, nextQuantity);
  renderCart(); announce('Количество обновлено. Итого ' + $('cart-total').textContent);
}
function removeProduct(id) {
  if (!cart.has(id)) return;
  lastRemoved = { id, quantity: cart.get(id) };
  cart.delete(id); renderCart(); announce('Товар удалён. Можно отменить удаление.');
}
function undoRemoval() {
  if (!lastRemoved) return;
  const { id, quantity } = lastRemoved;
  cart.set(id, (cart.get(id) || 0) + quantity); lastRemoved = null;
  renderCart();
  document.querySelector(`#cart-items [data-id="${id}"][data-action="plus"]`).focus({ preventScroll: true });
  announce('Удаление отменено. Итого ' + $('cart-total').textContent);
}
function renderCart() {
  const active = document.activeElement;
  const focus = active && active.closest('#cart-items') ? { id: active.dataset.id, action: active.dataset.action } : null;
  const rows = [];
  let count = 0, total = 0;
  for (const [id, quantity] of cart) {
    const product = products.find(p => p.id === id);
    count += quantity; total += quantity * product.price;
    const row = element('div', 'cart-row');
    const head = element('div', 'row-head');
    head.append(element('h3', '', product.name), element('strong', '', money.format(product.price * quantity)));
    const controls = element('div', 'row-bottom');
    const stepper = element('div', 'quantity');
    const minus = button(quantity === 1 ? `Убрать из корзины: ${product.name}` : `Уменьшить количество: ${product.name}`, 'minus', id, '−');
    const number = element('span', '', String(quantity)); number.setAttribute('aria-label', `Количество: ${quantity}`);
    stepper.append(minus, number, button(`Увеличить количество: ${product.name}`, 'plus', id, '+'));
    controls.append(stepper, button(`Удалить товар «${product.name}»`, 'remove', id, 'Удалить'));
    row.append(head, element('p', 'unit-price', `${money.format(product.price)} / шт.`), controls); rows.push(row);
  }
  if (!rows.length) {
    const empty = element('div', 'empty');
    const link = element('a', '', 'Перейти к товарам ↗'); link.href = '#catalog';
    empty.append(element('span', 'empty-symbol', 'Пока здесь тихо'), element('p', '', 'Добавьте что-нибудь для своего рабочего стола.'), link); rows.push(empty);
  }
  $('cart-items').replaceChildren(...rows);
  $('cart-count').textContent = String(count); $('cart-count').setAttribute('aria-label', `Товаров в корзине: ${count}`);
  $('cart-total').textContent = money.format(total);
  $('mobile-cart-count').textContent = String(count);
  $('mobile-cart-total').textContent = money.format(total);
  for (const product of products) $('status-' + product.id).textContent = cart.has(product.id) ? `В корзине: ${cart.get(product.id)}` : '';
  $('undo-panel').hidden = !lastRemoved;
  if (lastRemoved) $('undo-message').textContent = `${products.find(p => p.id === lastRemoved.id).name} — удалено`;
  if (focus) {
    let target = document.querySelector(`#cart-items [data-id="${focus.id}"][data-action="${focus.action}"]`);
    if (target && target.disabled) target = document.querySelector(`#cart-items [data-id="${focus.id}"][data-action="plus"]`);
    (target || $('undo')).focus({ preventScroll: true });
  }
  updateSticky();
}
function updateSticky() { $('cart').classList.toggle('fits', $('cart').offsetHeight + 48 < window.innerHeight); }
document.addEventListener('click', event => {
  const control = event.target.closest('button[data-action]');
  if (!control) return;
  const { id, action } = control.dataset;
  if (action === 'favorite') toggleFavorite(id);
  if (action === 'add') addProduct(id);
  if (action === 'plus') changeQuantity(id, 1);
  if (action === 'minus') changeQuantity(id, -1);
  if (action === 'remove') removeProduct(id);
});
$('undo').addEventListener('click', undoRemoval);
window.addEventListener('resize', updateSticky);
renderProducts(); renderCart();

// Фильтры меняют видимость, сохраняя состояние карточек и корзины.
let selectedCategory = 'Все вещи';
function filterProducts() {
  const normalize = text => text.toLocaleLowerCase('ru').replaceAll('ё', 'е');
  const query = normalize($('catalog-search').value.trim());
  let count = 0;
  for (const card of [...$('products').children]) {
    const product = products.find(p => p.id === card.dataset.productId);
    card.hidden = ($('favorites-only').getAttribute('aria-pressed') === 'true' && !favorites.has(product.id)) || !(selectedCategory === 'Все вещи' || product.category === selectedCategory) || !normalize(`${product.name} ${product.description}`).includes(query);
    if (!card.hidden) count++;
  }
  $('result-count').textContent = `Показано: ${count} из ${products.length}`;
  $('no-results').hidden = count !== 0;
}
$('catalog-search').addEventListener('input', filterProducts);
for (const control of document.querySelectorAll('[data-category-filter]')) {
  control.addEventListener('click', () => {
    selectedCategory = control.dataset.categoryFilter;
    for (const other of document.querySelectorAll('[data-category-filter]')) other.setAttribute('aria-pressed', String(other === control));
    filterProducts();
  });
}
filterProducts();

// Избранное хранится в текущей вкладке.
function toggleFavorite(id) {
  if (!products.some(p => p.id === id)) return;
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  for (const control of document.querySelectorAll('[data-action="favorite"]')) {
    const saved = favorites.has(control.dataset.id);
    control.textContent = saved ? '♥' : '♡';
    control.setAttribute('aria-pressed', String(saved));
    const product = products.find(p => p.id === control.dataset.id);
    control.setAttribute('aria-label', `${saved ? 'Убрать из избранного' : 'В избранное'}: ${product.name}`);
  }
  $('favorite-count').textContent = String(favorites.size);
  const lostFocus = document.activeElement?.dataset.action === 'favorite' && document.activeElement?.dataset.id === id;
  filterProducts();
  if (lostFocus && $('favorites-only').getAttribute('aria-pressed') === 'true' && !favorites.has(id)) $('favorites-only').focus({ preventScroll: true });
  announce(favorites.has(id) ? 'Добавлено в избранное.' : 'Убрано из избранного.');
}
$('favorites-only').addEventListener('click', () => {
  const control = $('favorites-only');
  control.setAttribute('aria-pressed', String(control.getAttribute('aria-pressed') !== 'true'));
  filterProducts();
});
function sortProducts() {
  const mode = $('catalog-sort').value;
  const order = [...products].sort((a, b) => mode === 'cheap' ? a.price - b.price : mode === 'expensive' ? b.price - a.price : mode === 'name' ? a.name.localeCompare(b.name, 'ru') : products.indexOf(a) - products.indexOf(b));
  for (const product of order) $('products').append(document.querySelector(`[data-product-id="${product.id}"]`));
}
$('catalog-sort').addEventListener('change', sortProducts);
$('reset-filters').addEventListener('click', () => {
  selectedCategory = 'Все вещи'; $('catalog-search').value = ''; $('catalog-sort').value = 'default';
  $('favorites-only').setAttribute('aria-pressed', 'false');
  for (const control of document.querySelectorAll('[data-category-filter]')) control.setAttribute('aria-pressed', String(control.dataset.categoryFilter === selectedCategory));
  sortProducts(); filterProducts();
});
const bundles = [
  { name: 'Чистый лист', description: 'Начать день с пары строк и понятного плана.', ids: ['notebook', 'pen', 'stickers'] },
  { name: 'Тёплая пауза', description: 'Отложить дела. Заварить чай. Просто выдохнуть.', ids: ['mug', 'teapot', 'candle'] },
  { name: 'Время рисовать', description: 'Для набросков, цвета и идей без дедлайна.', ids: ['sketchbook', 'colors', 'tape'] }
];
function addBundle(index) {
  const bundle = bundles[index]; if (!bundle) return;
  for (const id of bundle.ids) cart.set(id, (cart.get(id) || 0) + 1);
  renderCart(); $('bundle-status').textContent = `Набор «${bundle.name}» добавлен: 3 вещи.`;
  announce($('bundle-status').textContent);
}
for (const [index, bundle] of bundles.entries()) {
  const card = element('article', 'bundle-card');
  const sum = bundle.ids.reduce((total, id) => total + products.find(p => p.id === id).price, 0);
  card.append(element('span', 'eyebrow', `НАБОР 0${index + 1}`), element('h3', '', bundle.name), element('p', '', bundle.description));
  const list = element('p', 'small', bundle.ids.map(id => products.find(p => p.id === id).name).join(' + '));
  const add = element('button', 'button primary', `Добавить набор · ${money.format(sum)}`); add.type = 'button';
  add.addEventListener('click', () => addBundle(index)); card.append(list, add); $('bundles-list').append(card);
}
let previousPick = '';
function pickProduct() {
  const pool = products.filter(p => p.id !== previousPick);
  const product = pool[Math.floor(Math.random() * pool.length)]; previousPick = product.id;
  const image = element('img'); image.src = `assets/${product.image}`; image.alt = product.alt; image.width = 240; image.height = 180;
  image.addEventListener('error', () => { image.hidden = true; });
  const copy = element('div'); copy.append(element('p', 'eyebrow', 'ВАША СЛУЧАЙНАЯ НАХОДКА'), element('h3', '', product.name), element('p', '', product.description));
  const add = button(`Добавить товар «${product.name}» в корзину`, 'add', product.id, `В корзину · ${money.format(product.price)}`); add.className = 'button primary';
  copy.append(add); $('random-result').replaceChildren(image, copy); $('random-result').hidden = false;
  announce(`Случайная находка: ${product.name}, ${money.format(product.price)}`);
}
$('pick-product').addEventListener('click', pickProduct);

for (const tile of document.querySelectorAll('[data-collection]')) {
  tile.addEventListener('click', () => {
    selectedCategory = tile.dataset.collection;
    $('catalog-search').value = '';
    $('favorites-only').setAttribute('aria-pressed', 'false');
    for (const control of document.querySelectorAll('[data-category-filter]')) control.setAttribute('aria-pressed', String(control.dataset.categoryFilter === selectedCategory));
    filterProducts();
  });
}
// Высота корзины меняется и при переносе текста после загрузки страницы.
if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateSticky).observe($('cart'));
