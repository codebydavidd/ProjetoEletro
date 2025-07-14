// Sample product data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 8999.99,
        image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "O mais avançado iPhone com chip A17 Pro, câmera profissional e design em titânio.",
        category: "smartphones",
        badge: "Novo",
        colors: ["Preto", "Branco", "Azul", "Dourado"],
        specifications: {
            "Tela": "6.1 Super Retina XDR",
            "Processador": "A17 Pro",
            "Câmera": "48MP + 12MP + 12MP",
            "Armazenamento": "128GB/256GB/512GB/1TB"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 7499.99,
        image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Galaxy S24 com inteligência artificial avançada e câmera de 200MP.",
        category: "smartphones",
        badge: "Oferta",
        colors: ["Preto", "Branco", "Violeta"],
        specifications: {
            "Tela": "6.2 Dynamic AMOLED 2X",
            "Processador": "Snapdragon 8 Gen 3",
            "Câmera": "200MP + 50MP + 12MP",
            "Armazenamento": "128GB/256GB"
        }
    },
    {
        id: 3,
        name: "Xiaomi 14 Ultra",
        price: 5999.99,
        image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Xiaomi 14 Ultra com câmera Leica e performance excepcional.",
        category: "smartphones",
        badge: "Bestseller",
        colors: ["Preto", "Branco", "Verde"],
        specifications: {
            "Tela": "6.73 LTPO AMOLED",
            "Processador": "Snapdragon 8 Gen 3",
            "Câmera": "50MP Leica + 50MP + 50MP + 50MP",
            "Armazenamento": "256GB/512GB/1TB"
        }
    },
    {
        id: 4,
        name: "Google Pixel 8 Pro",
        price: 6799.99,
        image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Pixel 8 Pro com IA avançada do Google e câmera computacional.",
        category: "smartphones",
        badge: "Novo",
        colors: ["Preto", "Branco", "Azul"],
        specifications: {
            "Tela": "6.7 LTPO OLED",
            "Processador": "Google Tensor G3",
            "Câmera": "50MP + 48MP + 48MP",
            "Armazenamento": "128GB/256GB/512GB"
        }
    },
    {
        id: 5,
        name: "MacBook Pro M3",
        price: 12999.99,
        image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "MacBook Pro com chip M3, ideal para profissionais criativos e desenvolvedores.",
        category: "laptops",
        badge: "Destaque",
        colors: ["Cinza Espacial", "Prateado"],
        specifications: {
            "Tela": "14 Liquid Retina XDR",
            "Processador": "Apple M3",
            "Memória": "16GB/32GB",
            "Armazenamento": "512GB/1TB/2TB"
        }
    },
    {
        id: 6,
        name: "Dell XPS 13",
        price: 8999.99,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Ultrabook Dell XPS 13 com processador Intel Core i7 e design premium.",
        category: "laptops",
        badge: "Novo",
        colors: ["Preto", "Prateado"],
        specifications: {
            "Tela": "13.4 InfinityEdge",
            "Processador": "Intel Core i7",
            "Memória": "16GB",
            "Armazenamento": "512GB SSD"
        }
    },
    {
        id: 7,
        name: "Lenovo ThinkPad X1 Carbon",
        price: 9999.99,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "ThinkPad X1 Carbon com design ultraleve e segurança empresarial.",
        category: "laptops",
        badge: "Profissional",
        colors: ["Preto"],
        specifications: {
            "Tela": "14 WUXGA IPS",
            "Processador": "Intel Core i7",
            "Memória": "16GB/32GB",
            "Armazenamento": "512GB/1TB SSD"
        }
    },
    {
        id: 8,
        name: "ASUS ROG Strix G15",
        price: 7999.99,
        image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Notebook gamer ASUS ROG com RTX 4060 e performance extrema.",
        category: "laptops",
        badge: "Gamer",
        colors: ["Preto", "Cinza"],
        specifications: {
            "Tela": "15.6 Full HD 144Hz",
            "Processador": "AMD Ryzen 7",
            "Placa de Vídeo": "RTX 4060",
            "Memória": "16GB",
            "Armazenamento": "512GB SSD"
        }
    },
    {
        id: 9,
        name: "iPad Pro 12.9",
        price: 6999.99,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "iPad Pro com chip M2, ideal para criação de conteúdo e produtividade.",
        category: "tablets",
        badge: "Oferta",
        colors: ["Cinza Espacial", "Prateado"],
        specifications: {
            "Tela": "12.9 Liquid Retina XDR",
            "Processador": "Apple M2",
            "Câmera": "12MP + 10MP",
            "Armazenamento": "128GB/256GB/512GB/1TB"
        }
    },
    {
        id: 10,
        name: "Samsung Galaxy Tab S9",
        price: 4999.99,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Tablet Samsung Galaxy Tab S9 com S Pen incluída e tela AMOLED.",
        category: "tablets",
        badge: "Novo",
        colors: ["Preto", "Creme", "Lavanda"],
        specifications: {
            "Tela": "11 Dynamic AMOLED 2X",
            "Processador": "Snapdragon 8 Gen 2",
            "Câmera": "13MP + 6MP",
            "Armazenamento": "128GB/256GB"
        }
    },
    {
        id: 11,
        name: "Microsoft Surface Pro 9",
        price: 8499.99,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Surface Pro 9 2-em-1 com processador Intel Core i7 e versatilidade total.",
        category: "tablets",
        badge: "Versátil",
        colors: ["Preto", "Platina", "Azul"],
        specifications: {
            "Tela": "13 PixelSense Flow",
            "Processador": "Intel Core i7",
            "Memória": "16GB",
            "Armazenamento": "256GB/512GB/1TB"
        }
    },
    {
        id: 12,
        name: "AirPods Pro 2",
        price: 2299.99,
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "AirPods Pro 2 com cancelamento de ruído ativo e audio espacial.",
        category: "acessorios",
        badge: "Bestseller",
        colors: ["Branco"],
        specifications: {
            "Cancelamento de Ruído": "Ativo",
            "Bateria": "6h + 24h (estojo)",
            "Conectividade": "Bluetooth 5.3",
            "Resistência": "IPX4"
        }
    },
    {
        id: 13,
        name: "Apple Watch Series 9",
        price: 3999.99,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Apple Watch Series 9 com chip S9 e recursos avançados de saúde.",
        category: "acessorios",
        badge: "Novo",
        colors: ["Preto", "Branco", "Rosa", "Azul"],
        specifications: {
            "Tela": "45mm Always-On Retina",
            "Processador": "Apple S9",
            "Bateria": "18 horas",
            "Resistência": "50m à prova d'água"
        }
    },
    {
        id: 14,
        name: "Sony WH-1000XM5",
        price: 1899.99,
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Headphone Sony com cancelamento de ruído líder da indústria.",
        category: "acessorios",
        badge: "Premium",
        colors: ["Preto", "Prata"],
        specifications: {
            "Cancelamento de Ruído": "Ativo Premium",
            "Bateria": "30 horas",
            "Conectividade": "Bluetooth 5.2",
            "Drivers": "30mm"
        }
    },
    {
        id: 15,
        name: "Samsung Galaxy Buds2 Pro",
        price: 899.99,
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Galaxy Buds2 Pro com áudio Hi-Fi de 24 bits e cancelamento inteligente.",
        category: "acessorios",
        badge: "Hi-Fi",
        colors: ["Preto", "Branco", "Violeta"],
        specifications: {
            "Áudio": "Hi-Fi 24-bit",
            "Cancelamento de Ruído": "Inteligente",
            "Bateria": "8h + 20h (estojo)",
            "Resistência": "IPX7"
        }
    },
    {
        id: 16,
        name: "JBL Charge 5",
        price: 699.99,
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Caixa de som JBL Charge 5 portátil com som potente e à prova d'água.",
        category: "acessorios",
        badge: "Portátil",
        colors: ["Preto", "Azul", "Vermelho", "Verde"],
        specifications: {
            "Potência": "40W RMS",
            "Bateria": "20 horas",
            "Conectividade": "Bluetooth 5.1",
            "Resistência": "IP67"
        }
    },
    {
        id: 17,
        name: "Carregador Wireless Anker",
        price: 199.99,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Carregador sem fio Anker PowerWave com carregamento rápido de 15W.",
        category: "acessorios",
        badge: "Rápido",
        colors: ["Preto", "Branco"],
        specifications: {
            "Potência": "15W",
            "Compatibilidade": "Qi Universal",
            "Segurança": "Proteção múltipla",
            "Design": "Ultra-fino"
        }
    },
    {
        id: 18,
        name: "Power Bank Xiaomi 20000mAh",
        price: 299.99,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Power Bank Xiaomi com 20000mAh e carregamento rápido bidirecional.",
        category: "acessorios",
        badge: "Alta Capacidade",
        colors: ["Preto", "Branco"],
        specifications: {
            "Capacidade": "20000mAh",
            "Entrada": "USB-C 18W",
            "Saída": "22.5W",
            "Portas": "3 saídas simultâneas"
        }
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = [...products];
let selectedProduct = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchProducts(query);
    });

    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        processCheckout();
    });

    // Chat input
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Close modals on overlay click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// Product functions
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    
    if (currentProducts.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente buscar por outro termo</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = currentProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn-secondary" onclick="event.stopPropagation(); openProductModal(${product.id})">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter products
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    loadProducts();
}

