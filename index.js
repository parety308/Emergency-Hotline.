// Refactor repetitive event listeners
const serviceButtons = [
    { copy: 'national-copy', call: 'national-call', numId: 'national-num', titleId: 'national-title' },
    { copy: 'police-copy', call: 'police-call', numId: 'police-num', titleId: 'police-title' },
    { copy: 'fire-copy', call: 'fire-call', numId: 'fire-num', titleId: 'fire-title' },
    { copy: 'ambulance-copy', call: 'ambulance-call', numId: 'ambulance-num', titleId: 'ambulance-title' },
    { copy: 'child-women-copy', call: 'child-women-call', numId: 'child-women-num', titleId: 'child-women-title' },
    { copy: 'anti-copy', call: 'anti-call', numId: 'anti-num', titleId: 'anti-title' },
    { copy: 'electricity-copy', call: 'electricity-call', numId: 'electricity-num', titleId: 'electricity-title' },
    { copy: 'brac-copy', call: 'brac-call', numId: 'brac-num', titleId: 'brac-title' },
    { copy: 'railway-copy', call: 'railway-call', numId: 'railway-num', titleId: 'railway-title' }
];

// Attach listeners dynamically
serviceButtons.forEach(service => {
    document.getElementById(service.copy)?.addEventListener('click', () => copy_Count(service.numId));
    document.getElementById(service.call)?.addEventListener('click', () => handleCall(service.titleId, service.numId));
});

function handleCall(titleId, numId) {
    if (coinCount < 20) {
        alert('Insufficient balance. Need 20 Coin.');
        return;
    }
    getNum(titleId, numId);
}
