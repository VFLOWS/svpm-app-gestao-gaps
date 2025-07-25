document.addEventListener('DOMContentLoaded', function() {
    // Configuração dos itens do menu
    const menuItems = [
        { id: 'dashboard', icon: 'fa-house', text: 'Dashboard', file: 'gap_dashboard.html' },
        { id: 'gaps', icon: 'fa-list-ul', text: 'GAPs List', file: 'gap_details.html' },
        { id: 'area', icon: 'fa-layer-group', text: 'Visão por Área', file: 'gap_details_area.html' },
        { id: 'new', icon: 'fa-plus-circle', text: 'Novo GAP', file: 'gap_new.html' },
        { id: 'overview', icon: 'fa-chart-pie', text: 'Visão Geral', file: 'gap_overview.html' },
        { id: 'plans', icon: 'fa-list-check', text: 'Planos de Ação', file: 'gap_register_action_plan.html' },
        { id: 'validation', icon: 'fa-check-double', text: 'Validação', file: '#' }
    ];

    // Obtém o container do menu
    const navContainer = document.querySelector('#sidebar nav');
    if (!navContainer) return;

    // Obtém o nome do arquivo atual
    const currentPage = window.location.pathname.split('/').pop() || 'gap_dashboard.html';

    // Limpa o menu atual
    navContainer.innerHTML = '';

    // Adiciona os itens do menu
    menuItems.forEach(item => {
        const isActive = currentPage === item.file;
        const menuItem = document.createElement('a');
        menuItem.href = item.file;
        menuItem.className = `flex items-center px-6 py-3 ${isActive ? 'text-primary bg-blue-50' : 'text-gray-600 hover:bg-secondary'} cursor-pointer`;
        menuItem.innerHTML = `
            <i class="fa-solid ${item.icon} w-5"></i>
            <span class="ml-3">${item.text}</span>
        `;
        navContainer.appendChild(menuItem);
    });
});
