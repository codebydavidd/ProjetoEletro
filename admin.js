// Admin dashboard functionality
let currentSection = 'dashboard';
let adminProducts = [];
let adminOrders = [];
let adminCustomers = [];

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    loadAdminData();
    setupAdminEventListeners();
    updateDashboardStats();
});

// Setup event listeners
function setupAdminEventListeners() {
    // Add product form
    document.getElementById('addProductForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addProduct();
    });

    // Close modals on overlay click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        products: 'Produtos',
        orders: 'Pedidos',
        customers: 'Clientes'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId];
    
    currentSection = sectionId;
    
    // Load section-specific data
    switch(sectionId) {
        case 'products':
            loadProducts();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'customers':
            loadCustomers();
            break;
    }
}

// Load initial admin data
function loadAdminData() {
    // Load sample products (in real app, this would come from server)
    adminProducts = [
        { id: 1, name: 'iPhone 15 Pro', category: 'smartphones', price: 8999.99, status: 'active' },
        { id: 2, name: 'Samsung Galaxy S24', category: 'smartphones', price: 7499.99, status: 'active' },
        { id: 3, name: 'Xiaomi 14 Ultra', category: 'smartphones', price: 5999.99, status: 'active' },
        { id: 4, name: 'Google Pixel 8 Pro', category: 'smartphones', price: 6799.99, status: 'active' },
        { id: 5, name: 'MacBook Pro M3', category: 'laptops', price: 12999.99, status: 'active' },
        { id: 6, name: 'Dell XPS 13', category: 'laptops', price: 8999.99, status: 'active' },
        { id: 7, name: 'Lenovo ThinkPad X1 Carbon', category: 'laptops', price: 9999.99, status: 'active' },
        { id: 8, name: 'ASUS ROG Strix G15', category: 'laptops', price: 7999.99, status: 'active' },
        { id: 9, name: 'iPad Pro 12.9', category: 'tablets', price: 6999.99, status: 'active' },
        { id: 10, name: 'Samsung Galaxy Tab S9', category: 'tablets', price: 4999.99, status: 'active' },
        { id: 11, name: 'Microsoft Surface Pro 9', category: 'tablets', price: 8499.99, status: 'active' },
        { id: 12, name: 'AirPods Pro 2', category: 'acessorios', price: 2299.99, status: 'active' },
        { id: 13, name: 'Apple Watch Series 9', category: 'acessorios', price: 3999.99, status: 'active' },
        { id: 14, name: 'Sony WH-1000XM5', category: 'acessorios', price: 1899.99, status: 'active' },
        { id: 15, name: 'Samsung Galaxy Buds2 Pro', category: 'acessorios', price: 899.99, status: 'active' },
        { id: 16, name: 'JBL Charge 5', category: 'acessorios', price: 699.99, status: 'active' },
        { id: 17, name: 'Carregador Wireless Anker', category: 'acessorios', price: 199.99, status: 'active' },
        { id: 18, name: 'Power Bank Xiaomi 20000mAh', category: 'acessorios', price: 299.99, status: 'active' }
    ];
    
    // Load orders from localStorage
    adminOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Generate sample customers based on orders
    adminCustomers = generateCustomersFromOrders(adminOrders);
}

// Dashboard functions
function updateDashboardStats() {
    const totalOrders = adminOrders.length;
    const totalCustomers = adminCustomers.length;
    
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('totalCustomers').textContent = totalCustomers;
}

// Product management functions
function loadProducts() {
    const tbody = document.getElementById('productsTableBody');
    
    if (adminProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <i class="fas fa-box"></i>
                    <p>Nenhum produto cadastrado</p>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = adminProducts.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${getCategoryName(product.category)}</td>
            <td>R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td>
                <span class="status-badge status-${product.status}">
                    ${product.status === 'active' ? 'Ativo' : 'Inativo'}
                </span>
            </td>
            <td>
                <button class="btn-secondary" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-danger" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function showAddProductModal() {
    showModal('addProductModal');
}

function addProduct() {
    const formData = new FormData(document.getElementById('addProductForm'));
    const newProduct = {
        id: Math.max(...adminProducts.map(p => p.id)) + 1,
        name: formData.get('name'),
        category: formData.get('category'),
        price: parseFloat(formData.get('price')),
        description: formData.get('description'),
        image: formData.get('image'),
        status: 'active'
    };
    
    adminProducts.push(newProduct);
    loadProducts();
    closeModal('addProductModal');
    document.getElementById('addProductForm').reset();
    showNotification('Produto adicionado com sucesso!');
}

function editProduct(id) {
    const product = adminProducts.find(p => p.id === id);
    if (product) {
        // In a real app, this would open an edit modal
        alert(`Editando produto: ${product.name}`);
    }
}

function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        adminProducts = adminProducts.filter(p => p.id !== id);
        loadProducts();
        showNotification('Produto excluído com sucesso!');
    }
}

