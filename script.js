document.getElementById('pricingToggle').addEventListener('change', function() {
    const isChecked = this.checked;
    document.getElementById('basic-price').innerHTML = isChecked ? '$100<span>/yr</span>' : '$10<span>/mo</span>';
    document.getElementById('standard-price').innerHTML = isChecked ? '$200<span>/yr</span>' : '$20<span>/mo</span>';
    document.getElementById('premium-price').innerHTML = isChecked ? '$300<span>/yr</span>' : '$30<span>/mo</span>';
});