function searchProducts(query = '') {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = query || searchInput.value.toLowerCase();
    
    if (searchQuery === '') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery)
        );
    }
    
    loadProducts();
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    
    switch(sortBy) {
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-asc':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
    }
    
    loadProducts();
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Product modal functions
function openProductModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    
    if (!selectedProduct) return;
    
    document.getElementById('modalProductName').textContent = selectedProduct.name;
    document.getElementById('modalProductImage').src = selectedProduct.image;
    document.getElementById('modalProductPrice').textContent = `R$ ${selectedProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    
    // Build description with specifications
    let description = `<p>${selectedProduct.description}</p><br>`;
    description += '<h4>Especificações:</h4><ul>';
    for (const [key, value] of Object.entries(selectedProduct.specifications)) {
        description += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    description += '</ul>';
    
    document.getElementById('modalProductDescription').innerHTML = description;
    
    // Setup color options
    const colorSelect = document.getElementById('modalColorSelect');
    colorSelect.innerHTML = selectedProduct.colors.map(color => 
        `<option value="${color.toLowerCase()}">${color}</option>`
    ).join('');
    
    showModal('productModal');
}

function addToCartFromModal() {
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const color = document.getElementById('modalColorSelect').value;
    
    addToCart(selectedProduct.id, quantity, color);
    closeModal('productModal');
}

// Cart functions
function addToCart(productId, quantity = 1, color = 'preto') {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.color === color);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            color: color
        });
    }
    
    updateCartUI();
    saveCart();
    showNotification('Produto adicionado ao carrinho!');
}

function removeFromCart(productId, color) {
    cart = cart.filter(item => !(item.id === productId && item.color === color));
    updateCartUI();
    saveCart();
}

function updateCartQuantity(productId, color, newQuantity) {
    const item = cart.find(item => item.id === productId && item.color === color);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, color);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartContent = document.getElementById('cartContent');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Carrinho vazio</h3>
                <p>Adicione produtos para começar</p>
            </div>
        `;
        cartTotal.textContent = '0,00';
        return;
    }
    
    cartContent.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.color}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.color}', ${item.quantity + 1})">+</button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id}, '${item.color}')" style="background: #ef4444; color: white; margin-left: 10px;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
    
    // Show/hide overlay
    const overlay = document.getElementById('overlay') || createOverlay();
    if (cartSidebar.classList.contains('open')) {
        overlay.classList.add('show');
    } else {
        overlay.classList.remove('show');
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Checkout functions
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    toggleCart();
    showModal('checkoutModal');
}