// Order management functions
function loadOrders() {
    const tbody = document.getElementById('ordersTableBody');
    
    if (adminOrders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Nenhum pedido encontrado</p>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = adminOrders.map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>${order.customer['Nome Completo'] || 'Cliente'}</td>
            <td>${new Date(order.date).toLocaleDateString('pt-BR')}</td>
            <td>R$ ${order.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td>
                <span class="status-badge status-${getOrderStatus(order)}">
                    ${getOrderStatusText(order)}
                </span>
            </td>
            <td>
                <button class="btn-secondary" onclick="viewOrderDetails(${order.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-secondary" onclick="updateOrderStatus(${order.id})">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function viewOrderDetails(orderId) {
    const order = adminOrders.find(o => o.id === orderId);
    if (!order) return;
    
    const orderDetailsContent = document.getElementById('orderDetailsContent');
    
    orderDetailsContent.innerHTML = `
        <div class="order-details">
            <div class="order-info">
                <h4>Informações do Pedido</h4>
                <p><strong>ID:</strong> #${order.id}</p>
                <p><strong>Data:</strong> ${new Date(order.date).toLocaleDateString('pt-BR')}</p>
                <p><strong>Status:</strong> ${getOrderStatusText(order)}</p>
                <p><strong>Total:</strong> R$ ${order.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
            <div class="order-info">
                <h4>Informações do Cliente</h4>
                <p><strong>Nome:</strong> ${order.customer['Nome Completo'] || 'N/A'}</p>
                <p><strong>Email:</strong> ${order.customer['Email'] || 'N/A'}</p>
                <p><strong>Telefone:</strong> ${order.customer['Telefone'] || 'N/A'}</p>
                <p><strong>Endereço:</strong> ${order.customer['Endereço'] || 'N/A'}</p>
            </div>
        </div>
        
        <div class="order-items">
            <h4>Itens do Pedido</h4>
            ${order.items.map(item => `
                <div class="order-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-details">
                            Cor: ${item.color} | Quantidade: ${item.quantity} | 
                            Preço: R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    showModal('orderDetailsModal');
}

function updateOrderStatus(orderId) {
    const order = adminOrders.find(o => o.id === orderId);
    if (order) {
        // In a real app, this would show a status update modal
        alert(`Atualizando status do pedido #${orderId}`);
    }
}

function filterOrders() {
    const filter = document.getElementById('orderStatusFilter').value;
    // In a real app, this would filter the orders display
    loadOrders();
}

// Customer management functions
function loadCustomers() {
    const tbody = document.getElementById('customersTableBody');
    
    if (adminCustomers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    <i class="fas fa-users"></i>
                    <p>Nenhum cliente cadastrado</p>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = adminCustomers.map(customer => `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.orderCount}</td>
            <td>
                <button class="btn-secondary" onclick="viewCustomer(${customer.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-secondary" onclick="contactCustomer('${customer.email}')">
                    <i class="fas fa-envelope"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function viewCustomer(customerId) {
    const customer = adminCustomers.find(c => c.id === customerId);
    if (customer) {
        alert(`Visualizando cliente: ${customer.name}`);
    }
}

function contactCustomer(email) {
    window.open(`mailto:${email}`);
}

function exportCustomers() {
    // In a real app, this would generate and download a CSV file
    alert('Exportando lista de clientes...');
}

// Utility functions
function getCategoryName(category) {
    const categories = {
        smartphones: 'Smartphones',
        laptops: 'Laptops',
        tablets: 'Tablets',
        acessorios: 'Acessórios'
    };
    return categories[category] || category;
}

function getOrderStatus(order) {
    // Simple random status for demo
    const statuses = ['pending', 'processing', 'shipped', 'delivered'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function getOrderStatusText(order) {
    const statusMap = {
        pending: 'Pendente',
        processing: 'Processando',
        shipped: 'Enviado',
        delivered: 'Entregue'
    };
    return statusMap[getOrderStatus(order)] || 'Pendente';
}

function generateCustomersFromOrders(orders) {
    const customers = [];
    const uniqueCustomers = new Map();
    
    orders.forEach(order => {
        const customerKey = order.customer['Email'] || order.customer['Nome Completo'];
        if (!uniqueCustomers.has(customerKey)) {
            uniqueCustomers.set(customerKey, {
                id: customers.length + 1,
                name: order.customer['Nome Completo'] || 'Cliente',
                email: order.customer['Email'] || 'N/A',
                phone: order.customer['Telefone'] || 'N/A',
                orderCount: 1
            });
        } else {
            uniqueCustomers.get(customerKey).orderCount++;
        }
    });
    
    return Array.from(uniqueCustomers.values());
}

// Modal functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Notification function
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