function processCheckout() {
    const formData = new FormData(document.getElementById('checkoutForm'));
    const orderData = {
        items: [...cart],
        customer: Object.fromEntries(formData),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };
    
    // Save order to localStorage (in real app, send to server)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({ ...orderData, id: Date.now() });
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    updateCartUI();
    saveCart();
    
    closeModal('checkoutModal');
    showNotification('Pedido realizado com sucesso! Você receberá um e-mail de confirmação.');
}

// Modal functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Chat functions
function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    chatBody.classList.toggle('open');
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    const chatMessages = document.getElementById('chatMessages');
    
    // Add user message
    chatMessages.innerHTML += `
        <div class="message user-message">
            <p>${message}</p>
        </div>
    `;
    
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const responses = [
            'Obrigado pela sua mensagem! Em que posso ajudá-lo?',
            'Estou aqui para ajudar. Qual produto você gostaria de saber mais?',
            'Posso te ajudar com informações sobre nossos produtos. O que você procura?',
            'Ótima pergunta! Vou te ajudar com isso.',
            'Para um atendimento mais personalizado, que tal continuarmos no WhatsApp?'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        chatMessages.innerHTML += `
            <div class="message bot-message">
                <p>${randomResponse}</p>
            </div>
        `;
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function openWhatsApp() {
    const message = encodeURIComponent('Olá! Vim do site da Eletro e gostaria de mais informações sobre os produtos.');
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, '_blank');
}

// Utility functions
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    overlay.addEventListener('click', () => {
        toggleCart();
    });
    document.body.appendChild(overlay);
    return overlay;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-message';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.zIndex = '1003';
    notification.style.maxWidth = '300px';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize overlay
document.addEventListener('DOMContentLoaded', function() {
    createOverlay();
});